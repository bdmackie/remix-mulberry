import { UserProfile } from "@clerk/remix";
import UserNav from "~/components/UserNav";

const UserPage = () => (
  <div className="flex">
    {/* <div className="flex-none sm:w-40">
        <UserNav/>
    </div> */}
    {/* <div className="min-h-screen flex-1 flex justify-center content-center"> */}
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
    {/* </div> */}
  </div>
);

export default UserPage;
