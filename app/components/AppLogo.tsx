import { Link } from "react-router-dom";
import { metaInfo } from "~/meta";

export function AppLogo() {
  return (
    <Link to="/" className="p-0 m-0">
      <img
        className="h-8 w-8"
        src={metaInfo.AppLogoUrl}
        alt={metaInfo.CompanyName}
      />
    </Link>
  );
}