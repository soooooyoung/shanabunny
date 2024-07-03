"use client";

import DOMPurify from "dompurify";
interface Props {
  content?: string;
  className?: string;
}

export const ContentReader = ({ content, className }: Props) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(content ?? ""),
      }}
    />
  );
};
