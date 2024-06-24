import Image from "next/image";
import Particles from "@/components/atoms/Particles";
import RadialGradient from "@/components/atoms/RadialGradient";
import PageTitle from "@/components/widgets/PageTitle";
import { getBlog } from "@/app/actions";
import PostDate from "@/components/widgets/PostDate";
import { ContentReader } from "@/components/widgets/ContentReader";
import { PostList } from "@/components/widgets/PostList";
import { PostViewer } from "@/components/widgets/PostViewer";

export const metadata = {
  title: "shanabunny - Blog",
  description: "Blog posts",
};

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
              <PostList postList={data} />
            </div>
            <PostViewer postList={data} />
          </div>
        </div>
      </section>
    </>
  );
}
