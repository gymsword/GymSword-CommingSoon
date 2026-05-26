// TermsConditions.jsx

import React from "react";
import {
  FileText,
  Shield,
  ShoppingBag,
  RotateCcw,
  AlertTriangle,
  Mail,
} from "lucide-react";

export default function TermsConditions() {
  return (
    <div className="bg-[#f8fafc] min-h-screen py-16 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-3xl p-8 md:p-14 shadow-2xl mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-5">
              <div className="bg-white/10 p-4 rounded-2xl">
                <FileText size={40} />
              </div>

              <div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Terms & Conditions
                </h1>

                <p className="text-gray-300 mt-2">
                  GymSword — Terms of Use & Services
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-8 text-lg max-w-3xl">
              Please read these Terms & Conditions carefully before using the
              GymSword website. By accessing or using our services, you agree
              to comply with these terms.
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-8">

          {/* Section */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <Shield size={28} className="text-black" />
              <h2 className="text-2xl font-bold text-gray-900">
                Acceptance of Terms
              </h2>
            </div>

            <p className="text-gray-700 leading-8">
              By using GymSword, you confirm that you are at least 18 years
              old or using the website under parental supervision. You agree
              to follow all applicable laws and regulations while using our
              services.
            </p>
          </div>

          {/* Section */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <ShoppingBag size={28} className="text-black" />
              <h2 className="text-2xl font-bold text-gray-900">
                Orders & Payments
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-8">
              <p>
                All orders placed through GymSword are subject to availability
                and confirmation.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Prices may change without prior notice</li>
                <li>Payments must be completed before shipping</li>
                <li>We reserve the right to cancel suspicious orders</li>
                <li>Customers must provide accurate information</li>
              </ul>
            </div>
          </div>

          {/* Section */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <RotateCcw size={28} className="text-black" />
              <h2 className="text-2xl font-bold text-gray-900">
                Returns & Refunds
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-8">
              <p>
                Customers may request returns or exchanges according to our
                return policy.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Items must be unused and in original condition</li>
                <li>Refund processing may take several business days</li>
                <li>Shipping charges may not be refundable</li>
              </ul>
            </div>
          </div>

          {/* Section */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <AlertTriangle size={28} className="text-black" />
              <h2 className="text-2xl font-bold text-gray-900">
                Limitation of Liability
              </h2>
            </div>

            <p className="text-gray-700 leading-8">
              GymSword shall not be held liable for any indirect, incidental,
              or consequential damages resulting from the use of our website,
              products, or services.
            </p>
          </div>

          {/* Section */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <Mail size={28} className="text-black" />
              <h2 className="text-2xl font-bold text-gray-900">
                Contact Information
              </h2>
            </div>

            <div className="bg-gray-100 p-5 rounded-2xl text-gray-700 leading-8">
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

        {/* FOOTER */}
        <div className="text-center mt-12 text-gray-500">
          © 2026 GymSword. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}