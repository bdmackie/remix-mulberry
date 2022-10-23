// import { SignIn } from '@clerk/remix'
import type { MetaFunction } from "@remix-run/node"
import { SignedIn, SignedOut } from "@clerk/remix"

import { metaInfo, genMeta } from '~/meta';
import { Link } from "@remix-run/react";

export const meta: MetaFunction = genMeta('Home');
export const handle = { screenName: "Dashboard" };

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <p>Welcome to {metaInfo.AppTitle}</p>
      <p>&nbsp;</p>
      <SignedIn>
        <p>Please select from the above menu</p>
      </SignedIn>
      <SignedOut>
        <p>Please <Link to="/sign-in">sign in</Link> to use this application.</p>
      </SignedOut>
    </div>
  );
}
