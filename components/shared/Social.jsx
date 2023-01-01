import Image from "next/image";
import Link from "next/link";
import Social1 from "../../assets/images/facebook.svg";
import Social3 from "../../assets/images/linkedin.png";
function Social({ data }) {
  return (
    <div className="socialicons mt-25 mb-0 mb-md-0 d-md-block d-none">
      <h2 className="fs-24 text-black  arboria_bold mb-20">Follow As</h2>
      <div className="d-flex align-items-center">
        <div className="me-30 d-block">
          <Link href={data?.data?.attributes?.Facebook_Link} passHref>
            <a>
              <Image src={Social1} alt="facebook" />
            </a>
          </Link>
        </div>
        <div className="">
          <Link href={data?.data?.attributes?.Linkedin_Link} passHref>
            <a>
              <Image src={Social3} alt="linkedin" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Social;
