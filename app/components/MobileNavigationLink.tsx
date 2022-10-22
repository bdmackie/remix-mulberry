import { Disclosure } from "@headlessui/react";
import { classNames } from "../util";
import type { INavigationItem } from "./AppNavigationLink";

export function MobileNavigationLink({ name, to, selected }: INavigationItem) {
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
