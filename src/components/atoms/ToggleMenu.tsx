"use client";

import { ToggleMenuProps } from "../../shared/types";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";

const ToggleMenu = ({
  handleToggleMenuOnClick,
  isToggleMenuOpen,
}: ToggleMenuProps) => (
  <button
    type="button"
    className="ml-1.5 inline-flex items-center rounded-lg p-2.5  text-rose-200 hover:text-rose-300 focus:outline-none  dark:text-gray-400 dark:hover:bg-gray-800 "
    aria-label="Toggle Menu"
    onClick={handleToggleMenuOnClick}
  >
    {isToggleMenuOpen ? (
      <XMarkIcon className="size-8" />
    ) : (
      <Bars2Icon className="size-8" />
    )}
  </button>
);

export default ToggleMenu;
