import Image from "next/image";
import Particles from "@/components/atoms/Particles";
import RadialGradient from "@/components/atoms/RadialGradient";
import PageTitle from "@/components/widgets/PageTitle";
import { getBlogPost } from "@/app/actions";
import PostDate from "@/components/widgets/PostDate";

export const metadata = {
  title: "shanabunny - Blog",
  description: "Blog posts",
};

export default async function Blog() {
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
            <PageTitle title="BLOG POSTS" />
            {data &&
              data.result &&
              data.result
                .filter((post) => post.PostType == 1)
                .map((post, postIndex) => (
                  <div
                    key={postIndex}
                    className="max-w-3xl mx-auto text-center pb-12 "
                  >
                    {post.CreatedTime && (
                      <PostDate dateString={post.CreatedTime} />
                    )}
                    <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-pink-300/60 via-indigo-300 to-cyan-200/80 pb-6">
                      {post.Title}
                    </h2>
                    {post.TitleImage && (
                      <Image className="m-auto " src={post.TitleImage} alt="" />
                    )}
                    <p className="text-lg text-slate-400">{post.Content}</p>
                  </div>
                ))}
          </div>
        </div>
      </section>
    </>
  );
}
