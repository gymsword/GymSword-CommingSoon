import React, { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  toast,
  ToastContainer,
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { supabase } from "../supabase";

export default function Login() {

  const navigate =
    useNavigate();

  const [loading,
    setLoading] =
    useState(false);

  const [showPassword,
    setShowPassword] =
    useState(false);

  const [formData,
    setFormData] =
    useState({
      email: "",
      password: "",
    });

  // LOGIN
  const handleLogin =
    async (e) => {

      e.preventDefault();

      setLoading(true);

      const {
        data,
        error,
      } =
        await supabase.auth.signInWithPassword({
          email:
            formData.email,

          password:
            formData.password,
        });

      setLoading(false);

      // ERROR
      if (error) {

        toast.error(
          "Invalid Email or Password"
        );

        return;
      }

      // EMAIL CHECK
      if (
        !data.user
          .email_confirmed_at
      ) {

        toast.warning(
          "Please verify your email first 📩"
        );

        await supabase.auth.signOut();

        return;
      }

      // SAVE USER
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: data.user.id,

          email:
            data.user.email,

          name:
            data.user
              .user_metadata
              ?.name ||
            "User",
        })
      );

      // UPDATE NAVBAR
      window.dispatchEvent(
        new Event("storage")
      );

      toast.success(
        "Login Successful"
      );

      setTimeout(() => {

        navigate("/");

      }, 1500);
    };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4 py-6 overflow-hidden relative">

      {/* TOAST */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="dark"
      />

      {/* BG GLOW */}
      <div className="absolute top-[-120px] left-[-80px] w-[280px] h-[280px] bg-black/5 blur-[100px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-80px] w-[280px] h-[280px] bg-gray-400/10 blur-[100px] rounded-full"></div>

      {/* MAIN */}
      <div className="relative w-full max-w-4xl min-h-[560px] rounded-[32px] overflow-hidden border border-black/5 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)] grid lg:grid-cols-2">

        {/* LEFT */}
        <div className="hidden lg:flex flex-col justify-between p-8 bg-[#111111] border-r border-black/10">

          <div>

            {/* LOGO */}
            <div className="relative w-16 h-16 rounded-3xl overflow-hidden border border-black/10 shadow-lg bg-white">

              <img
                src="/logo1.jpg"
                alt="Gym Sword Logo"
                className="w-full h-full object-cover"
              />

            </div>

            {/* HEADING */}
            <h1 className="text-4xl font-black text-white leading-tight mt-8 tracking-[-2px]">

              Welcome <br />
              Back To <br />
              Gym Sword

            </h1>

            <p className="text-gray-400 mt-5 text-sm leading-relaxed max-w-sm">

              Login to access your premium
              fitness collections, orders,
              wishlist, exclusive drops,
              rewards, and member benefits.

            </p>

          </div>

          {/* FEATURES */}
          <div className="space-y-3">

            <div className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-2xl p-3">

              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">

                ⚡

              </div>

              <div>

                <h3 className="text-white text-sm font-semibold">
                  Fast Checkout
                </h3>

                <p className="text-gray-400 text-xs">
                  Instant secure payments
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-2xl p-3">

              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">

                🎁

              </div>

              <div>

                <h3 className="text-white text-sm font-semibold">
                  Premium Rewards
                </h3>

                <p className="text-gray-400 text-xs">
                  Unlock member-only offers
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-2xl p-3">

              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">

                🔒

              </div>

              <div>

                <h3 className="text-white text-sm font-semibold">
                  Secure Login
                </h3>

                <p className="text-gray-400 text-xs">
                  Protected with Supabase
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-center p-5">

          <div className="relative w-full max-w-[340px]">

            {/* PHONE */}
            <div className="bg-black border-[8px] border-[#1a1a1a] rounded-[35px] shadow-[0_25px_80px_rgba(0,0,0,0.25)] overflow-hidden">

              {/* TOP */}
              <div className="h-7 bg-black flex items-center justify-center">

                <div className="w-24 h-2 rounded-full bg-zinc-700"></div>

              </div>

              {/* SCREEN */}
              <div className="bg-[#0d0d0d] px-5 py-6 h-[600px] overflow-y-auto">

                {/* LOGO */}
                <div className="flex justify-center mb-4">

                  <div className="relative w-16 h-16 rounded-3xl overflow-hidden border border-black/10 shadow-lg bg-white">

                    <img
                      src="/logo1.jpg"
                      alt="Gym Sword Logo"
                      className="w-full h-full object-cover"
                    />

                  </div>

                </div>

                {/* HEADING */}
                <h2 className="text-2xl font-bold text-white text-center">

                  Welcome Back

                </h2>

                <p className="text-gray-500 text-center text-xs mt-2">

                  Login to continue 🚀

                </p>

                {/* FORM */}
                <form
                  className="space-y-4 mt-8"
                  onSubmit={handleLogin}
                >

                  {/* EMAIL */}
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email:
                          e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-2xl bg-[#171717] border border-white/5 text-white text-sm placeholder-gray-500 outline-none focus:border-white/20 transition-all duration-300"
                  />

                  {/* PASSWORD */}
                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Password"
                    required
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        password:
                          e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-2xl bg-[#171717] border border-white/5 text-white text-sm placeholder-gray-500 outline-none focus:border-white/20 transition-all duration-300"
                  />

                  {/* OPTIONS */}
                  <div className="flex items-center justify-between text-xs text-gray-500">

                    <label className="flex items-center gap-2">

                      <input
                        type="checkbox"
                        onChange={() =>
                          setShowPassword(
                            !showPassword
                          )
                        }
                      />

                      Show Password

                    </label>

                    <p className="text-gray-300 cursor-pointer hover:underline">

                      Forgot Password?

                    </p>

                  </div>

                  {/* BUTTON */}
                  <button className="w-full py-3 rounded-2xl bg-white text-black text-sm font-bold hover:bg-gray-200 transition-all duration-300">

                    {loading
                      ? "Signing In..."
                      : "Login"}

                  </button>

                </form>

                {/* DIVIDER */}
                <div className="flex items-center gap-3 my-5">

                  <div className="flex-1 h-[1px] bg-white/10"></div>

                  <span className="text-gray-500 text-[10px]">

                    OR CONTINUE

                  </span>

                  <div className="flex-1 h-[1px] bg-white/10"></div>

                </div>

                {/* GOOGLE */}
                <button className="w-full py-3 rounded-2xl border border-white/10 bg-[#171717] text-white text-sm font-semibold hover:bg-[#222] transition-all duration-300">

                  Continue with Google

                </button>

                {/* REGISTER */}
                <p className="text-center text-gray-400 mt-6 text-xs">

                  Don’t have an account?{" "}

                  <Link
                    to="/register"
                    className="text-gray-300 hover:underline font-semibold"
                  >
                    Register
                  </Link>

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}