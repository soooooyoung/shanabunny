import dynamic from "next/dynamic";
import Particles from "@/components/atoms/Particles";
import RadialGradient from "@/components/atoms/RadialGradient";
import PageTitle from "@/components/widgets/PageTitle";
import { getProjects } from "@/app/actions";
import { cookies } from "next/headers";

export const metadata = {
  title: "shanabunny - Projects",
  description: "List of projects",
};
const DynamicPostList = dynamic(() => import("@/components/widgets/PostList"), {
  ssr: false,
});
export default async function Projects() {
  const cookieStore = cookies();
  const auth = !!cookieStore.get("token");
  let data = await getProjects(0, 0);

  return (
    <>
      {/* Content */}
      {/* Radial gradient */}
      <section className="relative">
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
              <DynamicPostList postList={data} auth={auth} />
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
