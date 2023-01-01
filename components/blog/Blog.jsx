import NavbarComp from "../shared/Navbar";
import Hero from "./Hero";
import Footer from "../shared/Footer";
import ContactForm from "../shared/ContactForm";
import BlogSection from "./BlogSection";

function Blog({ data, footerData, tabsData }) {
  return (
    <>
      <NavbarComp />
      <Hero data={data} />
      <BlogSection data={tabsData} />
      <ContactForm
        data={data}
        contactStyles={"contactus bg-aquaBlue mb-60 mb-sm-130 "}
      />
      <Footer footerData={footerData} />
    </>
  );
}

export default Blog;
