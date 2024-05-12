// Header data
import { HeaderProps } from "../types";
import { Bars2Icon } from "@heroicons/react/24/outline";

export const headerData: HeaderProps = {
  links: [
   {
      label: "ABOUT",
      icon: "",
      href: "/about",
    },
    {
      label: "BLOG",
      icon: "",
      href: "/blog",
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
