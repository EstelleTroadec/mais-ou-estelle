import { Mdx } from "@/features/mdx/Mdx";
import { getPost } from "@/lib/posts";
import { notFound } from "next/navigation";
import { ViewCount } from "../../../src/components/viewsCount/ViewCount";
import { LikeCount } from "../../../src/components/likesCount/LikeCount";

export default async function PostPage(props: {params: {slug: string}}) {
    const post = await getPost(props.params.slug);

    if (!post) {
        notFound();
    }

    return(
        <div className="prose prose-sm lg:prose-lg">
            <p className="text-xs text-muted-foreground"> 
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            <ViewCount slug={(await props.params).slug} />
            <h1>{post.title}</h1>
            <Mdx>{post.content}</Mdx>
            <LikeCount slug={(await props.params).slug} />   
        </div>
    );
}