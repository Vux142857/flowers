'use client';
import { useState } from "react";
import Button from "../common/Button";
import InputText from "../common/Input";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
    } else {
      setError("");
      const res = await signIn('Sign In', {
        redirect: false,
        email,
        password,
      })
      if (res?.error) {
        setError('Invalid email or password')
        return
      }
      window.location.href = '/'
    }
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!email || !password) {
        setError("Please fill in all fields");
      } else {
        setError("");
      }
    }
  }
  return (
    <div className="flex flex-col gap-4 items-start justify-between w-full">
      <h6 className="text-mobile-heading-6 lg:text-heading-6">Use your email to sign up or log in</h6>
      <InputText value={email} name='email' setValue={handleChange} placeholder="example@gmail.com" isFullWidth={true} />
      <span className="text-red-500 text-xs">{error}</span>
      <InputText value={password} name='password' setValue={handleChange} placeholder="Password" isFullWidth={true} isPassword={true} />
      <Button label="Sign in" isFull={true} onSubmit={handleSubmit} />
    </div>
  );
}

export default SignIn;