import type { Metadata } from "next";
export const metadata: Metadata = {
  title: `shanabunny - blog`,
};

const Page = () => {
  return (
    <div>
      <section className="mx-auto max-w-3xl px-6 py-12 sm:px-6 sm:py-16 lg:py-20">
        BLOG
      </section>
    </div>
  );
};

export default Page;
