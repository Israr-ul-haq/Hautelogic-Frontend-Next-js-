import { navlinks } from "../../constants/Navlinks";
import Link from "next/link";
import { uuid } from "uuidv4";
import { FooterNavlinks } from "../../constants/FooterLinks";
function FooterLinks() {
  return FooterNavlinks.map((navlink) => (
    <Link href={navlink.link} passHref key={uuid()}>
      {navlink.type !== "button" && navlink.name != "Solution Offering" ? (
        <a className="mb-25 footerlink d-flex  text-decoration-none fs-15 text-mineShaft arboria_book ">
          {navlink.name}
        </a>
      ) : (
        ""
      )}
    </Link>
  ));
}

export default FooterLinks;
