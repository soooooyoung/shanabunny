// Header data
import { HeaderProps } from "../types";
import { Bars2Icon } from "@heroicons/react/24/outline";

export const headerData: HeaderProps = {
  links: [
    // {
    //   label: "",
    //   icon: Bars2Icon,
    //   links: [
    //     {
    //       label: "About",
    //       href: "/about",
    //     },
    //     {
    //       label: "Blog",
    //       href: "/blog",
    //     },
    //   ],
    // },
    {
      label: "BLOG",
      icon: "",
      href: "/blog",
    },
    {
      label: "ABOUT",
      icon: "",
      href: "/about",
    },
  ],
  actions: [
    {
      text: "GitHub",
      href: "https://github.com/soooooyoung",
      targetBlank: true,
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: "right",
};
