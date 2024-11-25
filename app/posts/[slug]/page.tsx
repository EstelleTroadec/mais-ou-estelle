import { getPost } from "@/lib/posts";

export default async function RoutePage(props: {params: {slug: string}}) {
    const post = await getPost(props.params.slug);

    return(
        <div>
            <h1>{post.title}</h1>
        </div>
    );
}