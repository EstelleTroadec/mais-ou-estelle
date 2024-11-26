import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardImage,
} from "@/components/ui/card";
import { getPosts } from "@/lib/posts";
import Link from "next/link";
import { LikeCount } from "../src/components/likesCount/LikeCount";
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

dayjs.locale('fr');

export default async function Home() {
  const posts = await getPosts();
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.slug}>
          <CardHeader>
            <CardImage src={post.mainImage} alt={post.title} />
            <div className="items-center gap-2">
              <div className="my-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2.5 mt-0.5 size-3.5 text-muted-foreground">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                <p className="text-sm text-muted-foreground">
                  {dayjs(post.publishedAt).format('D MMMM YYYY')}
                </p>
              </div>
            </div>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
          <CardFooter>
            <Link
              className="text-blue-500 hover:underline"
              href={`/posts/${post.slug}`}
            >
              Voir plus →
            </Link>
            <LikeCount slug={post.slug} /> 
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}