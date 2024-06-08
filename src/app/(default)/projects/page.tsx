import PostItem from "@/components/widgets/PostItem";
import Particles from "@/components/atoms/Particles";
import RadialGradient from "@/components/atoms/RadialGradient";
import PageTitle from "@/components/widgets/PageTitle";
import { getBlogPost } from "@/shared/utils/APIUtility";

export const metadata = {
  title: "shanabunny - Projects",
  description: "List of projects",
};

export default async function Projects() {
  let data = await getBlogPost();
  return (
    <>
      {/* Content */}
      <section className="relative">
        {/* Radial gradient */}
        <RadialGradient />

        {/* Particles animation */}
        <div className="absolute inset-0 h-96 -z-10" aria-hidden="true">
          <Particles />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <PageTitle title="PROJECTS" />

            {/* Content */}
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div
                  className="absolute h-full top-4 left-[2px] w-0.5 bg-pink-200 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_150px,theme(colors.white))] -z-10 overflow-hidden after:absolute after:h-4 after:top-0 after:-translate-y-full after:left-0 after:w-0.5 after:bg-[linear-gradient(180deg,_transparent,_theme(colors.pink.500/.65)_25%,_theme(colors.pink.200)_50%,_theme(colors.pink.500/.65)_75%,_transparent)] after:animate-shine"
                  aria-hidden="true"
                ></div>
                {data &&
                  data.result &&
                  data.result
                    .filter((post) => post.PostType == 0)
                    .map((post, postIndex) => (
                      <PostItem key={postIndex} post={post} />
                    ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="max-w-3xl mx-auto">
              <ul className="flex items-center justify-between mt-12 pl-8 md:pl-48">
                <li>
                  <span className="btn-sm text-pink-100 hover:text-white transition duration-150 ease-in-out group relative before:absolute before:inset-0 bg-pink-200 before:rounded-full">
                    <span className="relative inline-flex items-center">
                      <span className="tracking-normal mr-1">&lt;-</span>
                      Previous Page
                    </span>
                  </span>
                </li>
                <li>
                  <span className="btn-sm text-pink-100 hover:text-white transition duration-150 ease-in-out group  relative before:absolute before:inset-0 bg-pink-200 before:rounded-full before:pointer-events-none">
                    Next Page{" "}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
