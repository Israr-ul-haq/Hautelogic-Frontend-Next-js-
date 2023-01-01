import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Logo1 from "../../assets/images/Logo_1.png";
import Logo2 from "../../assets/images/mgl.png";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
function SuccessStories({ data, successData }) {
  return (
    <>
      <section className="successstories bg-aquaBlue pt-sm-90 pb-sm-160 pt-65 pb-90">
        <div className="container">
          <div className="text-center">
            <h2 className="fs-45 successtitle text-black  arboria_bold mb-md-15 mb-25">
              {data?.data?.attributes?.Success_Title}
            </h2>
            <h4 className="fs-18 successsubtitle text-mineShaft mb-25  arboria_light">
              {data?.data?.attributes?.Success_Description}
            </h4>
            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              navigation={true}
              className="successslider"
            >
              {successData?.data?.map((item) => {
                return (
                  <SwiperSlide key={item?.id}>
                    <div className="successstories__content">
                      <img
                        src={
                          process.env.NODE_ENV
                            ? "https://stgadm.hautelogic.net" +
                              item?.attributes?.Success_Image?.data?.attributes
                                ?.url
                            : "https://stgadm.hautelogic.net" +
                              item?.attributes?.Success_Image?.data?.attributes
                                ?.url
                        }
                        alt="tab image"
                      />
                      <p className="fs-20 text-mineShaft  arboria_book mb-md-70 mb-25 mt-md-45 mt-35 successslidesubtitle">
                        {item?.attributes?.Success_Description}
                      </p>
                      <p className="fs-18 text-gray  arboria_medium successslidetitle mb-0 pb-md-40 pb-15">
                        {item?.attributes?.Success_Title}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div id="insights"></div>
      </section>
      s
    </>
  );
}

export default SuccessStories;
