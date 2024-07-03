import { ReactElement } from "react";

type Link = {
  label?: string;
  href?: string;
  ariaLabel?: string;
  icon?: Icon;
};
type MenuLink = Link & {
  links?: Array<Link>;
};
type HeaderProps = {
  links?: Array<MenuLink>;
  actions?: Array<CallToActionType>;
  // actions?: Array<ActionLink>;
  isSticky?: boolean;
  showToggleTheme?: boolean;
  showRssFeed?: boolean;
  position?: "center" | "right" | "left";
};

type BlogPost = {
  title: string;
  content: string;
};
type  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  // extends React's HTMLAttributes
  align?: string;
}
