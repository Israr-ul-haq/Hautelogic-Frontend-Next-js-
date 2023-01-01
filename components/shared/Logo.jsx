import Image from "next/image";
import Link from "next/link";
function Logo({ img, responsive }) {
  return (
    <Link href={"/"} passHref>
      <a>
        <Image
          src={img}
          alt="logo"
          layout={responsive ? "responsive" : "intrinsic"}
        />
      </a>
    </Link>
  );
}

export default Logo;
