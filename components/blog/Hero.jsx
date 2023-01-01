function Hero({ data }) {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${
            process.env.NODE_ENV === "production"
              ? "https://stgadm.hautelogic.net" +
                data?.data?.attributes?.Hero_Image?.data?.attributes?.url
              : "http://localhost:1337" +
                data?.data?.attributes?.Hero_Image?.data?.attributes?.url
          })`,
        }}
        className="hero mt-md-100 mt-80 bg-aquaBlue position-relative blogshero pb-lg-100"
      >
        <div className="container">
          <div
            className={`${
              data?.data?.attributes?.Hero_SubTitle
                ? "row align-items-center pt-md-160 blog-hero-pb position-relative"
                : "row align-items-center pt-md-115 pb-md-115 blog-hero-pb position-relative"
            }`}
          >
            <div className="col-12">
              <p
                style={{
                  maxWidth: "700px",
                }}
                className={`${
                  data?.data.attributes?.slug ===
                  "the-changing-face-of-fashion-supply-chain-management"
                    ? "fs-md-26  fs-bloghero text-white  arboria_medium fs-20"
                    : "fs-md-26  fs-bloghero  arboria_medium fs-20"
                }`}
              >
                {data?.data?.attributes?.Hero_SubTitle}
              </p>
            </div>
            <div className="col-12">
              <h1
                style={{
                  maxWidth: "840px",
                }}
                className={`${
                  data?.data.attributes?.slug ===
                  "the-changing-face-of-fashion-supply-chain-management"
                    ? "fs-40 fs-bloghero fs-md-26 text-white arboria_medium mb-40 fs-sm-30"
                    : data?.data.attributes?.slug ===
                      "five-steps-for-the-fashion-industry-to-optimize-its-supply-chain"
                    ? "fs-40 fs-bloghero fs-md-26 text-white arboria_medium mb-40 fs-sm-30"
                    : "fs-60 fs-bloghero fs-md-26 arboria_medium mb-40 fs-sm-30"
                }`}
              >
                {data?.data?.attributes?.Hero_Title}
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
