import Image from "next/image";
import Particles from "@/components/atoms/Particles";
import Background from "@/assets/images/bg.png";
import Background2 from "@/assets/images/bg2.jpg";
import Shana from "@/assets/images/shana.png";

export default function HeroAbout() {
  return (
    <section className="relative ">
      {/* Radial gradient */}
      <div
        className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-squar bg-pink-300"
        aria-hidden="true"
      >
        <div className="absolute inset-0 translate-z-0 bg-cyan-500 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute w-64 h-64 translate-z-0 bg-rose-300 rounded-full blur-[80px] opacity-70"></div>
      </div>

      {/* Particles animation */}
      <Particles className="absolute inset-0 h-96 -z-10" quantity={70} />

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
              Turning Imagination to Reality
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
