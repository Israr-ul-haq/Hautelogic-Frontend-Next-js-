import Link from "next/link";
import React from "react";

function SupplyChain() {
  return (
    <div className="chooseus bg-aquaBlue pt-60 mb-100">
      <div className="container">
        <div className="row mb-md-80 mb-30">
          <div className="col-md-8 supply">
            <p className="fs-26 text-mineShaft choosesubtitle arboria_medium mb-0">
              End-to-end supply chain solution for Fashion, Apparel & Footwear
            </p>
          </div>
          <div className="col-md-4 ">
            <Link
              href="https://info.visionet.com/hubfs/Infographic/Reimagining-the-technology-ecosystem-of-fashion-and-apparel-industry-with-hautelogic.pdf"
              passHref
            >
              <a target="_blank">
                <button className="border-radius-sm btn btn-outline-pink arboria_book fs-18 px-10 px-lg-35 py-15 me-35 ">
                  Download the Infographic
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupplyChain;
