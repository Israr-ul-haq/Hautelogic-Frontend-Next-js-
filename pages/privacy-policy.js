import Link from "next/link";
import React from "react";
import Footer from "../components/shared/Footer";
import NavbarComp from "../components/shared/Navbar";

function Privacypolicy({ footerData }) {
  return (
    <>
      {" "}
      <NavbarComp />
      <div className="chooseus bg-aquaBlue pt-60 mb-100 mt-80">
        <div className="container">
          <h1 className="text-black tabtitle arboria_bold mb-md-25 mb-15">
            Privacy Policy
          </h1>
          <h2 className="text-black tabtitle arboria_bold mb-md-25 mb-15">
            Information Collection and Use
          </h2>
          <p className="fs-20 text-gray aboutus__subtitle arboria_book mb-0">
            HauteLogic, a Visionet solution referred as HauteLogic values the
            privacy of is visitors and customers. The policy of HauteLogic and
            its worldwide offices, hereinafter called “HauteLogic”, regarding
            online collection of personal information is explained below. This
            policy covers information collected on{" "}
            <a href="https://www.hautelogic.net/">
              https://www.hautelogic.net/
            </a>
            . By giving your personal information you agree that we may collect
            and use such information in accordance with the terms and conditions
            of this policy. Please do not submit any information if you are less
            than 18 years old unless you have the consent of your parent or
            guardian. If you do not agree to this policy, please do not use this
            site. HauteLogic reserves the right to occasionally change the
            policy at its own discretion and bring such changes to your
            attention (see Notification of Changes below).
          </p>
          <h2 className="text-black tabtitle arboria_bold mb-md-25 mb-15 mt-30">
            Information Collection and Use
          </h2>
          <div className="row mb-md-80 mb-30">
            <ul className="fs-20 text-gray aboutus__subtitle arboria_book mb-0 privacy_">
              <li>
                Registration – To use portions of this site, a user must first
                complete a registration form. During registration a user is
                required to give contact information such as your name, address,
                company name and address, e-mail address. This information is
                used to contact the user about services on our site for which
                the user has expressed interest. Unique identifiers (such as,
                username and password), are used for security purposes to
                safeguard personal information.
              </li>
              <li>
                Order – We request information on our order form from users
                ordering our products. A user must provide contact information
                such as name, email, and shipping address and financial
                information such as credit card number, expiration date. This
                information is used for billing purposes and to fill customer
                orders. If we have trouble processing an order, the information
                is used to contact the user.
              </li>
              <h2 className="text-black tabtitle arboria_bold mb-md-25 mb-15 mt-30">
                Information Use
              </h2>
              <li>
                Cookies – A cookie is a piece of data stored on the user’s
                computer tied to information about the user. Usage of a cookie
                is in no way linked to any personally identifiable information
                while on our site. We use session ID cookies. For the session ID
                cookie, once users close the browser, the cookie simply
                terminates.
              </li>
              <li>
                Log Files – We gather certain information about the use of our
                site by our visitors using a process that does not by itself
                identify a specific individual. This information is then
                compiled and analyzed in a way that does not identify our
                visitors personally. The information may include the Uniform
                Resource Locator (URL) a visitor of our site has just come from,
                which URLs have been visited within our site, what browser is
                being used, and what Internet Protocol (IP) address a visitor
                used to get to our site.
              </li>
              <li>
                Third Parties – Except as specifically described in this privacy
                policy, we will not, without your specific prior consent, sell,
                trade or transfer your personally identifiable information to
                such third parties other than authorized third parties and
                others involved in the e-commerce distribution chain (e.g.,
                vendors, suppliers), which may need access to some of your
                personal information. For example, if we ship an order to you,
                we must share your name and address with a shipping company. We
                do not give access to data on individual transactions to third
                parties, other than as described in this privacy policy.
              </li>
              <h2 className="text-black tabtitle arboria_bold mb-md-25 mb-15 mt-30">
                Communications from the Site
              </h2>
              <li>
                Information List – Our Information List is an opt-in/opt-out
                emailing service that keeps the subscriber abreast of current
                developments with HauteLogic. Noteworthy events such as press
                releases are included in the periodic emailing. If a user wishes
                to subscribe to the list, we ask for contact information such as
                name and email address. Out of respect for our users’ privacy we
                provide a way to opt-out of these communications.
                <a href="https://www.hautelogic.net/">
                  {" "}
                  https://www.hautelogic.net/
                </a>
              </li>
              <li>
                Sharing – Legal Disclaimer – Though we make every effort to
                preserve user privacy, we may need to disclose personal
                information when required by law wherein we have a good-faith
                belief that such action is necessary to comply with a current
                judicial proceeding, a court order or legal process served on
                our website.
              </li>
              <li>
                Security – When our registration/order form asks users to enter
                sensitive information such as credit card number and billing
                information, that information is encrypted and is protected with
                industry standard encryption technology – SSL. While on a secure
                page, such as our order form, the lock icon on the bottom of web
                browsers such as Netscape Navigator and Microsoft Internet
                Explorer becomes locked, to indicate secure transmission mode,
                as opposed to un-locked, or open, when users are just ‘surfing’.
              </li>
              <li>
                To prevent unauthorized access, maintain data accuracy, and
                ensure proper use of your information, we and our web server
                hosts have put in place appropriate physical, electronic, and
                managerial procedures to safeguard and secure the information we
                collect online. All of our users’ information, not just the
                sensitive information mentioned above, is restricted in our
                offices. Only employees who need the information to perform a
                specific job (for example, our billing clerk or a customer
                service representative) are granted access to personally
                identifiable information.
              </li>
              <li>
                If users have any questions about the security at our website,
                users should contact us.
              </li>
              <li>
                Children’s Privacy – We do not knowingly collect personal
                information from children under the age of 18. If we learn that
                we have personal information on a child under the age of 18 we
                will delete that information ourselves.
              </li>
              <li>
                Correcting/Updating/Deleting/Deactivating Personal Information –
                If a user’s personally identifiable information changes (such as
                zip code, phone, email or postal address), or if a user no
                longer desires our service, we provide a way to correct, update
                or delete/deactivate users’ personally identifiable information.
                This can be done in the user’s account accessed by username and
                password or by contacting us.
              </li>
              <li>
                Notification of Changes – If we decide to change our privacy
                policy, we will post those changes to this privacy statement,
                the homepage, and other places we deem appropriate so our users
                are always aware of what information we collect, how we use it,
                and under what circumstances, if any, we disclose it.
              </li>
              <li>
                If, however, we are going to use our users’ personally
                identifiable information in a manner different from that stated
                at the time of collection we will notify users by posting a
                notice on our website for 30 days.
              </li>
              <li>
                Severability – In the event any of the provisions of this
                privacy policy are held to be unenforceable, the remaining
                provisions will be unimpaired and the unenforceable provision(s)
                will be replaced by such enforceable provision(s) as comes
                closest to the intention underlying the unenforceable
                provision(s).
              </li>
              <li>
                Contact Information – If users have any questions or suggestions
                regarding our privacy policy, please{" "}
                <a href="https://www.hautelogic.net/aboutus">contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer footerData={footerData} />
    </>
  );
}
export default Privacypolicy;

export async function getServerSideProps() {
  // Fetch data from external API
  //const url = process.env.NODE_ENV === "production" ? process.env.BASE_URL : "http://localhost:1337" ;
  const url =
    process.env.NODE_ENV === "production"
      ? "http://localhost:1337"
      : "http://localhost:1337";

  const resFooterData = await fetch(`${url}/api/footer?populate=*`);
  const footerData = await resFooterData.json();

  // Pass data to the page via props
  return { props: { footerData } };
}
