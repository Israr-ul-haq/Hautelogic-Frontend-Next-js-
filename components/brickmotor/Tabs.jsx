import TabContent from "./TabContent";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { Link } from "react-scroll/modules";

function Tabs({ data }) {
  return (
    <div className="fashiontabssection pt-md-80 pt-0 pb-55 pb-md-80">
      <div className="fashiontabs">
        <div className="container">
          <SimpleBar style={{ maxWidth: "100%" }}>
            <div className="d-flex justify-content-between  w-100">
              {data?.data?.map((item, index) => {
                return (
                  <Link
                    key={item?.id}
                    activeClass=" fashiontabs__link-active"
                    className="fashiontabs__link"
                    to={"section" + (index + 1)}
                    spy={true}
                    smooth={true}
                    duration={200}
                    offset={-100}
                  >
                    {item?.attributes?.Brick_Mortar_Tab_Title}
                  </Link>
                );
              })}
            </div>
          </SimpleBar>
        </div>
      </div>

      {data?.data?.map((item, index) => {
        return (
          <TabContent
            key={item?.id}
            title={item?.attributes?.Brick_Mortar_Title}
            subtitle={item?.attributes?.Brick_Mortar_Description}
            image={item?.attributes?.Brick_Mortar_Image?.data?.attributes?.url}
            elementName={"section" + (index + 1)}
            isReverse={(index + 1) % 2 == 0 ? true : false}
            isBlue={(index + 1) % 2 == 0 ? true : false}
          />
        );
      })}
    </div>
  );
}

export default Tabs;
