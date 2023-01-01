import NavbarComp from "../shared/Navbar";
// import Hero from "./Hero";
import Footer from "../shared/Footer";
// import ContactForm from "../shared/ContactForm";
// import MarkdownIt from "markdown-it";
import CasestudyContactForm from "../CaseStudy/CasestudyContactForm";
import casestudybanner from "../../assets/images/hauteLogic-banner-casestudy.jpg";
import { useEffect } from "react";

function CasestudyContent({ data, footerData }) {
  // const md = new MarkdownIt();
  // const htmlContent = md.render(
  //   data?.data?.attributes?.Blog_Content || "Coming Soon!"
  // );

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      // @TS-ignore

      if (window.hbspt) {
        // @TS-ignore

        window.hbspt.forms.create({
          portalId: data?.data?.attributes?.portalId,
          formId: data?.data?.attributes?.formId,
          target: "#hubspotForm",
        });
      }
    });
  }, []);

  return (
    <>
      <NavbarComp />
      <section
        className="hero mt-md-100 mt-80 bg-aquaBlue position-relative blogshero pb-lg-100"
        style={{
          backgroundImage: `url(${
            process.env.NODE_ENV === "production"
              ? "https://stgadm.hautelogic.net" +
                data?.data?.attributes?.bannerImage?.data?.attributes?.url
              : "http://localhost:1337" +
                data?.data?.attributes?.bannerImage?.data?.attributes?.url
          })`,
        }}
      >
        <div className="container">
          <div className="row align-items-center pt-md-160 blog-hero-pb position-relative">
            <div className="col-12">
              <p
                className="fs-md-26 fs-bloghero  arboria_medium fs-20"
                style={{
                  maxWidth: "700px",
                }}
              >
                {data?.data?.attributes?.bannerprimaryheading}
              </p>
            </div>
            <div className="col-12">
              <h1
                className="fs-40 fs-bloghero fs-md-26  arboria_medium mb-40 fs-sm-30"
                style={{
                  maxWidth: "700px",
                }}
              >
                {data?.data?.attributes?.bannersecondaryheading}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div
                className="fs-20 arboria_book mb-50 mt-50"
                dangerouslySetInnerHTML={{
                  __html: data?.data?.attributes?.description,
                }}
              ></div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="fs-20 arboria_book mb-50 mt-50">
                <div id="hubspotForm"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <CasestudyContactForm
        data={data}
        contactStyles={"contactus bg-aquaBlue mb-60 mb-sm-130"}
      /> */}

      <Footer footerData={footerData} />
    </>
  );
}

export default CasestudyContent;
