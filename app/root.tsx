import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { genMeta } from "./meta";
import styles from "~/styles/app.css";

export const meta: MetaFunction = genMeta("");
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function App() {
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
