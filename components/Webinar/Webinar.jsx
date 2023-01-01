import NavbarComp from "../shared/Navbar";
import Footer from "../shared/Footer";
import ContactForm from "../shared/ContactForm";
import Hero from "../blog/Hero";
import WebinarHero from "./WebinarHero";
import WebinarSection from "./WebinarSection";

function Webinar({ data, footerData, tabsData }) {
  return (
    <>
      <NavbarComp />
      <WebinarHero data={data} />
      <WebinarSection data={tabsData} />
      <ContactForm
        data={data}
        contactStyles={"contactus bg-aquaBlue mb-60 mb-sm-130 "}
      />
      <Footer footerData={footerData} />
    </>
  );
}

export default Webinar;
