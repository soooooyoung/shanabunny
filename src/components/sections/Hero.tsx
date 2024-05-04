import Image from "next/image";
import Particles from "@/components/atoms/Particles";
import Background from "@/assets/images/bg.png";
import Room from "@/assets/images/bg1.png";
import Chair from "@/assets/images/object1.png";
import Desk from "@/assets/images/object2.png";
import Profile from "@/assets/images/profile.png";
import Carousel from "../widgets/Carousel";

export default function Hero() {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Particles animation */}
        <Particles
          className="absolute inset-0 -z-10"
          color={{ r: 255, g: 77, b: 148 }}
        />
        <Particles
          className="absolute inset-0 -z-10"
          color={{ r: 51, g: 255, b: 238 }}
        />
        <Particles
          className="absolute inset-0 -z-10"
          color={{ r: 214, g: 51, b: 255 }}
        />

        {/* Illustration */}
        <div
          className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
            {/* <Image
              src={Background}
              alt=""
              className="max-w-none"
              width={2146}
              priority
            /> */}
          </div>
        </div>

        <div className="pt-32 pb-16 md:pt-52 md:pb-32">
          {/* Banner */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6" data-aos="fade-down">
              <div className="inline-flex relative before:absolute before:inset-0">
                <Image src={Room} alt="" />

                <div
                  className="absolute peer-hover:animate-bounce"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  <Image src={Chair} alt="" />
                </div>
                <div
                  className="absolute"
                  data-aos="fade-down"
                  data-aos-delay="800"
                >
                  <Image src={Desk} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6" data-aos="fade-down ">
              <div className="inline-flex relative before:absolute before:inset-0 before:bg-pink-300 before:blur-md">
                <a
                  className="btn-sm py-0.5 text-slate-100 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(theme(colors.pink.500),_theme(colors.purple.500))_padding-box,_linear-gradient(theme(colors.rose.300),_theme(colors.cyan.200)_75%,_theme(colors.transparent)_100%)_border-box] relative before:absolute before:inset-0 before:bg-pink-200/50 before:rounded-full before:pointer-events-none shadow"
                  href="https://github.com/soooooyoung"
                  target="_blank"
                >
                  <span className="relative inline-flex items-center">
                    Visit GitHub
                    <span className="tracking-normal text-pink-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <h1
              className="h1 bg-clip-text text-transparent bg-gradient-to-r from-pink-300/60 via-purple-200 to-cyan-300/60 pb-4"
              data-aos="fade-down"
            >
              Welcome to shanabunny
            </h1>
            <div className="mb-6" data-aos="fade-down ">
              <div className="inline-flex relative before:absolute before:inset-0">
                <Image
                  data-aos="fade-down"
                  data-aos-delay="200"
                  src={Profile}
                  alt=""
                  className=""
                  priority
                />
              </div>
            </div>
            <p
              className="text-lg  text-white bg-gradient-to-r from-pink-300/60 via-purple-200 to-cyan-300/60 mb-8"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              showcasing Shana
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <div>
                <a
                  className="btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group"
                  href="#0"
                >
                  View Portfolio
                  <span className="tracking-normal text-pink-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </a>
              </div>
              <div>
                <a
                  className="btn text-white hover:text-white bg-cyan-500 bg-opacity-25 hover:bg-opacity-30 w-full transition duration-150 ease-in-out"
                  href="#0"
                >
                  <svg
                    className="shrink-0 fill-white mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                  </svg>
                  <span>Contact shana</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
