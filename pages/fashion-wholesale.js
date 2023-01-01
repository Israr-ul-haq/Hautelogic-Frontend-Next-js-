import Head from "next/head";
import Fashion from "../components/fashion/Fashion";
import NextNProgress from "nextjs-progressbar";
export default function FashionPage({ data, footerData, tabsData }) {
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
        <title>Fashion Wholesale Supply Chain Management — Hautelogic</title>
        <meta
          name="description"
          content="Our end-to-end cloud software solution simplifies wholesale supply chain management for the leading fashion, apparel and footwear brands. Learn more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Fashion data={data} footerData={footerData} tabsData={tabsData} />
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  //const url = process.env.NODE_ENV === "production" ? process.env.BASE_URL : "http://localhost:1337" ;
  const url =
    process.env.NODE_ENV === "production"
      ? "http://localhost:1337"
      : "http://localhost:1337";
  const res = await fetch(`${url}/api/fashion-wholesale?populate=*`);
  const data = await res.json();

  const resTabsData = await fetch(
    `${url}/api/fashion-wholesale-sections?populate=*`
  );
  const tabsData = await resTabsData.json();

  const resFooterData = await fetch(`${url}/api/footer?populate=*`);
  const footerData = await resFooterData.json();

  // Pass data to the page via props
  return { props: { data, footerData, tabsData } };
}
