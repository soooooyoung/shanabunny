import Particles from "@/components/atoms/Particles";
import RadialGradient from "@/components/atoms/RadialGradient";
import PageTitle from "@/components/widgets/PageTitle";
import { Editor } from "@/components/widgets/Editor";

export default function Write() {
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
            <PageTitle title="NEW POST" />

            {/* Content */}
            <div className="mx-auto max-w-3xl">
              <Editor />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
