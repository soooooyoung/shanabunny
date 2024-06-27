import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "../atoms/Logo";
import MobileMenu from "./MobileMenu";
import { headerData } from "@/shared/data/global.data";
import { SignupMenu } from "./SignupMenu";
import { useEffect, useState } from "react";
import pencil from "@/../public/icons/pencil.svg";
interface Props {
  auth?: boolean;
}

export default function Header({ auth = false }: Props) {
  const { links, actions, isSticky, position } = headerData;
  const pathname = usePathname();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    setIsSignedIn(auth);
  }, [auth, isSignedIn, setIsSignedIn]);

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-1">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center justify-center">
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
          {isSignedIn ? (
            <ul className="flex-1 flex justify-end items-center">
              {!pathname.includes("write") && (
                <li>
                  <Link
                    className="font-medium text-sm text-indigo-300  hover:text-pink-300 whitespace-nowrap transition duration-150 ease-in-out"
                    href="/write"
                  >
                    <Image src={pencil} alt="write" width={16} />
                  </Link>
                </li>
              )}
            </ul>
          ) : (
            <SignupMenu />
          )}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
