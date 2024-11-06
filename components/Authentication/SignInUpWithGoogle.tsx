import Button, { ButtonType } from "../common/Button";
import WIPPopup from "../common/WIPPopup";
import Google from "../icons/Google";

const SignInUpWithGoogle = () => {
  return (
    <div className="flex flex-row">
      <WIPPopup isFull={true} gate={<Button label="Sign in with Google" isFull={true} isSubIcon={<Google />} type={ButtonType.Secondary} />}></WIPPopup>
    </div>
  );
}

export default SignInUpWithGoogle;