import BannerImage from "../../assets/images/mobilebanner.png";
import DynamicsLogo from "../../assets/images/whitedynamics.png";
import Image from "next/image";
import Link from "next/link";
function MobileHero({ data }) {
  return (
    <div>
      <div
        // style={{
        //   backgroundImage: `url(${
        //     process.env.NODE_ENV
        //       ? "https://stgadm.hautelogic.net" +
        //         data?.data?.attributes?.Hero_Image?.data?.attributes?.url
        //       : "https://stgadm.hautelogic.net" +
        //         data?.data?.attributes?.Hero_Image?.data?.attributes?.url
        //   })`,
        // }}
        className="mobilehero mt-80 d-block d-md-none bg-aquaBlue"
      >
        <div className="container h-80">
          <div className="mobilehero__content h-100 d-flex flex-column justify-content-end pb-40 ">
            <h2 className="arboria_book text-black fs-20 mb-15">
              {data?.data?.attributes?.Hero_SubTitle}
            </h2>
            <h2 className="arboria_medium text-black fs-40 mb-25">
              {data?.data?.attributes?.Hero_Title}
            </h2>
            <div className="d-flex align-items-sm-center align-items-center">
              <Link href="/contact" passHref>
                <button className="border-radius-sm btn btn-outline-pink  arboria_book fs-14 px-20 py-15 me-15 ">
                  {data?.data?.attributes?.Hero_Button_Text}
                </button>
              </Link>
              <Image src={DynamicsLogo} alt="banner image" />
            </div>
          </div>
          <div className="col-md-7 d-md-none">
            <div
              style={{
                height: "100%",
                width: "100%",
                padding: "0px 20px 0 20px;",
              }}
            >
              <iframe
                className="mobile_hautlogic_video"
                src="https://www.youtube.com/embed/3s4a7FQt3Z8"
                title="| HauteLogic | Transforming Supply Chain for Fashion, Apparel and Footwear Industry |"
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                // allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHero;
