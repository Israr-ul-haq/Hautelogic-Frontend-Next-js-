import Head from "next/head";
import Blog from "../components/blog/Blog";
import NextNProgress from "nextjs-progressbar";
export default function BlogPage({ data, footerData, tabsData }) {
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
        <title>Supply Chain Transformation Blogs | Hautelogic</title>
        <meta
          name="description"
          content="Hautelogic's supply chain blogs provide radical thinking and application of disruptive technologies that simplify fashion and apparel challenges. Read more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Blog data={data} footerData={footerData} tabsData={tabsData} />
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
  const res = await fetch(`${url}/api/blog?populate=*`);
  const data = await res.json();

  const resTabsData = await fetch(
    `${url}/api/blog-tabs?sort=publishedAt&populate=*`
  );
  const tabsData = await resTabsData.json();

  const resFooterData = await fetch(`${url}/api/footer?populate=*`);
  const footerData = await resFooterData.json();

  // Pass data to the page via props
  return { props: { data, footerData, tabsData } };
}
