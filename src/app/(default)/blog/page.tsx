import dynamic from "next/dynamic";
import Particles from "@/components/atoms/Particles";
import RadialGradient from "@/components/atoms/RadialGradient";
import PageTitle from "@/components/widgets/PageTitle";
import { getBlog } from "@/app/actions";

export const metadata = {
  title: "shanabunny - Blog",
  description: "Blog posts",
};

const DynamicPostList = dynamic(() => import("@/components/widgets/PostList"), {
  ssr: false,
});

const DynamicPostViewer = dynamic(
  () => import("@/components/widgets/PostViewer"),
  {
    ssr: false,
  }
);

export default async function Blog() {
  let data = await getBlog();
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
              <DynamicPostList postList={data} />
            </div>
            <DynamicPostViewer postList={data} />
          </div>
        </div>
      </section>
    </>
  );
}
