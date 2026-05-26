import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { reload, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";

// 🔥 NEW IMPORTS (Firestore)
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function VerifyEmail() {
  const [cooldown, setCooldown] = useState(60);
  const [loading, setLoading] = useState(false);

  // 🔥 OTP STATES
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const navigate = useNavigate();

  // ⏳ countdown
  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  // 🔐 protect page
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) navigate("/login");
    });
    return () => unsub();
  }, [navigate]);

  // 🔐 GENERATE OTP
  const generateOTP = () =>
    Math.floor(100000 + Math.random() * 900000).toString();

  // 📩 SEND OTP
  const sendOTP = async () => {
    if (!auth.currentUser?.email)
      return toast.error("User email not found");

    const otpCode = generateOTP();
    setGeneratedOtp(otpCode);

    try {
      setLoading(true);

      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          to_email: auth.currentUser.email,
          otp: otpCode,
        },
        "YOUR_PUBLIC_KEY"
      );

      setOtpSent(true);
      setCooldown(60);

      toast.success("OTP sent to your email 📩");
    } catch (err) {
      toast.error("Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // ✅ VERIFY OTP (🔥 FIXED + FIRESTORE UPDATE)
  const verifyOTP = async () => {
    if (otp !== generatedOtp) {
      toast.error("Invalid OTP ❌");
      return;
    }

    try {
      const user = auth.currentUser;

      if (!user) {
        toast.error("User not found");
        return;
      }

      const uid = user.uid;

      // 🔥 update Firestore
      await updateDoc(doc(db, "users", uid), {
        isVerified: true,
      });

      // 🔥 optional: reload firebase user
      await reload(user);

      toast.success("Email verified successfully ✅");

      // 🔥 redirect to login
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      console.error(err);
      toast.error("Verification failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <ToastContainer />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center"
      >
        <h1 className="text-2xl font-bold text-white mb-3">
          Verify Your Email 📩
        </h1>

        <p className="text-gray-400 text-sm mb-4">
          Click below to receive verification code on your email.
        </p>

        {/* 🔥 SEND OTP */}
        <button
          onClick={sendOTP}
          disabled={cooldown > 0 || loading}
          className={`w-full py-3 rounded-lg font-semibold ${
            cooldown > 0
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-indigo-500 hover:bg-indigo-600"
          } text-white`}
        >
          {cooldown > 0
            ? `Send again in ${cooldown}s`
            : loading
            ? "Sending..."
            : "Send Verification Code"}
        </button>

        {/* 🔥 OTP INPUT */}
        {otpSent && (
          <>
            <input
              placeholder="Enter OTP"
              className="input mt-4"
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              onClick={verifyOTP}
              className="w-full mt-3 bg-green-500 py-3 rounded-lg text-white font-semibold"
            >
              Verify OTP
            </button>
          </>
        )}

        <p className="text-xs text-gray-500 mt-4">
          Check spam if you didn’t receive it
        </p>
      </motion.div>

      <style>{`
        .input {
          width: 100%;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          color: white;
          padding: 10px;
          border-radius: 10px;
          outline: none;
        }
      `}</style>
    </div>
  );
}