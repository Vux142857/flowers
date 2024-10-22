import Button from "../common/Button";
import InputText from "../common/Input";

const SignIn = () => {
  return (
    <div className="flex flex-col gap-4 items-start justify-between w-full">
      <h6 className="text-mobile-heading-6 lg:text-heading-6">Use your email to sign up or log in</h6>
      <InputText value="" setValue={() => { }} placeholder="example@gmail.com" isFullWidth={true} />
      <InputText value="" setValue={() => { }} placeholder="Password" isFullWidth={true} isPassword={true} />
      <Button label="Sign in" isFull={true} />
    </div>
  );
}

export default SignIn;