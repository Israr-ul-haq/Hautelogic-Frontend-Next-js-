import Tabs from "./Tabs";
import NavbarComp from "../shared/Navbar";
import Hero from "./Hero";
import ChooseUs from "./ChooseUs";
import Footer from "../shared/Footer";
import ContactForm from "../shared/ContactForm";
import Insights from "./Insights";
import SuccessStories from "./SuccessStories";
import MobileHero from "./MobileHero";
import Link from "next/link";
import SupplyChain from "./SupplyChain";
import PartnerShip from "./PartnerShip";
import Head from "next/head";

function Home({
  data,
  tabsData,
  chooseData,
  successData,
  blogsData,
  footerData,
  caseData,
}) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>Supply Chain Solution for Fashion, Apparel, and Footwear</title>
        <meta
          name="description"
          content="Built on Microsoft D365, Hautelogic provides a resilient supply chain for fashion and apparel, connected commerce, digital sourcing, and intelligent planning."
        />
      </Head>
      <NavbarComp />
      <Hero data={data} />
      <MobileHero data={data} />
      <Tabs data={tabsData} />
      <SupplyChain />

      <ChooseUs data={data} chooseData={chooseData} />
      {/* <SuccessStories data={data} successData={successData} /> */}
      <PartnerShip />
      <Insights data={data} blogsData={blogsData} caseData={caseData} />
      <ContactForm
        data={data}
        contactStyles={"contactus bg-aquaBlue mb-60 mb-sm-130 "}
      />
      <Footer footerData={footerData} />
    </>
  );
}

export default Home;
