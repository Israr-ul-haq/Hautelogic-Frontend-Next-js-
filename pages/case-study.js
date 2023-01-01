import Head from "next/head";

import NextNProgress from "nextjs-progressbar";
import CaseBlog from "../components/CaseStudy/CaseBlog";
export default function CaseStudy({ data, footerData, tabsData }) {
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
        <title>Business Transformation Case Studies | Hautelogic</title>
        <meta
          name="description"
          content="The following case studies highlight how Hautelogic empowered fashion, apparel, and footwear brands efficiently address its supply chain challenges. Learn more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <CaseBlog data={data} footerData={footerData} tabsData={tabsData} /> */}
      <CaseBlog footerData={footerData} data={data} />
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const url =
    process.env.NODE_ENV === "production"
      ? "http://localhost:1337"
      : "http://localhost:1337";
  const res = await fetch(`${url}/api/case-studies?populate=*`);

  const data = await res.json();

  const resTabsData = await fetch(`${url}/api/blog-tabs?populate=*`);
  const tabsData = await resTabsData.json();

  const resFooterData = await fetch(`${url}/api/footer?populate=*`);
  const footerData = await resFooterData.json();

  // // Pass data to the page via props
  return { props: { data, footerData, tabsData } };
  // return { props: { footerData } };
}
