import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { LoaderFunction } from "@remix-run/node";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { genMeta } from "./meta";
import styles from "~/styles/app.css";
import { ClerkApp } from "@clerk/remix";
import { ClerkCatchBoundary } from "@clerk/remix";

export const meta: MetaFunction = genMeta("");
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const loader: LoaderFunction = (args) => rootAuthLoader(args);

function App() {
  return (
    <html lang="en" className="h-full b-gray-100">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <div className="min-h-full">
          <Outlet/>
        </div>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
export default ClerkApp(App);

// define boundary
export const CatchBoundary = ClerkCatchBoundary();