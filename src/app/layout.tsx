import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/widgets/Header";
import { Inter as CustomFont } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const customFont = CustomFont({
  subsets: ["latin"],
  variable: "--font-custom",
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
      className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
