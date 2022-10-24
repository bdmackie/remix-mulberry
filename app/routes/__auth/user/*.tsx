import { UserProfile } from "@clerk/remix";
import Breadcrumbs from "~/components/Breadcrumbs"
// import UserNav from "~/components/UserNav";

const UserPage = () => (
  <div className="flex flex-col">
    <div className="flex-shrink-0 m-4 h-5 justify-start content-center">
        <Breadcrumbs items={[
          {
            name: "Account",
            to: "/user",
            selected: true
          }
        ]}/>
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
