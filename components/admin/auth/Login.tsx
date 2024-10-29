'use client';
import { useState } from "react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { signIn } from 'next-auth/react'

const Login = () => {
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
      window.location.href = '/admin/dashboard'
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
    <div className="p-20 gap-6 h-2/4 lg:w-96 w-full bg-white flex flex-col items-center justify-center rounded-lg shadow-2xl">
      <h2 className="text-center font-semibold text-4xl">Login</h2>
      <Input
        type="text"
        className='p-4'
        placeholder="Email"
        value={email}
        name='email'
        onChange={handleChange}
        onKeyDown={handleEnter}
        required
      />
      <Input
        type="password"
        className='p-4'
        placeholder="Password"
        value={password}
        name='password'
        onChange={handleChange}
        onKeyDown={handleEnter}
        required
      />
      <span className="text-sm text-red-500">{error}</span>
      <form onSubmit={handleSubmit} className="w-full">
        <Button type="submit" className='p-4 w-full bg-black text-white rounded-lg'>Login</Button>
      </form>
    </div>
  );
}

export default Login;
