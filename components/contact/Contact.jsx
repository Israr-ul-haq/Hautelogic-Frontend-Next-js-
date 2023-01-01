import ContactForm from "../shared/ContactForm";
import Footer from "../shared/Footer";
import NavbarComp from "../shared/Navbar";

function Contact({ data, footerData }) {
  return (
    <>
      {" "}
      <NavbarComp />
      <ContactForm
        data={data}
        contactStyles={"contactus bg-aquaBlue mb-0 mb-sm-0 mt-80 mt-lg-100 "}
      />
      <Footer footerData={footerData} />
    </>
  );
}

export default Contact;
