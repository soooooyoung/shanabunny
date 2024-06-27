import Link from "next/link";

export function SignupMenu() {
  return (
    <ul className="flex-1 flex justify-end items-center">
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
          <span className="relative inline-flex items-center">Sign up ♥</span>
        </Link>
      </li>
    </ul>
  );
}
