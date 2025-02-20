import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-6">
      {/* Back Button */}
      <div className="w-full max-w-sm">
        <button className="p-2 rounded-full bg-gray-200">←</button>
      </div>

      {/* Welcome Text */}
      <h1 className="text-2xl font-bold mt-4">Welcome Back!</h1>

      {/* Social Login Buttons */}
      <div className="w-full max-w-sm mt-6 space-y-3">
        <button className="w-full flex items-center justify-center space-x-3 bg-indigo-500 text-white py-3 rounded-full text-lg shadow-md">
            <img src="fbicon.png" alt="Facebook" className="w-5 h-5" />
          <span>CONTINUE WITH FACEBOOK</span>
        </button>

        <button className="w-full flex items-center justify-center space-x-3 bg-white border py-3 rounded-full text-lg shadow-md">
          <span>🔴</span> {/* Replace with Google Icon */}
          <span>CONTINUE WITH GOOGLE</span>
        </button>
      </div>

      {/* Separator */}
      <p className="text-gray-400 text-sm mt-6">OR LOG IN WITH EMAIL</p>

      {/* Login Form */}
      <form className="w-full max-w-sm mt-4 space-y-4">
        <input
          type="email"
          placeholder="Email address"
          className="w-full p-4 bg-gray-200 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 bg-gray-200 rounded-lg"
        />
        <button className="w-full py-3 bg-indigo-400 text-white rounded-full text-lg shadow-md">
          LOG IN
        </button>
      </form>

      {/* Forgot Password */}
      <p className="text-gray-400 mt-2 text-sm">Forgot Password?</p>

      {/* Sign Up Link */}
      <p className="mt-4 text-sm text-gray-600">
        DON'T HAVE AN ACCOUNT?{" "}
        <Link to="/signup" className="text-indigo-500 font-bold">SIGN UP</Link>
      </p>
    </div>
  );
};

export default SignIn;
