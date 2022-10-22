import { Link } from "@remix-run/react";
import { classNames } from "../util";

export type INavigationItem = {
  name: string,
  to: string,
  selected?: boolean
}

export type INavigationItemProps = {
  item: INavigationItem
}

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
