import {
  Card,
  CardDescription,
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
          <p className="text-sm text-muted-foreground">
            {dayjs(post.publishedAt).format('D MMMM YYYY')}
          </p>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{post.description}</CardDescription>
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