import AboutusJourneyImage from "../../assets/images/aboutjourney.png";
import Image from "next/image";
function Journey({ data }) {
  return (
    <section className=" bg-white pt-lg-80 pt-50 pb-lg-80  pb-50 position-relative ">
      <div className="container">
        <div className="row align-items-center  ">
          <div className="col-lg-6 mt-0 mt-lg-0 position-relative ">
            <img
              style={{
                width: "100%",
              }}
              src={
                process.env.NODE_ENV
                  ? "https://stgadm.hautelogic.net" +
                    data?.data?.attributes?.OurJourney_Image?.data?.attributes
                      ?.url
                  : "https://stgadm.hautelogic.net" +
                    data?.data?.attributes?.OurJourney_Image?.data?.attributes
                      ?.url
              }
              alt="tab image"
            />
            <div className="journeyyears">
              <h2 className="journeyyears__title">
                25 <br></br> years
              </h2>
            </div>
          </div>
          <div className="col-lg-6 ps-lg-30 ps-xl-170 mt-0 mt-lg-0 mt-30">
            <h2 className="fs-45  text-black aboutus__title  arboria_bold mb-md-50 mb-20 ">
              {data?.data?.attributes?.OurJourney_Title}
            </h2>
            <p
              dangerouslySetInnerHTML={{
                __html: data?.data?.attributes?.OurJourney_Description,
              }}
              className="fs-20  text-gray aboutus__subtitle  arboria_book  mb-20 "
            ></p>
            {/* <p className="fs-20  text-gray aboutus__subtitle  arboria_book  mb-0 ">
              Our continuous growth in leadership, technological prowess and
              client satisfaction has enabled us to accelerate implementation of
              intelligent demand and supply planning. Furthermore, HauteLogic’s
              prowess in digital sourcing, wholesale, eCommerce, POS/Store
              operations, and supply chain integration delivers a composable and
              configurable solution that is crafted according to customer needs.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
