import Image from "next/image";
import Particles from "@/components/atoms/Particles";
import Background from "@/assets/images/bg.png";
import RadialGradient from "../atoms/RadialGradient";

export default function HeroAbout() {
  return (
    <section className="relative ">
      {/* Radial gradient */}
      <RadialGradient OuterColor="bg-rose-200" InnerColor="bg-pink-200" />

      {/* Particles animation */}
      <Particles className="absolute inset-0 h-96 -z-10" />

      {/* Illustration */}
      <div
        className="md:block absolute left-1/2 -translate-x-1/2 translate-y-1/2 -mt-16 blur-sm opacity-40 pointer-events-none -z-10 "
        aria-hidden="true"
      >
        <Image
          src={Background}
          className="max-w-none"
          width={1440}
          height={427}
          alt="Page Illustration"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10 md:pt-40">
          {/* Hero content */}
          <div className="text-center">
            <div
              className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400 pb-3"
              data-aos="fade-down"
            >
              About Shanabunny
            </div>
            <h1
              className="h1 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-300 pb-6"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Turning Imagination into Reality
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
