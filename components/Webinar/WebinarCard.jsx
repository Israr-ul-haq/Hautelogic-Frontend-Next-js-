import Link from "next/link";
export const WebinarCard = ({ blog, id }) => {
  return (
    <div className="card mb-20">
      <div className="zoom">
        <img
          className="card-img-top"
          src={
            process.env.NODE_ENV === "production"
              ? "https://stgadm.hautelogic.net" +
                blog?.attributes?.Blog_Image?.data?.attributes?.url
              : "http://localhost:1337" +
                blog?.attributes?.Blog_Image?.data?.attributes?.url
          }
          alt="Card image cap"
        />
      </div>

      <div className="card-body">
        {id ? <p className="card-title card_primary_title">Blog</p> : ""}
        <h5 className="card-title">{blog?.attributes?.Blog_Title}</h5>
        <p className="card-text">{blog?.attributes?.Blog_Description}</p>
        {blog?.attributes?.slug ===
        "improving-supply-chains-through-technology" ? (
          <Link
            href={`https://industrytoday.com/improving-supply-chains-through-technology/`}
            passHref
            target="_blank"
          >
            <a target="_blank">
              <button className="border-radius-sm btn btn-outline-pink arboria_book fs-16 px-10 px-lg-15 py-15 me-35 ">
                Read More
              </button>
            </a>
          </Link>
        ) : (
          <Link href={`/Blog/${blog?.attributes?.slug}`} passHref>
            <button className="border-radius-sm btn btn-outline-pink arboria_book fs-16 px-10 px-lg-15 py-15 me-35 ">
              Read More
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
