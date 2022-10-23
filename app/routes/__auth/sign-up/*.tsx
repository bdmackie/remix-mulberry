import { SignUp } from "@clerk/remix";

const SignUpPage = () => (
  <div className="min-h-screen flex justify-center content-center">
    <SignUp
      path="/sign-up"
      routing="path"
      signInUrl="/sign-in"
      afterSignUpUrl="/"
      appearance={{
        elements: {
          rootBox:
            "self-center"
          },
      }}
    />
  </div>
);

export default SignUpPage;
