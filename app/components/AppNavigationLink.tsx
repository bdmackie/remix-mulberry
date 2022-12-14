import { Link } from "@remix-run/react";
import { Disclosure } from "@headlessui/react";
import type { INavigationItem } from "~/meta";
import { classNames } from "../util";

export function AppNavigationLink({ name, to, selected }: INavigationItem) {
  return (
    <Link
      to={to}
      className={classNames(
        selected
          ? "bg-gray-900 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white",
        "px-3 py-2 rounded-md text-sm font-medium"
      )}
      aria-current={selected ? "page" : undefined}
    >
      {name}
    </Link>
  );
}

export function MobileAppNavigationLink({ name, to, selected }: INavigationItem) {
  return (
    <Disclosure.Button
      as="a"
      href={to}
      className={classNames(
        selected
          ? "bg-gray-900 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white",
        "block px-3 py-2 rounded-md text-base font-medium"
      )}
      aria-current={selected ? "page" : undefined}
    >
      {name}
    </Disclosure.Button>
  );
}
