"use client";

import Carousel from "@/components/widgets/Carousel";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import DefaultImage from "@/assets/images/bg.png";
import { Post } from "@/shared/models";
import Link from "next/link";
import dynamic from "next/dynamic";

interface Props {
  postList?: Post[];
}

export default function PostList({ postList }: Props) {
  return (
    <Carousel
      className="relative bg-transparent"
      swiperProps={{
        className: "items-center",
        noSwiping: false,
        slidesPerView: "auto",
        spaceBetween: 32,
      }}
    >
      {postList &&
        postList.map((post, postIndex) => (
          <SwiperSlide className="!w-auto" key={postIndex}>
            <div className="max-w-52 text-center">
              <Link href={`blog?id=${post.PostID}`} key={post.PostID}>
                <Image
                  className="justify-center max-w-52 grayscale opacity-50 hover:grayscale-0 hover:opacity-100"
                  src={DefaultImage}
                  alt=""
                />
                <span>{post.Title}</span>
              </Link>
            </div>
          </SwiperSlide>
        ))}
    </Carousel>
  );
}
