import { getPosts } from "@/lib/posts";


export default async function Home() {
  const fileNames = await getPosts();
  return (
    <ul className="list-inside list-disc">
      {fileNames.map((fileName) => (
        <li key={fileName.slug}>{fileName.title}</li>
      ))}
    </ul>
  );
}