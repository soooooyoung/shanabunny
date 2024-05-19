// Header data
import { HeaderProps } from "../types";

export const headerData: HeaderProps = {
  links: [
    {
      label: "ABOUT",
      icon: "",
      href: "/about",
    },
    {
      label: "PROJECTS",
      icon: "",
      href: "/projects",
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
