import { BellIcon } from "@heroicons/react/24/outline";
import { classNames } from "~/util"

type INavigationButtonProps = {
  className? : string
}

export function NotificationButton({className = ""} : INavigationButtonProps) {
  return (
    <button
      type="button"
      className={classNames("rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800", className)}
    >
      <span className="sr-only">View notifications</span>
      <BellIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}
