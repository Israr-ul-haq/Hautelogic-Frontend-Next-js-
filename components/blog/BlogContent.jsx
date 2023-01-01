import NavbarComp from "../shared/Navbar";
import Hero from "./Hero";
import Footer from "../shared/Footer";
import ContactForm from "../shared/ContactForm";
import MarkdownIt from "markdown-it";
import Head from "next/head";

function BlogContent({ data, footerData }) {
  debugger;

  const md = new MarkdownIt();
  const htmlContent = md.render(
    data?.data?.attributes?.Blog_Content || "Coming Soon!"
  );
  return (
    <>
      <NavbarComp />
      <Hero data={data} />
      <div
        dangerouslySetInnerHTML={{
          __html: htmlContent,
        }}
        className="fs-20 arboria_book mb-50 mt-50 pe-xl-100 ps-xl-100 ps-sm-80 pe-sm-80 article_content"
      ></div>
      <ContactForm
        data={data}
        contactStyles={"contactus bg-aquaBlue mb-60 mb-sm-130"}
      />
      <Footer footerData={footerData} />
    </>
  );
}

export default BlogContent;
