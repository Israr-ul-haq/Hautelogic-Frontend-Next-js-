import Head from "next/head";
import React from "react";
import Footer from "../components/shared/Footer";
import NavbarComp from "../components/shared/Navbar";
import Thankyou from "../components/thankyou/Thanksyou";

function ThankYou({ footerData }) {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>Thank you for submission</title>
        <meta
          name="Thank you for submission | Hautelogic"
          content="Thank you for submission | Hautelogic"
        />
      </Head>
      <NavbarComp />
      <Thankyou />
      <Footer footerData={footerData} />
    </div>
  );
}

export default ThankYou;

export async function getServerSideProps() {
  // Fetch data from external API
  const url =
    process.env.NODE_ENV === "production"
      ? "http://localhost:1337"
      : "http://localhost:1337";

  const resFooterData = await fetch(`${url}/api/footer?populate=*`);
  const footerData = await resFooterData.json();

  // Pass data to the page via props
  return { props: { footerData } };
}
