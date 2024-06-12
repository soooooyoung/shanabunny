"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "@/components/widgets/Footer";
import Header from "@/components/widgets/Header";
import { getCookie, setCookie } from "cookies-next";

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
      <Header auth={!!getCookie("token")} />
      <main className="grow">{children}</main>
      <Footer />
    </>
  );
}
