import { Mdx } from "@/features/mdx/Mdx";
import { getPost } from "@/lib/posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ViewCount } from "../../../src/components/viewsCount/ViewCount";
import { LikeCount } from "../../../src/components/likesCount/LikeCount";
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

dayjs.locale('fr');

export const dynamic = "force-static";

export const generateMetadata = async (props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const post = await getPost((await props.params).slug);

  if (!post) {
    return {
      title: "404 - Page Not Found",
      description: "Page not found",
    };
  }

  return {
    title: post.title,
  };
};

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const post = await getPost((await props.params).slug);

  if (!post) {
    notFound();
  }

  return (
    (<div className="prose prose-sm m-auto w-3/4 lg:prose-lg">
      <div className="flex items-center gap-2 text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-muted-foreground">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
        <p className="text-muted-foreground">
          {dayjs(post.publishedAt).format('D MMMM YYYY')} 
          <span className="ml-2 font-bold">·</span>
        </p>
        <ViewCount slug={(await props.params).slug} />
      </div>
      <h1>{post.title}</h1>
      <Mdx>{post.content}</Mdx>
      <LikeCount slug={(await props.params).slug} />
    </div>)
  );
}