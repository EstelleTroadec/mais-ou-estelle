import { Mdx } from "@/features/mdx/Mdx";
import { getCountryPage } from "@/lib/countryPages";
import { Metadata } from "next";
import { notFound } from "next/navigation";
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

export default async function RoutePage(props: { params: { slug: string } }) {
  const countryPage = await getCountryPage(props.params.slug);

  if (!countryPage) {
    notFound();
  }

  return (
    <div className="m-auto w-3/4">
      <h1 className="my-40 text-center font-poppins text-[4rem] font-semibold uppercase">{countryPage.name}</h1>
      <div className="mt-8 flex flex-col lg:flex-row">
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
    </div>
  );
}