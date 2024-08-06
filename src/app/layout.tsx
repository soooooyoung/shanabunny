import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Inter as CustomFont } from "next/font/google";
import "@/assets/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const customFont = CustomFont({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "shanabunny",
  description: "shanabunny's blog",
};
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.className} font-inter antialiased tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
