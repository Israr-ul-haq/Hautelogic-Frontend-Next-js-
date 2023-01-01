import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Slide1 from "../../assets/images/img_1.jpg";
import Slide2 from "../../assets/images/img_2.jpg";
import Slide3 from "../../assets/images/img_3.jpg";
import Slide4 from "../../assets/images/img_4.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { FreeMode } from "swiper";
function ChooseUs({ data, chooseData }) {
  return (
    <div className="chooseus pb-md-110 pb-60">
      <div className="container">
        <div className="row mb-md-80 mb-30">
          <div className="col-md-8">
            <h2 className="fs-45 text-black choosetitle  arboria_bold mb-md-40 mb-20">
              {data?.data?.attributes?.Why_Choose_Us_Title}
            </h2>
            <p className="fs-20 text-mineShaft choosesubtitle arboria_medium mb-0">
              {data?.data?.attributes?.Why_Choose_Us_Description}
            </p>
          </div>
        </div>
        <Swiper
          modules={[Navigation, FreeMode]}
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          freeMode={true}
          className="chooseslider"
          breakpoints={{
            767: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {chooseData?.data?.map((item) => {
            return (
              <SwiperSlide key={item?.id}>
                <div
                  className="chooseusslide"
                  style={{
                    backgroundImage: `url(${
                      process.env.NODE_ENV === "production"
                        ? "https://stgadm.hautelogic.net" +
                          item?.attributes?.Choose_Us_Image?.data?.attributes
                            ?.url
                        : "http://localhost:1337" +
                          item?.attributes?.Choose_Us_Image?.data?.attributes
                            ?.url
                    })`,
                  }}
                >
                  <div className="chooseusslide__content">
                    <h2 className="fs-26 text-white  arboria_bold mb-55">
                      {item?.attributes?.Choose_Us_title}
                    </h2>
                    <p className="fs-20 text-white  arboria_light mb-0">
                      {item?.attributes?.Choose_Us_Description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div id="success-stories"></div>
    </div>
  );
}

export default ChooseUs;
