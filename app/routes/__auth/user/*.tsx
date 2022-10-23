import { UserProfile } from "@clerk/remix";
import { Link } from "@remix-run/react";
// import UserNav from "~/components/UserNav";

const UserPage = () => (
  <div className="flex flex-col">
    <div className="flex-none h-5 justify-start content-center">
        {/* <UserNav/> */}
        <Link to="/">Return Home</Link>
    </div>
    <div className="flex-1 justify-start">
      <UserProfile
        path="/user"
        routing="path"
        // only="account"
        appearance={{
          elements: {
            rootBox: "self-top sm:p-10",
            // navbar: "hidden",
            // navbarMobileMenuRow: "hidden",
            // profilePage__security: "hidden",
            // card: "rounded-none filter-none",
            scrollBox: "",
            pageScrollBox: "",
          },
        }}
      />
    </div>
  </div>
);

export default UserPage;
