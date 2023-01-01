function WebinarHero({ data }) {
  return (
    <>
      <section
        style={{
          backgroundImage:
            "url(https://stgadm.hautelogic.net/uploads/blog_banner_a246c49cb2.png)",
        }}
        className="hero mt-md-100 mt-80 bg-aquaBlue position-relative blogshero pb-lg-100"
      >
        <div className="container">
          <div className="row align-items-center pt-md-115 pb-md-115 blog-hero-pb position-relative">
            <div className="col-12">
              <p
                style={{
                  maxWidth: "700px",
                }}
                className="fs-md-26  fs-bloghero text-white  arboria_medium fs-20"
              ></p>
            </div>
            <div className="col-12">
              <h1
                style={{
                  maxWidth: "700px",
                }}
                className="fs-60 fs-bloghero fs-md-26 arboria_medium mb-40 fs-sm-30"
              >
                Webinar
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WebinarHero;
