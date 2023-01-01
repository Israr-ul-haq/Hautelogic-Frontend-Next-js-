import NavbarComp from "../shared/Navbar";
import Footer from "../shared/Footer";
import CasestudyContactForm from "../CaseStudy/CasestudyContactForm";
import CaseHero from "./CaseHero";
import CaseStudySection from "../CaseStudy/CaseStudySection";

function CaseBlog({ data, footerData, tabsData }) {
  return (
    <>
      <NavbarComp />
      <CaseHero />
      <CaseStudySection data={data} />
      <CasestudyContactForm
        data={data}
        contactStyles={"contactus bg-aquaBlue mb-60 mb-sm-130 "}
      />
      <Footer footerData={footerData} />
    </>
  );
}

export default CaseBlog;
