import Image from "next/image";
import logo from "@/assets/images/profile.png";

const Logo = () => (
  <div className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-rose-200 hover:text-rose-300 dark:text-white md:text-xl animate-bounce">
    <Image
      src={logo}
      alt=""
      className="h-auto w-12 opacity-50 contrast-50 grayscale duration-75 hover:opacity-100 hover:contrast-100 hover:grayscale-0 md:w-16"
      object-fit="contain"
    />
  </div>
);

export default Logo;
