import React from "react";

import BackgroundGlow from "../components/auth/BackgroundGlow";

import AuthPhoneContent from "../components/auth/AuthPhoneContent";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function Register() {

  return (
    <div className="min-h-screen bg-[#f5f5f5] overflow-hidden relative flex items-center justify-center px-4 py-8">

      {/* TOAST */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="dark"
      />

      {/* BG */}
      <div className="absolute top-[-120px] left-[-80px] w-[280px] h-[280px] bg-black/5 blur-[100px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-80px] w-[280px] h-[280px] bg-gray-400/10 blur-[100px] rounded-full"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-7xl rounded-[40px] overflow-hidden border border-black/5 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)] grid lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex relative flex-col justify-between p-14 bg-[#111111] overflow-hidden">

          {/* TOP */}
          <div>

            {/* BRAND */}
            <div className="flex items-center gap-4">

              <div className="relative w-16 h-16 rounded-3xl overflow-hidden border border-black/10 shadow-lg bg-white">

                <img
                  src="/logo1.jpg"
                  alt="Gym Sword Logo"
                  className="w-full h-full object-cover"
                />

              </div>

              <div>

                <h2 className="text-3xl font-black text-white tracking-[-1px]">
                  GYM SWORD
                </h2>

                <p className="text-gray-400 text-sm uppercase tracking-[3px]">
                  Luxury Activewear
                </p>

              </div>

            </div>

            {/* HERO */}
            <div className="mt-16">

              <p className="text-gray-400 text-xs uppercase tracking-[6px] font-semibold">
                PREMIUM FITNESS CULTURE
              </p>

              <h1 className="text-6xl font-black text-white leading-[1.05] tracking-[-3px] mt-6">

                Join The
                <span className="text-gray-400">
                  {" "}Future{" "}
                </span>
                Of Gymwear

              </h1>

              <p className="text-gray-400 text-lg leading-relaxed mt-8 max-w-lg">

                Create your premium Gym Sword account
                and unlock exclusive activewear collections,
                rewards, wishlist access, futuristic shopping
                experience and elite member benefits.

              </p>

            </div>

          </div>

          {/* FEATURES */}
          <div className="space-y-5">

            {/* CARD 1 */}
            <div className="flex items-center gap-4 rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-xl p-5">

              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl text-white">

                ⚡

              </div>

              <div>

                <h3 className="text-white text-lg font-semibold">
                  Fast Checkout
                </h3>

                <p className="text-gray-400 text-sm">
                  Smooth and ultra-secure payment experience
                </p>

              </div>

            </div>

            {/* CARD 2 */}
            <div className="flex items-center gap-4 rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-xl p-5">

              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl text-white">

                🎁

              </div>

              <div>

                <h3 className="text-white text-lg font-semibold">
                  Exclusive Rewards
                </h3>

                <p className="text-gray-400 text-sm">
                  Unlock member-only premium offers
                </p>

              </div>

            </div>

            {/* CARD 3 */}
            <div className="flex items-center gap-4 rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-xl p-5">

              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl text-white">

                🔒

              </div>

              <div>

                <h3 className="text-white text-lg font-semibold">
                  Secure Authentication
                </h3>

                <p className="text-gray-400 text-sm">
                  Phone OTP + Supabase protected system
                </p>

              </div>

            </div>

          </div>

          {/* QUOTE */}
          <div className="mt-10 rounded-3xl p-6 border border-white/5 bg-white/[0.03] backdrop-blur-xl">

            <p className="text-white text-2xl font-semibold leading-relaxed">

              “GYM SWORD IS NOT JUST A BRAND.
              IT IS A FITNESS CULTURE.”

            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center p-4 sm:p-8 lg:p-14 overflow-hidden">

          <AuthPhoneContent />

        </div>

      </div>

    </div>
  );
}