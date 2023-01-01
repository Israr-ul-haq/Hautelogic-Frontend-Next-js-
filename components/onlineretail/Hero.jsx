import VectorRight from "../../assets/images/vector_right.png";
import Image from "next/image";
function Hero({ data }) {
  return (
    <section className="hero mt-md-100 mt-80 bg-white pt-md-70 pt-25 pb-md-25 position-relative  ">
      <div className="container">
        <div className="row align-items-center flex-md-row flex-column-reverse">
          <div className="col-md-6 pe-md-30 pe-xl-115 mt-30 mt-md-0">
            <h1
              style={{
                maxWidth: "525px",
              }}
              className="fs-55  fs-md-26 text-black hero__title  arboria_bold mb-20"
            >
              {data?.data?.attributes?.Hero_Title}
            </h1>
            <h4
              style={{
                maxWidth: "525px",
              }}
              className="fs-28 hero__subtitle fs-md-26 text-ebonyClay  arboria_book mb-20"
            >
              {data?.data?.attributes?.Hero_SubTitle}
            </h4>
          </div>
          <div className="col-md-6">
            <img
              style={{
                width: "100%",
              }}
              src={
                process.env.NODE_ENV
                  ? "https://stgadm.hautelogic.net" +
                    data?.data?.attributes?.Hero_Image?.data?.attributes?.url
                  : "https://stgadm.hautelogic.net" +
                    data?.data?.attributes?.Hero_Image?.data?.attributes?.url
              }
              alt="tab image"
            />
          </div>
        </div>
      </div>
      <div className="vector vectorright">
        <Image src={VectorRight} alt="Vector" />
      </div>
    </section>
  );
}

export default Hero;
