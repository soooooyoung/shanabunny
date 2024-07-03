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
import { preload } from "@/app/actions";
import MusicPlayer from "@/components/widgets/MusicPlayer";
import { getMusicList } from "../actions/file";

export default async function Home() {
  const data = await getMusicList();

  return (
    <>
      <div className="flex">
        <MusicPlayer
          className="pt-24 md:pt-32 mx-auto -mb-24"
          musicList={data.result}
        />
      </div>
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
