import NavbarComp from "../shared/Navbar";
import Footer from "../shared/Footer";
import ContactForm from "../shared/ContactForm";
import Hero from "./Hero";
import AboutusSection from "./AboutusSection";
import Vision from "./Vision";
import Journey from "./Journey";

function AboutUs({ data, footerData }) {
  return (
    <>
      <NavbarComp />
      <Hero data={data} />
      <AboutusSection data={data} />
      <Vision data={data} />
      <Journey data={data} />
      <ContactForm
        data={data}
        contactStyles={"contactus bg-aquaBlue mb-60 mb-lg-130 "}
      />
      <Footer footerData={footerData} />
    </>
  );
}

export default AboutUs;
