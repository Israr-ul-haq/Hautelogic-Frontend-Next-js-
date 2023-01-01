import AboutusImage from "../../assets/images/aboutussection.png";
import Image from "next/image";
function AboutusSection({ data }) {
  return (
    <section className="  pt-lg-170 pt-50 pb-lg-110  pb-50 position-relative ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img
              style={{
                width: "100%",
              }}
              src={
                process.env.NODE_ENV
                  ? "https://stgadm.hautelogic.net" +
                    data?.data?.attributes?.Aboutus_Image?.data?.attributes?.url
                  : "https://stgadm.hautelogic.net" +
                    data?.data?.attributes?.Aboutus_Image?.data?.attributes?.url
              }
              alt="tab image"
            />
          </div>
          <div className="col-lg-6 ps-lg-30 ps-xl-100 mt-30 mt-lg-0">
            <h2 className="fs-45  text-black aboutus__title  arboria_bold mb-md-50 mb-20 ">
              {data?.data?.attributes?.Aboutus_Title}
            </h2>
            <p
              dangerouslySetInnerHTML={{
                __html: data?.data?.attributes?.Aboutus_Description,
              }}
              className="fs-20  text-gray aboutus__subtitle  arboria_book  mb-20 "
            ></p>
            {/* <p className="fs-20  text-gray aboutus__subtitle  arboria_book  mb-0 ">
              HauteLogic’s modular fashion management solution enables seamless
              fashion management that allows you to control all aspects of your
              brand. HauteLogic promises to deliver the future at your doorstep
              so that you can continuously expand your reach towards digital
              transformation.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutusSection;
