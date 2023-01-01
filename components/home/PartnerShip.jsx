import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoImage from "../../assets/images/w91-Enterprise-ERP-Technology-Value-Matrix-2022.jpeg";
function PartnerShip() {
  return (
    <div className="chooseus  ">
      <div className="container">
        <div className="row mb-md-80 ">
          <div className="col-md-8 partner_section">
            <div>
              <h2 className="fs-45 text-black choosetitle  arboria_bold mb-md-40 mb-20">
                In Partnership with the leading ERP
              </h2>
              <p className="fs-20 text-mineShaft choosesubtitle arboria_medium mb-20">
                HauteLogic for fashion and apparel is built on powerful
                Microsoft Dynamics 365 and harnesses the leadership attributes
                of Microsoft. Our solution provides a resilient supply chain for
                fashion and apparel, connected commerce, digital sourcing, and
                intelligent planning. Microsoft Dynamics 365 is a leader in
                Enterprise ERP Technology Value Matrix 2022 by Nucleus Research.
              </p>
              <Link
                href="https://info.visionet.com/hautelogic-erp-technology-value-matrix-2022"
                passHref
              >
                <a target="_blank">
                  <button className="border-radius-sm btn btn-outline-pink arboria_book fs-18 px-10 px-lg-35 py-15 me-35 ">
                    Download Report
                  </button>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-md-4 partner_section">
            <Image
              src={LogoImage}
              alt="w91-Enterprise-ERP-Technology-Value-Matrix-2022"
              className="partner_Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerShip;
