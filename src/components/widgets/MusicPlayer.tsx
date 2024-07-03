"use client";

import { FileData } from "@/shared/models";
import { useEffect, useRef, useState } from "react";
import RadialGradient from "../atoms/RadialGradient";

interface Props {
  className?: string;
  musicList?: FileData[];
}

export default function MusicPlayer({ musicList, className }: Props) {
  const ref = useRef<HTMLAudioElement>(null);

  const [isPaused, setIsPaused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !musicList || musicList.length < 1) {
    return <div className={`${className}`} />;
  }

  const onClickEqualizer = () => {
    if (ref.current) {
      ref.current.paused ? onPlay() : onPause();
    }
  };

  const onPause = () => {
    if (ref.current) ref.current.pause();
    setIsPaused(true);
  };

  const onPlay = () => {
    if (ref.current) ref.current.play();
    setIsPaused(false);
  };

  const onClickNext = () => {
    if (!ref.current) return;

    if (index + 1 < musicList.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }

    ref.current.load();
  };

  const onClickPrevious = () => {
    if (!ref.current) return;

    if (index - 1 < 0) {
      setIndex(musicList.length - 1);
    } else {
      setIndex(index - 1);
    }

    ref.current.load();
  };

  return (
    <div className={`${className}`}>
      <RadialGradient
        OuterColor="bg-yellow-100/80"
        InnerColor="bg-cyan-200/20"
      />
      <div>
        <audio ref={ref} loop autoPlay>
          <source
            src={`/api/music?id=${musicList[index].FileID}`}
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
        <button
          className="flex gap-4 justify-center group"
          onClick={onClickEqualizer}
        >
          <div className="equalizer group-hover:opacity-80 my-auto ">
            <svg
              className="fill-pink-300"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              {isPaused ? (
                <>
                  <rect x="4" y="16" width="4" height="4" />
                  <rect x="10.2" y="16" width="4" height="4" />
                  <rect x="16.3" y="16" width="4" height="4" />
                </>
              ) : (
                <>
                  <rect
                    className={"eq-bar eq-bar--1"}
                    x="4"
                    y="4"
                    width="3.7"
                    height="8"
                  />
                  <rect
                    className="eq-bar eq-bar--2"
                    x="10.2"
                    y="4"
                    width="3.7"
                    height="16"
                  />
                  <rect
                    className="eq-bar eq-bar--3"
                    x="16.3"
                    y="4"
                    width="3.7"
                    height="11"
                  />
                </>
              )}
            </svg>
          </div>
          <div className="text-center max-sm:hidden group-hover:opacity-80 bg-clip-text text-transparent bg-gradient-to-r from-pink-300/60 via-purple-200 to-cyan-300/60">
            <span>{musicList[index].FileName?.replace(".mp3", "")}</span>
          </div>
        </button>
      </div>
      {/* <div className="flex my-auto gap-4 max-sm:hidden">
        <button
          disabled={musicList.length < 2}
          className=" hover:text-purple-200 disabled:text-slate-300"
          onClick={onClickPrevious}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-4"
          >
            <path
              fill-rule="evenodd"
              d="M3.22 7.595a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 0 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06l-3.25 3.25Zm8.25-3.25-3.25 3.25a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 1 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div className=" text-center ">
          <span>{musicList[index].FileName?.replace(".mp3", "")}</span>
        </div>
        <button
          disabled={musicList.length < 2}
          onClick={onClickNext}
          className=" hover:text-purple-200 disabled:text-slate-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-4"
          >
            <path
              fill-rule="evenodd"
              d="M12.78 7.595a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25Zm-8.25-3.25 3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div> */}
    </div>
  );
}
