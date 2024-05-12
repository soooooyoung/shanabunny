import HeroAbout from "@/components/sections/About";
import Story from "@/components/sections/Story";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `shanabunny - about shana`,
};

const Page = () => {
  return (
    <>
      <HeroAbout />
      <Story />
    </>
  );
};

export default Page;
