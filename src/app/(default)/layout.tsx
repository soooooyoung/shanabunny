"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import FancyHeader from "@/components/widgets/FancyHeader";
import Header from "@/components/widgets/Header";

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
      <Header />

      <main className="grow">{children}</main>
    </>
  );
}
