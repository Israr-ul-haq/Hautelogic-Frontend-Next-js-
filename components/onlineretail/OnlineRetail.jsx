import NavbarComp from "../shared/Navbar";
import Hero from "./Hero";
import Footer from "../shared/Footer";
import ContactForm from "../shared/ContactForm";
import Tabs from "./Tabs";

function OnlineRetail({ data, footerData, tabsData }) {


  return (
    <>
      <NavbarComp />
      <Hero data={data} />
      <Tabs data={tabsData} />
      <ContactForm
        data={data}
        contactStyles={"contactus bg-aquaBlue mb-60 mb-sm-130 "}
      />
      <Footer footerData={footerData} />
    </>
  );
}

export default OnlineRetail;
