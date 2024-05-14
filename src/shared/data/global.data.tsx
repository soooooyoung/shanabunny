// Header data
import { HeaderProps, BlogPost } from "../types";

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
