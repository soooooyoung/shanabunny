import Logo from "@/components/atoms/Logo";

export default function Footer() {
  return (
    <footer className="bg-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-4 order-1 lg:order-none">
            <div className="h-full flex flex-col sm:flex-row lg:flex-col justify-between">
              <div className="mb-4 sm:mb-0">
                <div className="mb-4">
                  <Logo />
                </div>
                <div className="text-sm text-pink-300">
                  © shanabunny.com{" "}
                  <span className="text-indigo-300">
                    - All rights reserved.
                  </span>
                </div>
              </div>
              {/* Social links */}
              <ul className="flex">
                <li className="ml-2">
                  <a
                    className="flex justify-center items-center text-pink-300 hover:text-cyan-400 transition duration-150 ease-in-out"
                    href="https://github.com/soooooyoung"
                    aria-label="Github"
                    target="_blank"
                  >
                    <svg
                      className="w-8 h-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-indigo-200 font-medium mb-2">
              Products
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-slate-400 hover:text-pink-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-indigo-200 font-medium mb-2">
              Company
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-slate-400 hover:text-pink-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  About us
                </a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-indigo-200 font-medium mb-2">
              Resources
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-slate-400 hover:text-pink-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-indigo-200 font-medium mb-2">Legals</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-slate-400 hover:text-pink-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:text-pink-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
