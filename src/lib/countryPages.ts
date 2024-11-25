import fs from "fs/promises";
import path from "path";
// import zod to validate the data
import z from "zod";
import matter from "gray-matter";

// get the path to the country pages directory (content)
const countryPagesDirectory = path.join(process.cwd(), "content/countries");

// validate the front matter data
const countryPagesSchema = z.object({
    mainImage: z.string(),
    name: z.string(),
    continent: z.string(),
    capital: z.string(),
    money: z.string(),
    language: z.string(),
    published: z.boolean().optional().default(false),
  });

// define the country page types
type CountryPage = z.infer<typeof countryPagesSchema> & {
    slug: string;
    content: string;
  };
  
export const getCountryPages = async () => {
    const files = await fs.readdir(countryPagesDirectory);

    //  Filter out non-mdx files
    const fileNames = files.filter((file) => file.endsWith(".mdx"));

    const countryPages: CountryPage[] = [];

    // for each file, read its content
    for await (const fileName of fileNames) {
    const fullPath = path.join(countryPagesDirectory, fileName);
    const fileContent = await fs.readFile(fullPath, "utf-8");
    // parse the front matter
    const frontMatter = matter(fileContent);

    // validate the data
    const safeData = countryPagesSchema.safeParse(frontMatter.data);
    // if the data is not valid, log the error and continue to the next file
    if (!safeData.success) {
        console.error(`Error parsing file: ${fileName}`);
    safeData.error.issues.forEach((issue) => {
        console.error(`  - ${issue.path.join(" -> ")}: ${issue.message}`);
    });
        continue;
    }

    // if the country page is not published and we are not in development mode, skip it
    if (!safeData.data.published && process.env.NODE_ENV !== "development") {
        continue;
    }

    // push the country page to the country pages array, with the slug and the content
    countryPages.push({
        ...safeData.data,
        // remove the prefix and the .mdx extension from the file name (to get a SEO friendly slug)
        slug: fileName.replace(".mdx", ""),
        content: frontMatter.content,
    });
    }

    return countryPages;

};

export const getCountryPage = async (slug: string) => {
    const countryPages = await getCountryPages();
    // find the country page with the given slug
    return countryPages.find((countryPage) => countryPage.slug === slug);
}