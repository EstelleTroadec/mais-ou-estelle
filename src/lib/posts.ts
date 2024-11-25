import fs from "fs/promises";
import path from "path";
import z from "zod";
import matter from "gray-matter";

// get the path to the posts directory
const postsDirectory = path.join(process.cwd(), "content/posts");

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
        console.error(`Error parsing file: ${fileName}`);
      safeData.error.issues.forEach((issue) => {
        console.error(`  - ${issue.path.join(" -> ")}: ${issue.message}`);
      });
        continue;
      }
      // if the post is not published and we are not in development mode, skip it
      if (!safeData.data.published && process.env.NODE_ENV !== "development") {
        continue;
      }

      // push the post to the posts array, with the slug and the content
      posts.push({
        ...safeData.data,
        // remove the prefix and the .mdx extension from the file name (to get a SEO friendly slug)
        slug: fileName.replace(/^(0\d+-)/, "").replace(".mdx", ""),
        content: frontMatter.content,
      });
    }

    return posts;
};

export const getPost = async (slug: string) => {
    const posts = await getPosts();
    // find the post with the given slug
    return posts.find((post) => post.slug === slug);
}