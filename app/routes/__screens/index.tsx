// import { SignIn } from '@clerk/remix'
import type { MetaFunction } from "@remix-run/node"

import { metaInfo, genMeta } from '~/meta';

export const meta: MetaFunction = genMeta('Home');
export const handle = { screenName: "Dashboard" };

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to {metaInfo.APP_TITLE}</h1>
      <p>{metaInfo.APP_DESCRIPTION}</p>
    </div>
  );
}
