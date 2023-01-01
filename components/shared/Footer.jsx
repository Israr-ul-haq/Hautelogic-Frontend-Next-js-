import Logo from "./Logo";
import LogoFooter from "../../assets/images/footerlogo.png";
import VectorLeft from "../../assets/images/vector_left.png";
import VectorRight from "../../assets/images/vector_right.png";
import Social from "./Social";
import Copyright from "./Copyright";
import FooterLinks from "./FooterLinks";
import FooterInfo from "./FooterInfo";
import Image from "next/image";
import MobileSocial from "./MobileSocial";
function Footer({ footerData }) {
  return (
    <footer className="footer bg-alabaster pt-30 pt-sm-65">
      <div className="container">
        <div className="row">
          <div className="col-md-5 d-flex justify-content-between flex-column ">
            <div className="footerlogo">
              <Logo responsive={true} img={LogoFooter} />
            </div>
            <Social data={footerData} />
          </div>
          <div className="col-md-3 d-flex flex-column  d-md-block d-none">
            <FooterLinks />
          </div>
          <div className="col-md-4 d-md-block d-none">
            <FooterInfo data={footerData} />
          </div>
          <div className="col-12 d-md-none d-block mt-30">
            <div className="row">
              <div className="col-6 d-flex flex-column">
                <FooterLinks />
              </div>
              <div className="col-6">
                <FooterInfo data={footerData} />
              </div>
              <div className="col-12">
                <MobileSocial data={footerData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
      <div className="vector vectorleft">
        <Image src={VectorLeft} alt="Vector" />
      </div>
      <div className="vector vectorright">
        <Image src={VectorRight} alt="Vector" />
      </div>
    </footer>
  );
}

export default Footer;
