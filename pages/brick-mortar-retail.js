import Head from "next/head";
import BrickMotor from "../components/brickmotor/BrickMotor";
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
        <title>
          Hautelogic - Empowering Fashion Brick-and-Mortar Retail with Cloud.
        </title>
        <meta
          name="description"
          content="Hautelogic simplifies brick-and-mortar retail for fashion and apparel. Explore our advanced planning processes, Modern POS, omnichannel integration, and more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BrickMotor data={data} footerData={footerData} tabsData={tabsData} />
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
  const res = await fetch(`${url}/api/brick-and-mortar-retail?populate=*`);
  const data = await res.json();

  const resTabsData = await fetch(`${url}/api/brick-mortor-tabs?populate=*`);
  const tabsData = await resTabsData.json();

  const resFooterData = await fetch(`${url}/api/footer?populate=*`);
  const footerData = await resFooterData.json();

  // Pass data to the page via props
  return { props: { data, footerData, tabsData } };
}
