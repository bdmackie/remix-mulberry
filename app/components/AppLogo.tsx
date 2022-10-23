import { metaInfo } from '~/meta';

export function AppLogo() {
  return (
    <img
      className="h-8 w-8"
      src={metaInfo.AppLogoUrl}
      alt={metaInfo.CompanyName} />
  );
}
