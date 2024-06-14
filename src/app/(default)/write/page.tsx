"use client";
import Particles from "@/components/atoms/Particles";
import RadialGradient from "@/components/atoms/RadialGradient";
import PageTitle from "@/components/widgets/PageTitle";
import { Editor } from "@/components/widgets/Editor";

export default function Write() {
  const onSave = (content?: string) => {};
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

            <div className="mx-auto max-w-3xl">
              {/* Title */}
              <input className="w-full px-3 py-1.5" />
              {/* Title Image */}
              {/* <input
                type="file"
                className="input-file w-full px-3 py-1.5"
                multiple={true}
                accept={".png, .jpg, .gif"}
              /> */}
              {/* Content */}
              <Editor onSave={onSave} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
