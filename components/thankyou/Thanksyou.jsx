import Image from "next/image";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import BannerImage from "../../assets/images/Thankyouimage.png";
import VectorRight from "../../assets/images/Shape.png";

function Thankyou() {
  return (
    <div>
      <section className="hero mt-md-100  bg-aquaBlue   position-relative d-md-block  ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 ps-md-30  mt-30 mt-md-0 pr-11per">
              <h1
                style={{
                  maxWidth: "525px",
                }}
                className="fs-60 hero__title fs-md-26 text-ebonyClay  arboria_bold mb-40 margin-sm-top"
              >
                THANK YOU FOR SUBMISSION
              </h1>
              <p className="fs-20 text-mineShaft tabsubtitle  arboria_book mb-md-0 mb-40">
                Enabling Digital Transformation for Fashion/Apparel & Footwear
                brands
              </p>
            </div>
            <div className="col-md-6">
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  textAlign: "end",
                }}
              >
                <Image
                  src={BannerImage}
                  alt="banner image"
                  className="banner_thank"
                />
              </div>
              <div className="vector" style={{ bottom: "0", right: "49%" }}>
                <Image src={VectorRight} alt="Vector" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Thankyou;
