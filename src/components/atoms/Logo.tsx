import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";

const Logo = () => (
  <Link className="inline-flex" href="/" aria-label="Cruip">
    <Image
      className="max-w-none opacity-50 contrast-50 grayscale duration-75 hover:opacity-100 hover:contrast-100 hover:grayscale-0"
      src={logo}
      width={38}
      height={38}
      priority
      alt="Stellar"
    />
  </Link>
);

export default Logo;
