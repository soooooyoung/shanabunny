"use client";

import Image, { StaticImageData } from "next/image";
import Particles from "@/components/atoms/Particles";

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

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/scrollbar";
import "swiper/scss/autoplay";

function createSlide(source: StaticImageData) {
  return (
    <SwiperSlide className="swiper-slide !w-auto">
      <Image className="mt-1 " src={source} alt="" width={107} />
    </SwiperSlide>
  );
}
export default function Carousel() {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Particles animation */}
        <div className="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-6">
          <Particles
            className="absolute inset-0 -z-10"
            quantity={70}
            color={{ r: 255, g: 184, b: 193 }}
          />
        </div>

        <div className="py-12 md:py-16">
          <div className="overflow-hidden">
            <div className="clients-carousel swiper-container relative before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l">
              <Swiper
                className="swiper-wrapper !ease-linear select-none"
                modules={[Autoplay]}
                slidesPerView="auto"
                spaceBetween={64}
                centeredSlides={true}
                loop={true}
                speed={5000}
                autoplay={{ delay: 0, disableOnInteraction: true }}
              >
                {createSlide(react)}
                {createSlide(docker)}
                {createSlide(next)}
                {createSlide(cpp)}
                {createSlide(typescript)}
                {createSlide(css)}
                {createSlide(html)}
                {createSlide(nodejs)}
                {createSlide(nginx)}
                {createSlide(ssms)}
                {createSlide(sql)}
                {createSlide(aws)}
                {createSlide(flatbuffers)}
                {createSlide(protobuf)}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
