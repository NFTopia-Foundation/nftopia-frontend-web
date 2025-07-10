import React from "react";
import Link from "next/link";

const LoginBox = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/d7/b9/0c/d7b90cc80898e8823455a127945719af.jpg')",
      }}
    >
      <div className="mt-10 w-[420px] bg-opacity-20 border border-white/20 backdrop-blur-lg shadow-lg text-white rounded-lg p-8">
        <h1 className="text-2xl text-center font-bold">Login</h1>
        <form action="" className="space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Username"
              required
              className="w-full h-12 bg-transparent border border-white/20 rounded-full text-white px-4 pr-12 placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <i className="bx bxs-user absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full h-12 bg-transparent border border-white/20 rounded-full text-white px-4 pr-12 placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <i className="bx bxs-lock-alt absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
          </div>
          <div className="flex justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="accent-white mr-2" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full h-12 bg-white text-gray-800 font-semibold rounded-full shadow hover:shadow-lg focus:outline-none"
          >
            Login
          </button>
          <div className="text-center text-sm mt-4">
            <p>
              Don&apos;t have an account?{" "}
              <Link href="/auth/register" className="font-bold hover:underline">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginBox;
