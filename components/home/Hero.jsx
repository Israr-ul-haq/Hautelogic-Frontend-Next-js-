import VectorRight from "../../assets/images/vector_right.png";
import DynamicsLogo from "../../assets/images/microsoftdynamicslogo.png";
import Image from "next/image";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
function Hero({ data }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
      >
        <section className="hero mt-md-100 mt-80 bg-aquaBlue pt-60 pb-30 position-relative d-md-block d-none carousel-custom-height">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5 ps-md-30  mt-30 mt-md-0">
                <h2 className="fs-26  text-pickledBluewood hero__subtitle  arboria_book mb-10">
                  {data?.data?.attributes?.Hero_SubTitle}
                </h2>
                <h1
                  style={{
                    maxWidth: "525px",
                  }}
                  className="fs-60 hero__title fs-md-26 text-ebonyClay  arboria_bold mb-40"
                >
                  {data?.data?.attributes?.Hero_Title}
                </h1>
                <div className="d-flex align-items-sm-center align-items-start flex-direction flex-sm-row flex-column">
                  <Link href="/contact" passHref>
                    <button className="border-radius-sm btn btn-outline-pink arboria_book fs-18 px-10 px-lg-35 py-15 me-35 ">
                      {data?.data?.attributes?.Hero_Button_Text}
                    </button>
                  </Link>

                  <Image src={DynamicsLogo} alt="banner image" />
                </div>
              </div>
              <div className="col-md-7">
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                >
                  {/* <img
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                    src={
                      process.env.NODE_ENV
                        ? "https://stgadm.hautelogic.net" +
                          data?.data?.attributes?.Hero_Image?.data?.attributes
                            ?.url
                        : "https://stgadm.hautelogic.net" +
                          data?.data?.attributes?.Hero_Image?.data?.attributes
                            ?.url
                    }
                    alt="banner image"
                  /> */}
                  <iframe
                    className="home_hautlogic_video   pt60"
                    src="https://www.youtube.com/embed/3s4a7FQt3Z8"
                    title="| HauteLogic | Transforming Supply Chain for Fashion, Apparel and Footwear Industry |"
                    // frameborder="0"
                    // allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="vector vectorright">
            <Image src={VectorRight} alt="Vector" />
          </div>
        </section>
        <section
          style={{
            backgroundImage: `url(${
              process.env.NODE_ENV
                ? "https://stgadm.hautelogic.net" +
                  data?.data?.attributes?.POY_Image?.data?.attributes?.url
                : "https://stgadm.hautelogic.net" +
                  data?.data?.attributes?.POY_Image?.data?.attributes?.url
            })`,
          }}
          className="hero mt-md-100 mt-80 bg-aquaBlue  position-relative  aboutushero d-md-block d-none carousel-custom-height"
        >
          <div className="container">
            <div className="row align-items-center pt-md-115 pb-md-115  pt-50 pb-50 position-relative ">
              <div className="col-12  mt-100">
                <h2 className="fs-26  text-white hero__subtitle  arboria_book mb-10">
                  {data?.data?.attributes?.POY_SubTitle}
                </h2>
                <h1
                  style={{
                    maxWidth: "700px",
                  }}
                  className="fs-60 hero__title fs-md-26 text-white  arboria_bold mb-40"
                >
                  {data?.data?.attributes?.POY_Title}
                </h1>
                <div className="d-flex align-items-sm-center align-items-start flex-direction flex-sm-row flex-column">
                  <Link
                    href="https://www.visionet.com/news/visionet-systems-recognized-as-winner-of-2022-microsoft-dynamics-365-commerce-partner-of-the-year/"
                    passHref
                  >
                    <a target="_blank">
                      <button className="border-radius-sm btn btn-outline-pink arboria_book fs-18 px-10 px-lg-35 py-15 me-35 ">
                        {data?.data?.attributes?.POY_Button_Text}
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Carousel>
      {/* <Modal show={show} onHide={handleClose} className="video_home_modal">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal> */}
    </div>
  );
}

export default Hero;
