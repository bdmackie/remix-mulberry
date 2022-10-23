import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useUser, UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/remix";
import styles from "~/styles/app.css";
import { AppLogo } from "./AppLogo";
import {
  AppNavigationLink,
  MobileAppNavigationLink,
} from "./AppNavigationLink";
import { appNavigation, userNavigation } from "~/meta";
import type { INavigationItem, IUserProfile } from "~/meta";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

type IAppHeaderProps = {
  selectedScreenName: string;
};

function compareScreenName(x: string, y: string) {
  return x.toLowerCase() === y.toLowerCase();
}

type IAppMobileProps = {
  open: boolean;
};

function AppMobileMenu({ open }: IAppMobileProps) {
  return (
    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
      <span className="sr-only">Open main menu</span>
      {open ? (
        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
      )}
    </Disclosure.Button>
  );
}

function MobileUserProfile({ name, imageUrl, email }: IUserProfile) {
  return (
    <>
      <div className="flex-shrink-0">
        <img className="h-10 w-10 rounded-full" src={imageUrl} alt="" />
      </div>
      <div className="ml-3">
        <div className="text-base font-medium leading-none text-white">
          {name}
        </div>
        <div className="text-sm font-medium leading-none text-gray-400">
          {email}
        </div>
      </div>
    </>
  );
}

function MobileUserNavigationLink({ name, to }: INavigationItem) {
  return (
    <Disclosure.Button
      as="a"
      href={to}
      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
    >
      {name}
    </Disclosure.Button>
  );
}

export function AppHeader({
  selectedScreenName = "dashboard",
}: IAppHeaderProps) {
  const { user } = useUser();
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <AppLogo />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {appNavigation.map((item: INavigationItem) => (
                      <AppNavigationLink
                        key={item.name}
                        {...item}
                        selected={compareScreenName(
                          item.name,
                          selectedScreenName
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6 text-white">
                  <SignedOut>
                    <SignInButton/>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <AppMobileMenu open={open} />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {appNavigation.map((item) => (
                <MobileAppNavigationLink
                  key={item.name}
                  {...item}
                  selected={compareScreenName(item.name, selectedScreenName)}
                />
              ))}
            </div>
            <div className="border-t border-gray-700 pt-4 pb-3">
              <div className="flex items-center px-5">
                <MobileUserProfile
                  name={user?.fullName as string}
                  imageUrl={user?.profileImageUrl as string}
                  email={user?.primaryEmailAddress?.toString() as string}
                />
              </div>
              <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                  <MobileUserNavigationLink key={item.name} {...item} />
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
