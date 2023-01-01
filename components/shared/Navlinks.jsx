import { navlinks } from "../../constants/Navlinks";
import Link from "next/link";
import { uuid } from "uuidv4";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll/modules";
import { Nav } from "react-bootstrap";
function Navlinks() {
  const router = useRouter();
  const options = [
    "Fashion Wholesale",
    "Online Retail",
    "Apparel Management",
    "Brick & Mortar Retail",
  ];
  const optionsResources = ["Blogs", "Case Studies"]; ///"Webinar"

  const changeItem = (e) => {
    switch (e.value) {
      case "Fashion Wholesale":
        router.push("/fashion-wholesale");
        break;
      case "Online Retail":
        router.push("/online-retail");
        break;
      case "Apparel Management":
        router.push("/apparel-management");
        break;
      case "Brick & Mortar Retail":
        router.push("/brick-mortar-retail");
        break;

      default:
        break;
    }
  };
  const changeItemResources = (e) => {
    switch (e.value) {
      case "Blogs":
        router.push("/blogs");
        break;

      case "Webinar":
        router.push("/Webinar");
        break;
      case "Case Studies":
        router.push("/case-study");
        break;
      default:
        break;
    }
  };
  return navlinks.map((navlink) => (
    <Link href={navlink.link} passHref key={uuid()}>
      {navlink.type === "button" ? (
        <div className="navlinkbtncontainer">
          <a className="d-block border-radius-sm btn btn-outline-pink arboria_book fs-14 py-15 px-20  navlinkbtn">
            {navlink.name}
          </a>
        </div>
      ) : navlink.link === "/solution-offering" ? (
        <Dropdown
          onChange={changeItem}
          options={options}
          placeholder="Solution Offering"
          className="menudropdown"
        />
      ) : navlink.link === "/resources" ? (
        <Dropdown
          onChange={changeItemResources}
          options={optionsResources}
          placeholder="Resources"
          className="menudropdown"
        />
      ) : (
        <Nav.Link className="me-20 d-block text-decoration-none fs-15 text-mineShaft arboria_book navlink">
          {navlink.name}
        </Nav.Link>
      )}
    </Link>
  ));
}

export default Navlinks;
