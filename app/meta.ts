import { name as appName } from "../package.json";
import type { MetaFunction } from "@remix-run/node";

const AppName: string = appName;
const AppTitle: string = "Remix Mulbery";
const AppDescription: string = "Remix demo app";
const AppLogoUrl: string =
  "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=200";
const CompanyName: string = "Acme corp";

export const metaInfo = {
  AppName,
  AppTitle,
  AppDescription,
  AppLogoUrl,
  CompanyName,
};

export function genMeta(screenName: string): MetaFunction {
  return () => {
    return {
      charset: "utf-8",
      title: `${AppTitle} - ${screenName}`,
      description: AppDescription,
      viewport: "width=device-width,initial-scale=1",
    };
  };
}

export type IUserProfile = {
  name: string;
  imageUrl: string;
  email: string;
};

export const demoUser: IUserProfile = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

export type INavigationItem = {
  name: string;
  to: string;
  selected?: boolean;
};

export const appNavigation: INavigationItem[] = [
  { name: "Dashboard", to: "/", selected: true },
  { name: "Blog", to: "/blog", selected: false },
  { name: "Other", to: "/other", selected: false },
];

export const userNavigation: INavigationItem[] = [
  { name: "Your Profile", to: "/user" },
  { name: "Settings", to: "#" },
  { name: "Sign out", to: "#" },
];
