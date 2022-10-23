// import { SignIn } from '@clerk/remix'
import type { MetaFunction } from "@remix-run/node"

import { genMeta } from '~/meta';

export const meta: MetaFunction = genMeta('Home');

export default function Index() {
  return (
    <div>
      <h1>This is another page!</h1>
    </div>
  );
}