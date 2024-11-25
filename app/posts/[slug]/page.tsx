import { getPost } from "@/lib/posts";
import { notFound } from "next/navigation";

export default async function RoutePage(props: {params: {slug: string}}) {
    const post = await getPost(props.params.slug);

    if (!post) {
        notFound();
    }

    return(
        <div className="prose prose-sm lg:prose-lg">
            <p className="text-xs text-muted-foreground"> 
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            <h1>{post.title}</h1>   
        </div>
    );
}