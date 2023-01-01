import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import LogoImage from "../../assets/images/HauteLogicLogo.png";
import { useState } from "react";
import Head from "next/head";
function NavbarComp() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      onSelect={() => setExpanded(false)}
      expanded={expanded}
      bg="light"
      expand="lg"
      className="fixed-top bg-white shadow pt-15 pb-20"
    >
      <Head>
        <meta
          name="google-site-verification"
          content="F7npvZRvebVww2-iV7ES8vW3BLFUkDABEX9XQXtVJMc"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W9SPJKQ');`,
          }}
        />
      </Head>
      <Container>
        <div className="headerlogo">
          <Logo img={LogoImage} responsive={true} />
        </div>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className=" align-items-center">
            <Navlinks />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
