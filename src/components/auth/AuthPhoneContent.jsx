import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { supabase } from "../../supabase";

import { toast } from "react-toastify";

export default function AuthPhoneContent() {

  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [showPassword,
    setShowPassword] =
    useState(false);

  const [acceptedTerms,
    setAcceptedTerms] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  // REGISTER
const handleRegister = async (
  e
) => {

  e.preventDefault();

  // TERMS
  if (!acceptedTerms) {

    toast.error(
      "Accept Terms & Conditions"
    );

    return;
  }

  // PASSWORD CHECK
  if (
    formData.password !==
    formData.confirmPassword
  ) {

    toast.error(
      "Passwords do not match"
    );

    return;
  }

  setLoading(true);

  // REGISTER USER
  const {
    data,
    error,
  } =
    await supabase.auth.signUp({
      email: formData.email,

      password:
        formData.password,

      options: {

        emailRedirectTo:
          "http://localhost:5173/login",

        data: {
          name:
            formData.name,

          username:
            formData.username,
        },
      },
    });

  setLoading(false);

  if (error) {

    toast.error(error.message);

    return;
  }

  // SAVE PROFILE
  if (data.user) {

    await supabase
      .from("profiles")
      .insert([
        {
          id: data.user.id,

          name:
            formData.name,

          username:
            formData.username,

          email:
            formData.email,
        },
      ]);
  }

  toast.success(
    "Verification Email Sent 🚀"
  );

  toast.info(
    "Please verify your email before login"
  );

  setTimeout(() => {

    navigate("/login");

  }, 3000);
};

  // FORGOT PASSWORD
  const handleForgotPassword =
    async () => {

      if (!formData.email) {

        toast.error(
          "Enter your email"
        );

        return;
      }

      const { error } =
        await supabase.auth.resetPasswordForEmail(
          formData.email,
          {
            redirectTo:
              "http://localhost:5173/login",
          }
        );

      if (error) {

        toast.error(error.message);

      } else {

        toast.success(
          "Reset Email Sent 🚀"
        );

      }
    };

  return (
    <div className="relative w-[340px] sm:w-[380px] min-h-[760px] rounded-[48px] border border-white/10 bg-zinc-900/95 backdrop-blur-3xl overflow-hidden shadow-[0_0_120px_rgba(0,0,0,0.9)]">

      {/* FRAME */}
      <div className="absolute inset-0 rounded-[48px] border-[8px] border-zinc-800 pointer-events-none"></div>

      {/* TOP BAR */}
      <div className="relative h-10 bg-black border-b border-white/5 flex items-center justify-center">

        <div className="w-28 h-[5px] rounded-full bg-zinc-700"></div>

      </div>

      {/* SCREEN */}
      <div className="relative px-6 py-8 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 min-h-screen">

        {/* LOGO */}
        <div className="flex flex-col items-center">

          <div className="relative w-16 h-16 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(168,85,247,0.5)] bg-gradient-to-br from-purple-500 to-indigo-600">

            <img
              src="/logo1.jpg"
              alt="logo"
              className="w-full h-full object-cover"
            />

          </div>

          <h2 className="text-3xl font-black text-white mt-6">
            Create Account
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            Start your premium journey
          </p>

        </div>

        {/* FORM */}
        <form
          className="space-y-4 mt-8"
          onSubmit={handleRegister}
        >

          <input
            type="text"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name:
                  e.target.value,
              })
            }
            className="w-full px-5 py-4 rounded-2xl bg-white/[0.06] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-purple-500"
          />

          <input
            type="text"
            placeholder="Username"
            required
            value={formData.username}
            onChange={(e) =>
              setFormData({
                ...formData,
                username:
                  e.target.value,
              })
            }
            className="w-full px-5 py-4 rounded-2xl bg-white/[0.06] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-purple-500"
          />

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
            className="w-full px-5 py-4 rounded-2xl bg-white/[0.06] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-purple-500"
          />

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
            className="w-full px-5 py-4 rounded-2xl bg-white/[0.06] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-purple-500"
          />

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Confirm Password"
            required
            value={
              formData.confirmPassword
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                confirmPassword:
                  e.target.value,
              })
            }
            className="w-full px-5 py-4 rounded-2xl bg-white/[0.06] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-purple-500"
          />

          {/* OPTIONS */}
          <div className="flex items-center justify-between text-xs text-gray-400">

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

            <button
              type="button"
              onClick={
                handleForgotPassword
              }
              className="text-purple-400"
            >
              Forgot Password?
            </button>

          </div>

          {/* TERMS */}
          <label className="flex items-start gap-3 text-xs text-gray-400">

            <input
              type="checkbox"
              checked={
                acceptedTerms
              }
              onChange={() =>
                setAcceptedTerms(
                  !acceptedTerms
                )
              }
              className="mt-1"
            />

            <span>
              I agree to Terms &
              Conditions and Privacy
              Policy
            </span>

          </label>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-600 text-white font-bold"
          >

            {loading ? (

              <div className="flex justify-center">

                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>

              </div>

            ) : (

              "Create Account"

            )}

          </button>

        </form>

        {/* LOGIN */}
        <p className="text-center text-gray-400 mt-7 text-sm">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-purple-400 hover:underline font-semibold"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}