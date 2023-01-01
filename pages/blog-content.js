import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import BlogContent from "../components/blog/BlogContent";
export default function BlogContentPage({ data, footerData, tabsData }) {
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
        <title>Hautelogic - Blog Content</title>
        <meta name="description" content="Hautelogic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogContent data={data} footerData={footerData} />
    </>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  const { id } = context.query;
  // Fetch data from external API
  const url =
    process.env.NODE_ENV === "production"
      ? "http://localhost:1337"
      : "http://localhost:1337";

  const res = await fetch(`${url}/api/blog-tabs/${id}?populate=*`);
  const data = await res.json();

  const resFooterData = await fetch(`${url}/api/footer?populate=*`);
  const footerData = await resFooterData.json();

  // Pass data to the page via props
  return { props: { data, footerData } };
}
