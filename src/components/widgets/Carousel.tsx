"use client";

import Image, { StaticImageData } from "next/image";
import Particles from "@/components/atoms/Particles";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/scrollbar";
import "swiper/scss/autoplay";

function createSlide(images: StaticImageData[]) {
  return images.map((source, index) => (
    <SwiperSlide className="!w-auto" key={index}>
      <Image className="mt-1 " src={source} alt="" width={107} />
    </SwiperSlide>
  ));
}
interface Props {
  images: StaticImageData[];
}

export default function Carousel({ images }: Props) {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 bg-white">
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
            <div className="clients-carousel relative before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l">
              <Swiper
                className="!ease-linear select-none items-center"
                modules={[Autoplay]}
                slidesPerView={"auto"}
                spaceBetween={64}
                centeredSlides={true}
                loop={true}
                speed={1500}
                noSwiping={true}
                noSwipingClass="swiper-slide"
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                  stopOnLastSlide: false,
                  waitForTransition: true,
                }}
              >
                {createSlide(images)}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
