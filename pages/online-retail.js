import Head from "next/head";
import OnlineRetail from "../components/onlineretail/OnlineRetail";
import NextNProgress from "nextjs-progressbar";
export default function OnlineRetailPage({ data, footerData, tabsData }) {
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
        <title>
          Redefining Online Retail for Fashion, Apparel, and Footwear.
        </title>
        <meta
          name="description"
          content="We help retailers harness the power of the cloud to streamline and automate complex business processes in real-time to achieve omnichannel success. Learn more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OnlineRetail data={data} footerData={footerData} tabsData={tabsData} />
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
  const res = await fetch(`${url}/api/online-retail?populate=*`);
  const data = await res.json();

  const resTabsData = await fetch(`${url}/api/online-retail-tabs?populate=*`);
  const tabsData = await resTabsData.json();

  const resFooterData = await fetch(`${url}/api/footer?populate=*`);
  const footerData = await resFooterData.json();

  // Pass data to the page via props
  return { props: { data, footerData, tabsData } };
}
