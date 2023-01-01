import { Tab, Tabs as TabComp, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import "react-perfect-scrollbar/dist/css/styles.css";
function Tabs({ data }) {
  return (
    <div className="tabs pt-md-80 pt-55 pb-55 pb-md-120">
      <div className="container">
        <TabComp className={"hometabs"}>
          <TabList>
            <SimpleBar style={{ maxWidth: "100%" }}>
              <div className="d-flex justify-content-between  w-100">
                {data?.data?.map((item) => {
                  return <Tab key={item?.id}>{item?.attributes?.Tab_Name}</Tab>;
                })}
              </div>
            </SimpleBar>
          </TabList>
          {data?.data?.map((item) => {
            return (
              <TabPanel key={item?.id}>
                <div className="row row align-items-center">
                  <div className="col-md-6">
                    <h2 className="fs-40 text-black tabtitle  arboria_bold mb-md-25 mb-15">
                      {item?.attributes?.Tab_Title}
                    </h2>
                    <p className="fs-20 text-mineShaft tabsubtitle  arboria_book mb-md-0 mb-40">
                      {item?.attributes?.Tab_Description}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <img
                      src={
                        process.env.NODE_ENV
                          ? "https://stgadm.hautelogic.net" +
                            item?.attributes?.Tab_Image?.data?.attributes?.url
                          : "https://stgadm.hautelogic.net" +
                            item?.attributes?.Tab_Image?.data?.attributes?.url
                      }
                      alt="tab image"
                    />
                  </div>
                </div>
              </TabPanel>
            );
          })}
        </TabComp>
        <div id="why-choose-us" style={{ height: "50px" }}></div>
      </div>
    </div>
  );
}

export default Tabs;
