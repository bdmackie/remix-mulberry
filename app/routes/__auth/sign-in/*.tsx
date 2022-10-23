import { SignIn } from "@clerk/remix";

const SignInPage = () => (
  <div className="min-h-screen flex justify-center content-center">
    <SignIn
      signUpUrl="/sign-up"
      afterSignInUrl="/"
      appearance={{
        elements: {
          rootBox:
            "self-center"
          },
      }}
    />
  </div>
);

export default SignInPage;
