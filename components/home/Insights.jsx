import { useEffect, useState } from "react";
import { Card } from "../blog/Card";
import CaseCard from "../CaseStudy/CaseCard";

function Insights({ data, blogsData, caseData }) {
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();

  useEffect(() => {
    setData1(blogsData?.data?.reverse().slice(0, 2));
    setData2(caseData?.data?.reverse().slice(0, 1));
  }, []);

  return (
    <section className="insights pt-60 pb-60 pt-sm-90 pb-sm-160" id="resources">
      <div className="container">
        <div className="text-center  mb-sm-90 mb-55">
          <h2 className="fs-45 text-black insighttitle  arboria_bold mb-15">
            {data?.data?.attributes?.Insights_Title}
          </h2>
          <h4 className="fs-18 text-mineShaft insightsubtitle  arboria_light">
            {data?.data?.attributes?.Insights_Description}
          </h4>
        </div>
        <div className="row align-items-start">
          {/* {insightData?.data?.map((item) => {
            return (
              <div
                key={item?.id}
                className="col-md-4 text-center mb-md-0 mb-60"
              >
                <img
                  src={
                    process.env.NODE_ENV
                      ? "https://stgadm.hautelogic.net" +
                        item?.attributes?.Insights_Image?.data?.attributes?.url
                      : "https://stgadm.hautelogic.net" +
                        item?.attributes?.Insights_Image?.data?.attributes?.url
                  }
                  alt="tab image"
                />
                <h2 className="fs-18 text-mineShaft insightboxtitle  arboria_medium mt-50 mt-md-50 mb-md-15 mb-60">
                  {item?.attributes?.Insights_Title}
                </h2>
              </div>
            );
          })} */}
          {data2?.map((caseData) => (
            <div className="col-md-4 col-sm-12" key={caseData?.id}>
              <CaseCard data={caseData} id="case_Id" />
            </div>
          ))}
          {data1?.map((blog) => (
            <div className="col-md-4 col-sm-12" key={blog?.id}>
              <Card blog={blog} id="blog_Id" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Insights;
