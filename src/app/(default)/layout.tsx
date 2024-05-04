"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import FancyHeader from "@/components/widgets/FancyHeader";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <FancyHeader />

      <main className="grow">{children}</main>
    </>
  );
}
