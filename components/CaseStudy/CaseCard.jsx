import Image from "next/image";
import Link from "next/link";
import React from "react";

function CaseCard({ data, id }) {
  return (
    <div className="card mb-20">
      <div className="zoom">
        <img
          src={
            process.env.NODE_ENV === "production"
              ? "https://stgadm.hautelogic.net" +
                data?.attributes?.thumbnailimage?.data?.attributes?.url
              : "http://localhost:1337" +
                data?.attributes?.thumbnailimage?.data?.attributes?.url
          }
          className="card-img-top"
          alt="casestudy"
          // layout={responsive ? "responsive" : "intrinsic"}
        />
      </div>
      <div className="card-body">
        {id ? <p className="card-title card_primary_title">Case Study</p> : ""}
        <h5 className="card-title">
          {data?.attributes?.bannerprimaryheading.substring(0, 36) + "..."}
        </h5>
        <p className="card-text">
          {data?.attributes?.bannersecondaryheading.substring(0, 350) + "..."}
        </p>

        <Link passHref href={`/CaseStudy/${data?.attributes?.slug}`}>
          <button className="border-radius-sm btn btn-outline-pink arboria_book fs-16 px-10 px-lg-15 py-15 me-35 ">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CaseCard;
