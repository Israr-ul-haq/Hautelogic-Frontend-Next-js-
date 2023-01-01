import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import CasestudyContent from "../components/CaseStudy/CasestudyContent";
export default function CasestudyContentPage({ data, footerData, tabsData }) {
  return (
    <>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ showSpinner: true }}
      />

      <Head>
        <title>A Leading Fashion Business Transforms its Supply Chain</title>
        <meta
          name="description"
          content="Download our case study to discover how a leading fashion organization transformed its
supply chain for better performance with HauteLogic."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CasestudyContent data={data} footerData={footerData} />
    </>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  const { slug } = context.query;

  // Fetch data from external API
  const url =
    process.env.NODE_ENV === "production"
      ? "http://localhost:1337"
      : "http://localhost:1337";

  const res = await fetch(`${url}/api/case-studies/${slug}?populate=*`);

  const data = await res.json();

  const resFooterData = await fetch(`${url}/api/footer?populate=*`);
  const footerData = await resFooterData.json();

  // Pass data to the page via props
  return { props: { footerData, data } };
}
