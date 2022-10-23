import { useAuth } from "@clerk/remix";
// import { redirect } from "@remix-run/node";
import { Link } from "@remix-run/react";
// import { redirect } from "@remix-run/node"


export default function SignOutPage() {
  const { signOut } = useAuth();
  signOut();
  // return redirect("/")
  return (
    <div>
    <Link to="/">Signed out click here to return</Link>
    </div>
  )
}