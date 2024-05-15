import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../atoms/Logo";
import MobileMenu from "./MobileMenu";
import { headerData } from "@/shared/data/global.data";

export default function Header() {
  const { links, actions, isSticky, position } = headerData;
  const pathname = usePathname();
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-1">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow justify-center">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center">
              {links &&
                links.map(({ label, href, icon: isContext, links }, index) => (
                  <li key={`item-link-${index}`}>
                    <Link
                      className={`font-medium text-sm ${
                        pathname == href ? "text-white" : "text-slate-900"
                      }  hover:text-purple-300 mx-4 lg:mx-5 transition duration-150 ease-in-out`}
                      href={href as string}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>

          {/* Desktop sign in links */}
          {/* <ul className="flex-1 flex justify-end items-center">
            <li>
              <Link
                className="font-medium text-sm text-indigo-300  hover:text-pink-300 whitespace-nowrap transition duration-150 ease-in-out"
                href="/signin"
              >
                Sign in
              </Link>
            </li>
            <li className="ml-6">
              <Link
                className="btn-sm text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.pink.300),_theme(colors.rose.300))_padding-box,_conic-gradient(theme(colors.rose.200),_theme(colors.pink.300)_25%,_theme(colors.purple.200)_75%,_theme(colors.rose.200)_100%)_border-box] relative before:absolute before:inset-0 before:bg-pink-300/30 before:rounded-full before:pointer-events-none hover:opacity-80"
                href="/signup"
              >
                <span className="relative inline-flex items-center">
                  Sign up ♥
                </span>
              </Link>
            </li>
          </ul> */}

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
