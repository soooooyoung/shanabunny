"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "@/components/widgets/Footer";
import Header from "@/components/widgets/Header";
import { getCookie } from "cookies-next";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = !!getCookie("token");
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
      <Header auth={auth} />
      <main className="grow">{children}</main>
      <Footer />
    </>
  );
}
