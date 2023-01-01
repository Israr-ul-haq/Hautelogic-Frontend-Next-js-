import React, { useEffect, useState } from "react";

import CaseCard from "./CaseCard";
function CaseStudySection({ data }) {
  const [data1, setData1] = useState();

  useEffect(() => {
    setData1(data?.data?.reverse());
  }, []);

  return (
    <section className="pt-lg-80 pt-50 pb-lg-110 pb-50 position-relative ">
      <div className="container">
        <div className="row">
          {data1?.map((data) => (
            <div className="col-md-4 col-sm-12" key={data?.id}>
              <CaseCard data={data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudySection;
