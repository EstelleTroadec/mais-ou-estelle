import { Mdx } from "@/features/mdx/Mdx";
import { getPosts } from "@/lib/posts";
import { getCountryPage } from "@/lib/countryPages";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardImage
} from "@/components/ui/card";
import { LikeCount } from "../../../src/components/likesCount/LikeCount";
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

dayjs.locale('fr');

export const dynamic = "force-static";

export const generateMetadata = async (props: {
  params: { slug: string };
}): Promise<Metadata> => {
  const countryPage = await getCountryPage(props.params.slug);

  if (!countryPage) {
    return {
      title: "404 - Page Not Found",
      description: "Page not found",
    };
  }

  return {
    title: countryPage.name,
  };
};

export default async function CountryPage(props: { params: { slug: string } }) {
  const countryPage = await getCountryPage(props.params.slug);

  if (!countryPage) {
    notFound();
  }

  const posts = await getPosts();

  return (
    <div className="m-auto w-3/4">
      <h1 className="my-40 text-center font-poppins text-[4rem] font-semibold uppercase">{countryPage.name}</h1>
      <div className="mb-20 mt-8 flex flex-col lg:flex-row">
        <div className="mt-6 lg:w-1/3">
          <div className="font-courrier mb-2 uppercase">
            <h2 className="font-courrier text-[1rem]">PAYS</h2>
            <p className="font-semibold">{countryPage.name}</p>
          </div>
          <div className="font-courrier mb-2 uppercase">
            <h2 className="font-courrier text-[1rem]">CONTINENT</h2>
            <p className="font-semibold">{countryPage.continent}</p>
          </div>
          <div className="font-courrier mb-2 uppercase">
            <h2 className="font-courrier text-[1rem]">CAPITALE</h2>
            <p className="font-semibold">{countryPage.capital}</p>
          </div>
          <div className="font-courrier mb-2 uppercase">
            <h2 className="font-courrier text-[1rem]">DEVISE</h2>
            <p className="font-semibold">{countryPage.money}</p>
          </div>
          <div className="font-courrier mb-2 uppercase">
            <h2 className="font-courrier text-[1rem]">LANGUE(S)</h2>
            <p className="font-semibold">{countryPage.language}</p>
          </div>
        </div>
        <div className="prose prose-sm mt-8 lg:prose-lg lg:mt-0 lg:w-2/3 lg:pl-8">
          <Mdx>{countryPage.content}</Mdx>
        </div>
      </div>
      <div className="m-auto space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {posts.map((post) => (
              <Card key={post.slug} className="flex flex-col gap-2">
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
                  <Link href={`/posts/${post.slug}`}>
                    <CardTitle className="text-footerBg">
                      {post.title}
                    </CardTitle>
                  </Link>
                </CardHeader>
                <CardFooter className="flex flex-col items-start text-muted-foreground">
                  <LikeCount slug={post.slug} />
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}