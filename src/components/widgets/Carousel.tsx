"use client";

import Image, { StaticImageData } from "next/image";
import Particles from "@/components/atoms/Particles";

import Logo from "@/assets/images/logo.png";
import Image1 from "@/assets/images/1.gif";
import Image2 from "@/assets/images/2.gif";
import Image3 from "@/assets/images/3.gif";
import Image4 from "@/assets/images/4.gif";
import Image6 from "@/assets/images/6.gif";
import Image7 from "@/assets/images/7.gif";
import Image8 from "@/assets/images/8.gif";
import Image10 from "@/assets/images/10.gif";
import Image11 from "@/assets/images/11.gif";
import Image12 from "@/assets/images/12.gif";
import Image13 from "@/assets/images/13.gif";
import Image16 from "@/assets/images/16.gif";
import Image17 from "@/assets/images/17.gif";
import Image18 from "@/assets/images/18.gif";
import Image19 from "@/assets/images/19.gif";
import Image20 from "@/assets/images/20.gif";

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
                {createSlide(Image1)}
                {/* {createSlide(Image2)} */}
                {/* {createSlide(Image3)} */}
                {createSlide(Image4)}
                {createSlide(Image6)}
                {createSlide(Image7)}
                {createSlide(Image8)}
                {createSlide(Image10)}
                {/* {createSlide(Image11)} */}
                {/* {createSlide(Image12)} */}
                {/* {createSlide(Image16)} */}
                {/* {createSlide(Image17)}
                {createSlide(Image18)} */}
                {/* {createSlide(Image19)} */}
                {/* {createSlide(Image20)} */}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
