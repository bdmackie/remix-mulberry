// import { SignIn } from '@clerk/remix'
import type { MetaFunction } from "@remix-run/node";
import Breadcrumbs from "~/components/Breadcrumbs";

import { genMeta } from "~/meta";

export const meta: MetaFunction = genMeta("Home");

export default function Index() {
  return (
    <div className="flex flex-col">
      <div className="flex-shrink-0 m-4 h-5 justify-start content-center">
        <Breadcrumbs
          items={[
            {
              name: "Other",
              to: "/other",
              selected: true,
            },
          ]}
        />
      </div>
      <div className="flex-1 justify-start m-4">
        <h1>Testing a standalone page</h1>
      </div>
    </div>
  );
}
