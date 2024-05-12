"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import FancyHeader from "@/components/widgets/FancyHeader";
import Footer from "@/components/widgets/Footer";

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
      <Footer />
    </>
  );
}
