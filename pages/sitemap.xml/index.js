import { getServerSideSitemap } from "next-sitemap";
import { staticSitemap } from "../../components/staticSitemap";

export async function getServerSideProps(ctx) {
  // Fetch data from external API
  const url = "http://localhost:1337";
  const domain = "https://www.hautelogic.net/";

  const resCaseStudies = await fetch(`${url}/api/case-studies?populate=*`);
  const caseData = await resCaseStudies.json();
  const newsSitemaps = caseData?.data?.map((item) => ({
    loc: `${domain}case-studies/${item?.attributes?.slug.toString()}`,
    lastmod: new Date().toISOString(),
    priority: 0.7,
  }));

  const resBlogsData = await fetch(
    `${url}/api/blog-tabs?sort=publishedAt&populate=*`
  );
  const blogsData = await resBlogsData.json();
  const newsSitemaps1 = blogsData?.data?.map((item) => ({
    loc: `${domain}blogs/${item?.attributes?.slug.toString()}`,
    lastmod: new Date().toISOString(),
    priority: 0.8,
  }));
  const newsSitemaps2 = staticSitemap.map((item) => {
    if (item.loc === "https://www.hautelogic.net") {
      return {
        loc: item.loc,
        lastmod: new Date().toISOString(),
        priority: 1,
      };
    } else {
      return {
        loc: item.loc,
        lastmod: new Date().toISOString(),
        priority: 0.9,
      };
    }
  });

  const fields = [...newsSitemaps2, ...newsSitemaps, ...newsSitemaps1];

  return getServerSideSitemap(ctx, fields);
}
export default function Site() {}
