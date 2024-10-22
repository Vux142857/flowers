import { useState } from "react";
import Button from "../common/Button";
import InputText from "../common/Input";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");

  const handleSignUp = () => {
    console.log({
      username,
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      address,
    });
  };

  return (
    <div className="flex flex-col gap-4 items-start justify-between w-full">
      <h6 className="text-mobile-heading-6 lg:text-heading-6">Sign up with your email</h6>
      <InputText 
        value={username} 
        setValue={setUsername} 
        placeholder="Username" 
        isFullWidth={true} 
      />
      
      <InputText 
        value={email} 
        setValue={setEmail} 
        placeholder="example@gmail.com" 
        isFullWidth={true} 
      />
      
      <InputText 
        value={password} 
        setValue={setPassword} 
        placeholder="Password" 
        isFullWidth={true} 
        isPassword={true} 
      />
      
      <InputText 
        value={confirmPassword} 
        setValue={setConfirmPassword} 
        placeholder="Confirm Password" 
        isFullWidth={true} 
        isPassword={true} 
      />

      <InputText 
        value={firstName} 
        setValue={setFirstName} 
        placeholder="First Name (optional)" 
        isFullWidth={true} 
      />

      <InputText 
        value={lastName} 
        setValue={setLastName} 
        placeholder="Last Name (optional)" 
        isFullWidth={true} 
      />

      <InputText 
        value={address} 
        setValue={setAddress} 
        placeholder="Address (optional)" 
        isFullWidth={true} 
      />

      <Button label="Sign up" isFull={true} onSubmit={handleSignUp} />
    </div>
  );
}

export default SignUp;
