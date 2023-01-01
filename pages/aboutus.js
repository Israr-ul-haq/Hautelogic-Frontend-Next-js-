import Head from "next/head";
import AboutUs from "../components/aboutus/Aboutus";
import NextNProgress from "nextjs-progressbar";
export default function HomePage({ data, footerData }) {
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
        <title>A Unified Fashion Management Solution — Hautelogic</title>
        <meta
          name="description"
          content="Our expertise in retail consulting and supply chain solutions enables us to craft configurable solutions for fashion, apparel, and footwear brands. Learn more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutUs data={data} footerData={footerData} />
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
  const res = await fetch(`${url}/api/about-us?populate=*`);
  const data = await res.json();

  const resFooterData = await fetch(`${url}/api/footer?populate=*`);
  const footerData = await resFooterData.json();

  // Pass data to the page via props
  return { props: { data, footerData } };
}
