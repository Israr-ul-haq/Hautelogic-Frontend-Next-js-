import Head from "next/head";
import ApparelManagement from "../components/ApparelManagement/ApparelManagement";
import NextNProgress from "nextjs-progressbar";
export default function BrickMotorPage({ data, footerData, tabsData }) {
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
        <title>Hautelogic - Brick Mortar Retail</title>
        <meta name="description" content="Hautelogic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ApparelManagement
        data={data}
        footerData={footerData}
        tabsData={tabsData}
      />
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const url =
    process.env.NODE_ENV === "production"
      ? process.env.BASE_URL
      : "http://localhost:1337";
  const res = await fetch(`${url}/api/apparel-management?populate=*`);
  const data = await res.json();

  const resTabsData = await fetch(
    `${url}/api/apparel-management-tabs?populate=*`
  );
  const tabsData = await resTabsData.json();

  const resFooterData = await fetch(`${url}/api/footer?populate=*`);
  const footerData = await resFooterData.json();

  // Pass data to the page via props
  return { props: { data, footerData, tabsData } };
}
