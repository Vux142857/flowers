import Button, { ButtonType } from "../common/Button";
import Google from "../icons/Google";

const SignInUpWithGoogle = () => {
  return (
    <div className="flex flex-row">
      <Button label="Sign in with Google" isFull={true} isSubIcon={<Google />} type={ButtonType.Secondary} />
    </div>
  );
}

export default SignInUpWithGoogle;