import React, { useEffect, useState } from "react";
import { Card } from "./Card";
function BlogSection({ data }) {
  const [data1, setData1] = useState();

  useEffect(() => {
    // const sort = data?.data?.sort(function (a, b) {
    //   debugger;
    //   new Date(a?.attributes?.published_at) -
    //     new Date(b?.attributes?.published_at);
    // });
    // console.log(sort);
    setData1(data?.data?.reverse());
  }, []);

  return (
    <section className="pt-lg-80 pt-50 pb-lg-110 pb-50 position-relative ">
      <div className="container">
        <div className="row">
          {data1?.map((blog) => (
            <div className="col-md-4 col-sm-12" id="blog_id" key={blog?.id}>
              <Card blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
