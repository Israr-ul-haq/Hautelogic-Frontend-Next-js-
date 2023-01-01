import React from "react";
import { WebinarCard } from "./WebinarCard";
function WebinarSection({ data }) {
  return (
    <section className="pt-lg-80 pt-50 pb-lg-110 pb-50 position-relative ">
      <div className="container">
        <div className="row">
          {data?.data?.reverse().map((blog) => (
            <div className="col-md-4 col-sm-12" id="blog_id" key={blog?.id}>
              <WebinarCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WebinarSection;
