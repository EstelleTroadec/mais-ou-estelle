import { Mdx } from "@/features/mdx/Mdx";
import { getCountryPage } from "@/lib/countryPages";
import { Metadata } from "next";
import { notFound } from "next/navigation";


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

export default async function RoutePage(props: { params: { slug: string } }) {
  const countryPage = await getCountryPage(props.params.slug);

  if (!countryPage) {
    notFound();
  }

  return (
    <div className="prose prose-sm w-full lg:prose-lg">
        <h1 className="font-poppins uppercase ">{countryPage.name}</h1>
      <div>
        <div>
          <h2>PAYS</h2>
          <p className="uppercase">{countryPage.name}</p>
        </div>
        <div>
          <h2>CONTINENT</h2>
          <p>{countryPage.continent}</p>
        </div>
        <div>
          <h2>PAYS</h2>
          <p>{countryPage.name}</p>
        </div>
      </div>
      <div>
        <Mdx>{countryPage.content}</Mdx>
      </div>
    </div>
  );
}