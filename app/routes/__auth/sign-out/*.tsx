import { useAuth } from "@clerk/remix";
// import { redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
// import { redirect } from "@remix-run/node"

export default function SignOutPage() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  signOut();
  // return redirect("/")
  return (
    <div className="flex flex-col">
      <div className="flex flex-shrink-0 m-8 h-5 justify-center content-center">
        <p>You have signed out! Click below to return home.</p>
      </div>
      <div className="flex flex-1 m-4 justify-center content-center">
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={() => navigate("/")}
        >
          Home
        </button>
      </div>
    </div>
  );
}
