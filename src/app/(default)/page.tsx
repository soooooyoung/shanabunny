import Hero from "@/components/sections/Hero";
import Carousel from "@/components/widgets/Carousel";

import cpp from "@/assets/images/cpp.png";
import next from "@/assets/images/nextjs.png";
import react from "@/assets/images/react.png";
import typescript from "@/assets/images/typescript.png";
import css from "@/assets/images/css.png";
import html from "@/assets/images/html.png";
import nodejs from "@/assets/images/nodejs.png";
import docker from "@/assets/images/docker.png";
import nginx from "@/assets/images/nginx.png";
import ssms from "@/assets/images/ssms.png";
import sql from "@/assets/images/sql.png";
import aws from "@/assets/images/aws.png";
import flatbuffers from "@/assets/images/flatbuffers.png";
import protobuf from "@/assets/images/protobuf.png";
import Features from "@/components/sections/Features";
import { api, preload } from "@/shared/utils/APIUtility";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Home() {
  const token = cookies().get("token");
  preload();
  async function verify(token?: string) {
    "use server";
    if (!token) return;
    let accessDenied = false;
    try {
      const response = await api.post(`${process.env.HOST}/signin`);
      console.log(response);
    } catch (e) {
      accessDenied = true;
    }

    if (accessDenied) {
      cookies().delete("token");
      redirect("/");
    }
  }
  return (
    <>
      <Hero />
      <Carousel
        images={[
          cpp,
          next,
          react,
          typescript,
          css,
          html,
          nodejs,
          docker,
          nginx,
          ssms,
          sql,
          aws,
          flatbuffers,
          protobuf,
        ]}
      />
      <Features />
    </>
  );
}
