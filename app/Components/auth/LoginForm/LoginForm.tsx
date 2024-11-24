"use client";
import { useUserContext } from "@/context/userContext";
import React from "react";

function LoginForm() {
  const { loginUser, userState, handlerUserInput } = useUserContext();
  const { email, password } = userState;
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#6A11CB] via-[#2575FC] to-[#00C6FB]">
      <form className="relative flex flex-col items-center p-10 rounded-xl bg-white shadow-xl w-full max-w-md">
        <h1 className="mb-6 text-2xl font-bold text-gray-800 text-center">
          Welcome Back!
        </h1>
        <p className="mb-6 text-gray-600 text-center">
          Login to your account to access your dashboard.{" "}
          <a
            href="/register"
            className="font-bold text-[#6A11CB] hover:text-[#2575FC] transition-all duration-300"
          >
            Create an account
          </a>{" "}
          if you don’t have one.
        </p>
        <div className="w-full">
          <label htmlFor="email" className="block mb-2 text-gray-700">
            Email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => handlerUserInput("email")(e)}
            name="email"
            className="w-full px-4 py-3 mb-4 text-gray-700 border rounded-lg focus:ring-2 focus:ring-[#6A11CB] focus:outline-none"
            placeholder="johndoe@gmail.com"
          />
        </div>
        <div className="w-full relative">
          <label htmlFor="password" className="block mb-2 text-gray-700">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => handlerUserInput("password")(e)}
            name="password"
            className="w-full px-4 py-3 mb-2 text-gray-700 border rounded-lg focus:ring-2 focus:ring-[#6A11CB] focus:outline-none"
            placeholder="***************"
          />
          <button
            type="button"
            className="absolute top-9 right-4 text-gray-500 hover:text-[#6A11CB]"
            onClick={togglePassword}
          >
            {showPassword ? (
              <i className="fas fa-eye-slash"></i>
            ) : (
              <i className="fas fa-eye"></i>
            )}
          </button>
        </div>
        <div className="w-full flex justify-end mb-6">
          <a
            href="/forgot-password"
            className="text-sm font-bold text-[#6A11CB] hover:text-[#2575FC] transition-all duration-300"
          >
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          disabled={!email || !password}
          onClick={loginUser}
          className="w-full py-3 font-semibold text-white bg-[#6A11CB] rounded-lg hover:bg-[#2575FC] transition-colors"
        >
          Login Now
        </button>
      </form>
    </div>
  );
}

export default LoginForm;

   
