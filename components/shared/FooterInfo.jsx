import { hauteInfo } from "../../constants/HauteInfo";
import Link from "next/link";
import { uuid } from "uuidv4";
function FooterInfo({ data }) {
 
  return (
    <>
      <a
        key={uuid()}
        style={{ maxWidth: "230px" }}
        className="mb-30 footerinfo d-flex  text-decoration-none fs-18 text-black arboria_book "
      >
        {data?.data?.attributes?.Footer_Address}
      </a>
      <a
        href={`mailto:${data?.data?.attributes?.Footer_Email}`}
        key={uuid()}
        style={{ maxWidth: "230px" }}
        className="mb-30 footerinfo d-flex  text-decoration-none fs-18 text-black arboria_book "
      >
        Email: {data?.data?.attributes?.Footer_Email}
      </a>
      <a
        href={`tel: ${data?.data?.attributes?.Footer_Phone}`}
        key={uuid()}
        style={{ maxWidth: "230px" }}
        className="mb-30 footerinfo d-flex  text-decoration-none fs-18 text-black arboria_book "
      >
        Tel: {data?.data?.attributes?.Footer_Phone}
      </a>
      <a
        href={`tel:${data?.data?.attributes?.Footer_Fax}`}
        key={uuid()}
        style={{ maxWidth: "230px" }}
        className="mb-30 footerinfo d-flex  text-decoration-none fs-18 text-black arboria_book "
      >
        Fax: {data?.data?.attributes?.Footer_Fax}
      </a>
    </>
  );
}

export default FooterInfo;
