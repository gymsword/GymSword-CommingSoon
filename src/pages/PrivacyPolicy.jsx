// PrivacyPolicy.jsx

import React from "react";
import { ShieldCheck, Lock, Eye, Mail, UserCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#f8fafc] min-h-screen py-16 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        
        {/* HERO */}
        <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-3xl p-8 md:p-14 shadow-2xl mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-5">
              <div className="bg-white/10 p-4 rounded-2xl">
                <ShieldCheck size={40} />
              </div>

              <div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Privacy Policy
                </h1>
                <p className="text-gray-300 mt-2">
                  GymSword — Protecting Your Privacy & Data
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-8 text-lg max-w-3xl">
              At GymSword, we value your privacy and are committed to
              protecting your personal information. This Privacy Policy
              explains how we collect, use, and safeguard your data while you
              use our website and services.
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-8">

          {/* Section */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <UserCheck className="text-black" size={28} />
              <h2 className="text-2xl font-bold text-gray-900">
                Information We Collect
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-8">
              <p>
                We may collect personal information when you:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Create an account on GymSword</li>
                <li>Place an order through our website</li>
                <li>Subscribe to newsletters or promotions</li>
                <li>Contact our support team</li>
                <li>Interact with our website and services</li>
              </ul>

              <p>
                Information collected may include your name, email address,
                phone number, shipping address, payment details, and browsing
                activity.
              </p>
            </div>
          </div>

          {/* Section */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <Eye className="text-black" size={28} />
              <h2 className="text-2xl font-bold text-gray-900">
                How We Use Your Information
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-8">
              <p>Your information helps us:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Process and deliver your orders efficiently</li>
                <li>Provide customer support and assistance</li>
                <li>Improve website performance and user experience</li>
                <li>Send important updates and promotional offers</li>
                <li>Prevent fraud and maintain website security</li>
              </ul>
            </div>
          </div>

          {/* Section */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <Lock className="text-black" size={28} />
              <h2 className="text-2xl font-bold text-gray-900">
                Data Protection & Security
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-8">
              <p>
                GymSword implements strong security measures to protect your
                personal information from unauthorized access, misuse, or
                disclosure.
              </p>

              <p>
                All payment transactions are processed through secure and
                trusted payment gateways. We do not store sensitive card
                information on our servers.
              </p>
            </div>
          </div>

          {/* Section */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <ShieldCheck className="text-black" size={28} />
              <h2 className="text-2xl font-bold text-gray-900">
                Cookies & Tracking
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-8">
              <p>
                We use cookies and analytics tools to improve website
                functionality, understand customer behavior, and provide a
                better shopping experience.
              </p>

              <p>
                By using our website, you consent to the use of cookies in
                accordance with this Privacy Policy.
              </p>
            </div>
          </div>

          {/* Section */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <Mail className="text-black" size={28} />
              <h2 className="text-2xl font-bold text-gray-900">
                Contact Us
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-8">
              <p>
                If you have any questions regarding this Privacy Policy or your
                personal data, feel free to contact us.
              </p>

              <div className="bg-gray-100 p-5 rounded-2xl">
                <p>
                  <span className="font-semibold">Brand:</span> GymSword
                </p>

                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  support@gymsword.com
                </p>

                <p>
                  <span className="font-semibold">Website:</span>{" "}
                  www.gymsword.com
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* FOOTER */}
        <div className="text-center mt-12 text-gray-500">
          © 2026 GymSword. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}