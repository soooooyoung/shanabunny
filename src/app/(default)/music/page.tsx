"use client";

import Particles from "@/components/atoms/Particles";
import RadialGradient from "@/components/atoms/RadialGradient";
import PageTitle from "@/components/widgets/PageTitle";
import { useState } from "react";
import { postFile } from "@/app/actions";

export default function Music() {
  const [source, setSource] = useState<File>();

  const onSave = async () => {
    try {
      if (!source) throw new Error("No file to save");
      const buffer = await source.arrayBuffer();
      const id = await postFile(buffer, "file/music", source.name);
    } catch (e) {
      //TODO: popup
    }
  };

  return (
    <>
      {/* Content */}
      <section className="relative">
        {/* Radial gradient */}
        <RadialGradient />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <PageTitle title="Music" />

            <div className="mx-auto max-w-3xl">
              {/* Options */}
              <div className="flex">
                <audio controls>
                  <source src={`/api/music?id=6`} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <div className="inline-flex items-center h-8">
                  <input
                    type="file"
                    accept=".mp3"
                    className="px-3 rounded-none text-purple-300 focus-visible:!outline-0 bg-white"
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        const file = e.target.files[0];
                        if (file) setSource(file);
                      }
                    }}
                  />
                </div>
                <button
                  className="btn text-sm text-white bg-pink-200 hover:bg-purple-200 w-full rounded-none "
                  onClick={() => {
                    onSave();
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
