import fs from "fs/promises";
import path from "path";
import z from "zod";
import matter from "gray-matter";

// get the path to the posts directory (content)
const postsDirectory = path.join(process.cwd(), "content");

const PostSchema = z.object({
    // define the title lenght (for SEO purposes)  
    title: z.string().min(45).max(65),
    description: z.string(),
    publishedAt: z.coerce.string(),
    published: z.boolean().optional().default(false),
});

// define the Post types
type Post = z.infer<typeof PostSchema> & {
    slug: string;
    content: string;
};

export const getPosts = async () => {
    const files = await fs.readdir(postsDirectory);

    //  Filter out non-mdx files
    const fileNames = files.filter((file) => file.endsWith(".mdx"));

    const posts: Post[] = [];

    // for each file, read its content
    for await (const fileName of fileNames) {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContent = await fs.readFile(fullPath, "utf-8");
      // parse the front matter
      const frontMatter = matter(fileContent);

      // validate the data
      const safeData = PostSchema.safeParse(frontMatter.data);
      // if the data is not valid, log the error and continue to the next file
      if (!safeData.success) {
        console.error(`Error parsing in file : ${fileName} - ${safeData.error.issues
            .map((i) => i.message)
            .join(", ")}`);
        continue;
      }

      // push the post to the posts array, with the slug and the content
      posts.push({
        ...safeData.data,
        slug: fileName.replace(".mdx", ""),
        content: frontMatter.content,
      });
    }

    return posts;
}