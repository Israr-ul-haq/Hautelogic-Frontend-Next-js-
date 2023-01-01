import Link from "next/link";
function Hero({ data }) {
  return (
    <section
      style={{
        backgroundImage: `url(${
          process.env.NODE_ENV
            ? "https://stgadm.hautelogic.net" +
              data?.data?.attributes?.Hero_Image?.data?.attributes?.url
            : "https://stgadm.hautelogic.net" +
              data?.data?.attributes?.Hero_Image?.data?.attributes?.url
        })`,
      }}
      className="hero mt-md-100 mt-80 bg-aquaBlue  position-relative  aboutushero"
    >
      <div className="container">
        <div className="row align-items-center pt-md-115 pb-md-115  pt-50 pb-50 position-relative ">
          <div className="col-12  ">
            <h2 className="fs-26  text-white hero__subtitle  arboria_book mb-10 ">
              {data?.data?.attributes?.Hero_SubTitle}
            </h2>
            <h1
              style={{
                maxWidth: "700px",
              }}
              className="fs-60 hero__title fs-md-26 text-white  arboria_medium mb-40"
            >
              {data?.data?.attributes?.Hero_Title}
            </h1>
            <div className="d-flex align-items-sm-center align-items-start flex-direction flex-sm-row flex-column">
              <Link href="/contact" passHref>
                <button className="border-radius-sm btn btn-outline-hero arboria_book fs-18 px-10 px-lg-35 py-15 me-35 ">
                  {data?.data?.attributes?.Hero_Button_Text}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
