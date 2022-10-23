// import { SignIn } from '@clerk/remix'
import type { MetaFunction } from "@remix-run/node"

import { metaInfo, genMeta } from '~/meta';

export const meta: MetaFunction = genMeta('Home');
export const handle = { screenName: "Dashboard" };

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to {metaInfo.AppTitle}</h1>
      <p>{metaInfo.AppDescription}</p>
    </div>
  );
}
