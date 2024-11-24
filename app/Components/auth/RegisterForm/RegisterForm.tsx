"use client";
import { useUserContext } from "@/context/userContext";
import React from "react";

function RegisterForm() {
  const { registerUser, userState, handlerUserInput } = useUserContext();
  const { name, email, password } = userState;
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#6A11CB] via-[#2575FC] to-[#00C6FB]">
      <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-[400px]">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Create Account
        </h1>
        <p className="text-sm text-center text-gray-500 mb-6">
          Join us today. Already a member?{" "}
          <a
            href="/login"
            className="text-[#6A11CB] font-medium hover:underline"
          >
            Login here
          </a>
        </p>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="flex items-center text-gray-600 text-sm mb-2"
          >
            <i className="fas fa-user text-gray-500 mr-2"></i> Full Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => handlerUserInput("name")(e)}
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A11CB]"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="flex items-center text-gray-600 text-sm mb-2"
          >
            <i className="fas fa-envelope text-gray-500 mr-2"></i> Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => handlerUserInput("email")(e)}
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A11CB]"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4 relative">
          <label
            htmlFor="password"
            className="flex items-center text-gray-600 text-sm mb-2"
          >
            <i className="fas fa-lock text-gray-500 mr-2"></i> Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => handlerUserInput("password")(e)}
            name="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A11CB]"
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? (
              <i className="fas fa-eye-slash"></i>
            ) : (
              <i className="fas fa-eye"></i>
            )}
          </button>
        </div>

        <button
          type="submit"
          disabled={!name || !email || !password}
          onClick={registerUser}
          className="w-full bg-[#6A11CB] text-white py-2 rounded-lg font-medium hover:bg-[#4b0dbb] transition-colors"
        >
          Sign Up
        </button>
        <p className="text-xs text-center text-gray-400 mt-3">
          By signing up, you agree to our{" "}
          <a
            href="/terms"
            className="text-[#6A11CB] font-medium hover:underline"
          >
            Terms
          </a>{" "}
          and{" "}
          <a
            href="/privacy"
            className="text-[#6A11CB] font-medium hover:underline"
          >
            Privacy Policy
          </a>
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
