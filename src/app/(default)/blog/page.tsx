import dynamic from "next/dynamic";
import Particles from "@/components/atoms/Particles";
import RadialGradient from "@/components/atoms/RadialGradient";
import PageTitle from "@/components/widgets/PageTitle";
import { getAllPosts, getProjects } from "@/app/actions/blog";
import { cookies } from "next/headers";

export const metadata = {
  title: "shanabunny - Blog",
  description: "Blog posts",
};

const DynamicPostCarousel = dynamic(
  () => import("@/components/widgets/PostCarousel"),
  {
    ssr: false,
  }
);

const DynamicPostViewer = dynamic(
  () => import("@/components/widgets/PostViewer"),
  {
    ssr: false,
  }
);

export default async function Blog() {
  const cookieStore = cookies();
  const auth = !!cookieStore.get("token");
  let data = await getAllPosts();
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
            <PageTitle title="BLOG POSTS" />
            <div className="pb-6 md:pb-12">
              <DynamicPostCarousel postList={data} />
            </div>
            <DynamicPostViewer postList={data} auth={auth} />
          </div>
        </div>
      </section>
    </>
  );
}
