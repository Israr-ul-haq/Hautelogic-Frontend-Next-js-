import "../assets/scss/custom.scss";
import "../assets/css/style.css";
import SSRProvider from "react-bootstrap/SSRProvider";
function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
