import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/shanabunny.png";

const Logo = () => (
  <Link className="inline-flex" href="/" aria-label="Cruip">
    <Image
      className="max-w-none opacity-80 contrast-80  duration-75 hover:opacity-100 hover:contrast-100"
      src={logo}
      height={52}
      priority
      alt="shanabunny"
    />
  </Link>
);

export default Logo;
