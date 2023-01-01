import AboutusImage from "../../assets/images/aboutvision.png";
import Image from "next/image";
function Vision({ data }) {
  return (
    <section className=" bg-aquaBlue pt-lg-80 pt-50 pb-lg-80  pb-50 position-relative ">
      <div className="container">
        <div className="row align-items-center flex-md-row-reverse   ">
          <div className="col-lg-6 ">
            <img
              style={{
                width: "100%",
              }}
              src={
                process.env.NODE_ENV
                  ? "https://stgadm.hautelogic.net" +
                    data?.data?.attributes?.OurVision_Image?.data?.attributes
                      ?.url
                  : "https://stgadm.hautelogic.net" +
                    data?.data?.attributes?.OurVision_Image?.data?.attributes
                      ?.url
              }
              alt="tab image"
            />
          </div>
          <div className="col-lg-6 pe-md-30 pe-xl-145 mt-30 mt-md-0 ">
            <h2 className="fs-45  text-black aboutus__title  arboria_bold mb-md-50 mb-20 ">
              {data?.data?.attributes?.OurVision_Title}
            </h2>
            <p
              dangerouslySetInnerHTML={{
                __html: data?.data?.attributes?.OurVision_Description,
              }}
              className="fs-20  text-gray aboutus__subtitle  arboria_book  mb-0 "
            ></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
