import { SignInButton } from "@clerk/nextjs";

const Guest = () => {
  return (
    <div className="guest">
      <h1>Welcome</h1>
      <p>please sign in to manage your transations</p>
      <SignInButton />
    </div>
  );
};

export default Guest;
