"use client";

import { FileData } from "@/shared/models";
import { useEffect, useRef, useState } from "react";

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
    return null;
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
      <div className="flex gap-4 justify-center">
        <audio ref={ref} loop autoPlay>
          <source
            src={`/api/music?id=${musicList[index].FileID}`}
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
        {/* <div className="my-auto text-pink-300">
          <button className=" hover:text-purple-200" onClick={onClickPrevious}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fill-rule="evenodd"
                d="M4.72 9.47a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06L6.31 10l3.72-3.72a.75.75 0 1 0-1.06-1.06L4.72 9.47Zm9.25-4.25L9.72 9.47a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06L11.31 10l3.72-3.72a.75.75 0 0 0-1.06-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button onClick={onClickNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fill-rule="evenodd"
                d="M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10 9.97 6.28a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div> */}
        <div className="equalizer hover:opacity-65">
          <button onClick={onClickEqualizer}>
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
          </button>
        </div>
      </div>
      {/* <div className="flex text-center">
        <span>{musicList[index].FileName}</span>
      </div> */}
    </div>
  );
}
