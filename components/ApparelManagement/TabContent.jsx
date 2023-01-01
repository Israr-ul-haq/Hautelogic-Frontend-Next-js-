import { Element } from "react-scroll/modules";
function TabContent({
  isReverse,
  isBlue,
  title,
  subtitle,
  image,
  elementName,
}) {
  return (
    <Element name={elementName}>
      <section
        className={
          isBlue
            ? " bg-aquaBlue pt-md-80 pt-50 pb-md-80  pb-50 position-relative "
            : " bg-white pt-md-80 pt-50 pb-md-80  pb-50 position-relative "
        }
      >
        <div className="container">
          <div
            className={
              isReverse
                ? "row align-items-center flex-md-row-reverse   "
                : "row align-items-center"
            }
          >
            <div className="col-md-6 ">
              <img
                style={{
                  width: "100%",
                }}
                src={
                  process.env.NODE_ENV
                    ? "https://stgadm.hautelogic.net" + image
                    : "https://stgadm.hautelogic.net" + image
                }
                alt="tab image"
              />
            </div>
            <div
              className={
                isReverse
                  ? "col-md-6 pe-md-30 pe-xl-150 mt-30 mt-md-0 "
                  : "col-md-6 ps-md-30 ps-xl-150 mt-30 mt-md-0 "
              }
            >
              <h2 className="fs-45  text-black aboutus__title  arboria_bold mb-md-50 mb-20 ">
                {title}
              </h2>
              <p className="fs-20  text-gray aboutus__subtitle  arboria_book  mb-0 ">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default TabContent;
