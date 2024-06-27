import dynamic from "next/dynamic";
import Particles from "@/components/atoms/Particles";
import RadialGradient from "@/components/atoms/RadialGradient";
import PageTitle from "@/components/widgets/PageTitle";
import { getProjects } from "@/app/actions";
import { cookies } from "next/headers";
import { getAllCategories } from "@/app/actions/blog";
import Link from "next/link";

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
  let categories = await getAllCategories();

  return (
    <>
      {/* Content */}
      {/* Radial gradient */}
      <section className="relative">
        <RadialGradient />

        {/* Particles animation */}
        <div className="absolute inset-0 h-96 -z-10" aria-hidden="true">
          <Particles />
          <Particles
            className="absolute top-80 inset-0 h-96 -z-10"
            quantity={150}
            color={{ r: 255, g: 184, b: 199 }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <PageTitle title="PROJECTS" />

            {/* Categories */}
            <ul className="flex grow flex-wrap -mt-6 md:-mt-12 mb-12 md:mb-20 w-full border-b-2 border-white border-opacity-40s justify-center">
              {categories &&
                categories.map(({ Name, CategoryID }, index) => {
                  if (CategoryID == 0) Name = "All";
                  return (
                    <li
                      key={`item-link-${index}`}
                      className="hover:-translate-y-1 transition-transform duration-150 ease-in-out"
                    >
                      <Link
                        className="btn-sm pb-2"
                        href={
                          CategoryID == 0
                            ? "projects"
                            : `projects?category=${CategoryID}`
                        }
                      >
                        <span className="relative inline-flex items-center h4 bg-clip-text text-transparent bg-gradient-to-r text-white uppercase drop-shadow">
                          {Name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
            </ul>
            {/* Content */}
            <div className="max-w-3xl mx-auto">
              <DynamicPostList
                postList={data}
                auth={auth}
                categories={categories}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
