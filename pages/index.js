import Head from "next/head";
import Home from "../components/home/Home";
import NextNProgress from "nextjs-progressbar";
import { getServerSideSitemap } from "next-sitemap";
export default function HomePage({
  data,
  tabsData,
  chooseData,
  successData,
  blogsData,
  footerData,
  caseData,
}) {
  // return

  return (
    <>
      <Head>
        <meta name="description" content="Hautelogic" charset="Utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="F7npvZRvebVww2-iV7ES8vW3BLFUkDABEX9XQXtVJMc"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W9SPJKQ');`,
          }}
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5XK5FSNQ2G"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5XK5FSNQ2G')`,
          }}
        />
      </Head>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ showSpinner: true }}
      />

      <Home
        data={data}
        tabsData={tabsData}
        chooseData={chooseData}
        successData={successData}
        blogsData={blogsData}
        footerData={footerData}
        caseData={caseData}
      />
    </>
  );
}

// This gets called on every request
export async function getServerSideProps(ctx) {
  // Fetch data from external API
  const url = "http://localhost:1337";
  const domain = "https://www.hautelogic.net";
  const res = await fetch(`${url}/api/Homepage?populate=*`);
  const data = await res.json();

  const resTabsData = await fetch(`${url}/api/home-page-tabs?populate=*`);
  const tabsData = await resTabsData.json();
  const resChooseData = await fetch(`${url}/api/choose-us-sliders?populate=*`);
  const chooseData = await resChooseData.json();
  const resSuccessData = await fetch(`${url}/api/success-stories?populate=*`);
  const successData = await resSuccessData.json();
  // const resInsightData = await fetch(`${url}/api/insights?populate=*`);
  // const insightData = await resInsightData.json();
  const resBlogsData = await fetch(
    `${url}/api/blog-tabs?sort=publishedAt&populate=*`
  );
  const blogsData = await resBlogsData.json();
  const resFooterData = await fetch(`${url}/api/footer?populate=*`);
  const footerData = await resFooterData.json();
  const resCaseStudies = await fetch(`${url}/api/case-studies?populate=*`);

  const caseData = await resCaseStudies.json();

  /// sitemap dynamic routes

  // Pass data to the page via props
  return {
    props: {
      data,
      chooseData,
      tabsData,
      blogsData,
      successData,
      footerData,
      caseData,
    },
  };
}
