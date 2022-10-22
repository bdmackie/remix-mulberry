// import { SignIn } from '@clerk/remix'
import { Outlet, useMatches } from "@remix-run/react";
import type { RouteMatch } from "@remix-run/react";
import { AppHeader } from "~/components/AppHeader";
import { ScreenHeader } from "~/components/ScreenHeader";
import { ScreenBody } from "~/components/ScreenBody";

function getScreenName(matches: RouteMatch[]): string {
  let match = matches.find((match) => match.handle?.screenName);
  return match ? (match.handle?.screenName as string) : "";
}

export default function Index() {
  let screenName = getScreenName(useMatches());
  return (
    <>
      <AppHeader selectedScreenName={screenName} />
      <ScreenHeader title={screenName} />
      <ScreenBody>
        <Outlet />
      </ScreenBody>
    </>
  );
}
