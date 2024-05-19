import Image from "next/image";
import Particles from "@/components/atoms/Particles";
import Daisy from "@/assets/images/daisy.gif";
import Nana from "@/assets/images/nana.png";
import PigDaisy from "@/assets/images/pigdaisy.png";
import Pristontale from "@/assets/images/prisontale.png";
import Kingdom from "@/assets/images/kingdom.png";
import Aitax from "@/assets/images/aitax.png";
import Aitax2 from "@/assets/images/aitax2.png";
import Highlighter, { HighlighterItem } from "@/components/atoms/Highlighter";
import PageTitle from "../widgets/PageTitle";
import RadialGradient from "../atoms/RadialGradient";

export default function Features() {
  return (
    <section className="relative">
      {/* Particles animation */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24 -ml-32"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        <RadialGradient />
        <Particles className="absolute inset-0 -z-10" staticity={30} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-8">
        <div className="pt-16 md:pt-32">
          {/* Section header */}
          <div
            className="max-w-3xl mx-auto text-center pb-12 md:pb-20"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <h2 className="h2  text-white s drop-shadow-md   pb-4">Featured</h2>
            {/* <p className="text-lg text-slate-400">From past experiences.</p> */}
          </div>

          {/* Highlighted boxes */}
          <div
            className="relative pb-12 md:pb-20"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            {/* Blurred shape */}
            <div
              className="absolute bottom-0 -mb-20 left-1/2 -translate-x-1/2 blur-2xl opacity-50 pointer-events-none"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                <defs>
                  <linearGradient
                    id="bs2-a"
                    x1="19.609%"
                    x2="50%"
                    y1="14.544%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ffb3b7" />
                    <stop offset="100%" stopColor="#ffb3b7" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#bs2-a)"
                  fillRule="evenodd"
                  d="m346 898 461 369-284 58z"
                  transform="translate(-346 -898)"
                />
              </svg>
            </div>
            {/* Grid */}
            <Highlighter className="grid md:grid-cols-12 gap-6 group">
              {/* Box #1 */}
              <div className="md:col-span-12" data-aos="fade-down">
                <HighlighterItem>
                  <div className="relative h-full bg-gradient-to-r from-pink-300/60 via-purple-200 to-cyan-300/60  rounded-[inherit] z-20 overflow-hidden">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      {/* Text */}
                      <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 md:p-8 md:pr-0">
                        <div className="mb-5">
                          <div>
                            <h3 className="inline-flex text-xl font-bold text-white">
                              Don{"'"}t Starve Together Mods
                            </h3>
                            <p className="text-white">
                              Don{"'"}t Starve Together mods, including art
                              works, animations, and scripts since 2015.
                            </p>
                          </div>
                        </div>
                        <div>
                          <a
                            className="btn-sm text-rose-50 group-hover:text-white transition duration-150 ease-in-out group relative before:absolute before:inset-0 before:bg-rose-300 before:rounded-full before:pointer-events-none"
                            href="https://steamcommunity.com/id/shanabunny/myworkshopfiles/?appid=322330"
                            target="_blank"
                          >
                            <span className="relative inline-flex items-center">
                              Visit Steam Workshop{" "}
                              <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                                -&gt;
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      {/* Image */}
                      <div className="relative w-full h-64 md:h-auto overflow-hidden">
                        <Image
                          className="absolute bottom-0 left-1/2 -translate-x-1/2
                          md:left-0 md:translate-x-0
                          mx-auto max-w-none md:relative md:pb-0 pb-4 "
                          src={Daisy}
                          width="200"
                          height="400"
                          alt="Feature 01"
                        />
                      </div>
                      <div className="relative w-full h-64 md:h-auto overflow-hidden">
                        <Image
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:relative md:left-0{md}transla{}-x-0 "
                          src={Nana}
                          width="504"
                          height="400"
                          alt="Feature 01"
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
              {/* Box #2 */}
              <div className="md:col-span-7" data-aos="fade-down">
                <HighlighterItem>
                  <div className="relative h-full bg-gradient-to-r from-pink-300/60 via-purple-200 to-cyan-300/30  rounded-[inherit] z-20 overflow-hidden">
                    <div className="flex flex-col">
                      {/* Radial gradient */}
                      <div
                        className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 translate-z-0 bg-rose-100 rounded-full blur-[80px]" />
                      </div>
                      {/* Text */}
                      <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 md:p-8">
                        <div>
                          <h3 className="inline-flex text-xl font-bold text-white pb-1">
                            Game Development
                          </h3>
                          <p className="text-white">
                            Live-service content management and development
                            experiences in mobile MMORPG.
                          </p>
                        </div>
                      </div>
                      {/* Image */}
                      <div className="blur-sm relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
                        <Image
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0"
                          src={Pristontale}
                          width={536}
                          height={230}
                          alt="Feature 02"
                        />
                      </div>
                      <div className="blur-sm relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
                        <Image
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0"
                          src={Kingdom}
                          width={536}
                          height={230}
                          alt="Feature 02"
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
              {/* Box #3 */}
              <div className="md:col-span-5" data-aos="fade-down">
                <HighlighterItem>
                  <div className="relative h-full bg-gradient-to-r from-cyan-300/30 via-purple-200 to-pink-300/60  rounded-[inherit] z-20 overflow-hidden">
                    <div className="flex flex-col">
                      {/* Radial gradient */}
                      <div
                        className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 translate-z-0 bg-rose-100 rounded-full blur-[80px]" />
                      </div>
                      {/* Text */}
                      <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 md:p-8">
                        <div>
                          <h3 className="inline-flex text-xl font-bold text-white pb-1">
                            Full-stack Web Development
                          </h3>
                          <p className="text-white">
                            Landing pages, web ERP solution, and API development
                            for web services.
                          </p>
                        </div>
                      </div>
                      {/* Image */}
                      <div className="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
                        <Image
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0 blur-sm"
                          src={Aitax}
                          width={536}
                          height={230}
                          alt="Feature 03"
                        />
                      </div>
                      <div className="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
                        <Image
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0 blur-sm"
                          src={Aitax2}
                          width={536}
                          height={230}
                          alt="Feature 03"
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
            </Highlighter>
          </div>
        </div>
      </div>
    </section>
  );
}
