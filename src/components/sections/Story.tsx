import Image from "next/image";
import Shana from "@/assets/images/shana.png";

export default function Story() {
  return (
    <section className="relative">
      {/* Blurred shape */}
      <div
        className="absolute top-0 -mt-32 left-1/2 -translate-x-1/2 ml-10 blur-2xl opacity-70 pointer-events-none -z-10 "
        aria-hidden="true"
      ></div>

      <div className="px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="pb-12 md:pb-20">
            {/* Section header */}

            <div className="md:flex justify-center space-x-6 md:space-x-8 lg:space-x-14">
              <figure className="min-w-[240px]">
                <Image
                  className="sticky mx-auto rounded-lg"
                  src={Shana}
                  width={460}
                  data-aos="fade-down"
                  data-aos-delay="400"
                  alt="Shana"
                />
              </figure>
              <div className="max-w-[548px] mx-auto">
                <div className="text-slate-400 space-y-6">
                  <p>
                    We all thrive on learning something new every day and
                    everyone is constantly trying on different hats. I strive to
                    develop games with new technologies while preserving the
                    nostalgia experienced as a child. I am always thrilled to
                    work with people that share the same excitement about
                    building{" "}
                    <strong className="text-purple-500 font-medium">
                      games that bring gamers together and share connection as a
                      community.
                    </strong>
                  </p>
                  <p>
                    Shanabunny is a platform that connects people around the
                    topics and ideas of a game that fascinate them. It is an
                    idea that we can{" "}
                    <strong className="text-pink-500 font-medium">
                      use technology to take our experience, as gamers, to
                      uncharted territories{" "}
                    </strong>
                    and leave the online game industry in better shape while
                    were at it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
