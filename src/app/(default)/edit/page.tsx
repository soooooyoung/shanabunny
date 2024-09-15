import dynamic from "next/dynamic";
import Particles from "@/components/atoms/Particles";
import RadialGradient from "@/components/atoms/RadialGradient";
import PageTitle from "@/components/widgets/PageTitle";
import { getAllPosts } from "@/app/actions";
import { cookies } from "next/headers";

export const metadata = {
  title: "shanabunny - Edit",
  description: "Edit posts",
};

const DynamicEditPage = dynamic(() => import("@/components/sections/Edit"), {
  ssr: false,
});

export default async function Blog() {
  const cookieStore = cookies();
  let data = await getAllPosts();

  return (
    <>
      {/* Content */}
      <DynamicEditPage postList={data} />
    </>
  );
}
