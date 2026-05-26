import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {

  return (

    <footer className="relative bg-black text-white overflow-hidden">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-200px] right-[-120px] w-[500px] h-[500px] bg-white/[0.04] rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-150px] left-[-100px] w-[350px] h-[350px] bg-white/[0.03] rounded-full blur-3xl"></div>

      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr] gap-16 pb-20 border-b border-white/10">

          {/* LEFT BRAND SECTION */}
          <div>

            {/* LOGO + NAME */}
            <div className="flex items-center gap-5 mb-10">

              {/* LOGO */}
              <div className="w-24 h-24 rounded-[30px] bg-white flex items-center justify-center shadow-2xl">

                <img
                  src="/Logofinal.jpeg"
                  alt="GymSword"
                  className="w-14 h-14 object-contain"
                />

              </div>

              {/* NAME */}
              <div>

                <h2 className="text-5xl font-black tracking-tight leading-none">

                  GYM
                  <span className="text-gray-500">
                    SWORD
                  </span>

                </h2>

                <p className="uppercase tracking-[5px] text-gray-500 text-xs mt-3 font-semibold">
                  Luxury Activewear
                </p>

              </div>

            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-400 text-lg leading-9 max-w-xl">

              GymSword is more than just activewear.
              We are building a premium lifestyle movement
              driven by discipline, ambition, confidence,
              performance, and luxury identity.

            </p>

            {/* CONTACT INFO */}
        {/* CONTACT INFO */}
<div className="mt-8 space-y-4">

  {/* SUPPORT */}
  <div className="flex items-start gap-3 bg-white/[0.04] border border-white/10 rounded-2xl p-4 hover:bg-white/[0.06] transition-all duration-300">

    <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-black font-black text-sm flex-shrink-0">

      @

    </div>

    <div className="min-w-0">

      <p className="uppercase tracking-[3px] text-gray-500 text-[9px] font-bold mb-1">

        Support Email

      </p>

      <a
        href="mailto:support@gymsword.com"
        className="text-white text-sm sm:text-base font-semibold hover:text-gray-300 transition break-all"
      >
        support@gymsword.com
      </a>

    </div>

  </div>

  {/* SPONSORSHIP */}
  <div className="flex items-start gap-3 bg-white/[0.04] border border-white/10 rounded-2xl p-4 hover:bg-white/[0.06] transition-all duration-300">

    <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-black font-black text-sm flex-shrink-0">

      ✦

    </div>

    <div className="min-w-0">

      <p className="uppercase tracking-[3px] text-gray-500 text-[9px] font-bold mb-1">

        Sponsorship

      </p>

      <a
        href="mailto:sponsorship@gymsword.com"
        className="text-white text-sm sm:text-base font-semibold hover:text-gray-300 transition break-all"
      >
        sponsorship@gymsword.com
      </a>

    </div>

  </div>

  {/* PHONE */}
  <div className="flex items-start gap-3 bg-white/[0.04] border border-white/10 rounded-2xl p-4 hover:bg-white/[0.06] transition-all duration-300">

    <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-black font-black text-sm flex-shrink-0">

      ☎

    </div>

    <div className="min-w-0">

      <p className="uppercase tracking-[3px] text-gray-500 text-[9px] font-bold mb-1">

        Customer Support

      </p>

      <a
        href="tel:+918799756074"
        className="text-white text-sm sm:text-base font-semibold hover:text-gray-300 transition"
      >
        +91 87997 56074
      </a>

    </div>

  </div>

</div>

            {/* SOCIALS */}
            <div className="flex items-center gap-5 mt-10">

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/gym_swordofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="group w-16 h-16 rounded-2xl bg-white/5 border border-white/10 hover:bg-white transition-all duration-300 flex items-center justify-center hover:scale-110"
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-white group-hover:text-black transition"
                >
                  <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                </svg>

              </a>

              {/* FACEBOOK */}
              <a
                href="/"
                className="group w-16 h-16 rounded-2xl bg-white/5 border border-white/10 hover:bg-white transition-all duration-300 flex items-center justify-center hover:scale-110"
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-white group-hover:text-black transition"
                >
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/>
                </svg>

              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/918799756074"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-16 h-16 rounded-2xl bg-white/5 border border-white/10 hover:bg-white transition-all duration-300 flex items-center justify-center hover:scale-110"
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-white group-hover:text-black transition"
                >
                  <path d="M20.52 3.48A11.91 11.91 0 0 0 12.06 0C5.5 0 .15 5.35.15 11.91c0 2.1.55 4.15 1.6 5.95L0 24l6.33-1.66a11.8 11.8 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.46-8.41z"/>
                </svg>

              </a>

            </div>

          </div>

          {/* CUSTOMER LINKS */}
          <div>

            <h3 className="text-2xl font-bold mb-8">
              Customer Service
            </h3>

            <ul className="space-y-5">

              {[
                { name: "Contact Us", path: "/contact" },
                { name: "FAQs", path: "/faqs" },
                { name: "Orders & Delivery", path: "/orders-delivery" },
                { name: "Returns & Refunds", path: "/returns-refunds" },
                { name: "Payment & Pricing", path: "/payment-pricing" },
              ].map((item, index) => (

                <li key={index}>

                  <Link
                    to={item.path}
                    className="group flex items-center justify-between text-gray-400 hover:text-white transition duration-300 text-lg"
                  >

                    {item.name}

                    <span className="translate-x-0 group-hover:translate-x-1 transition">
                      →
                    </span>

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* COMPANY + NEWSLETTER */}
          <div>

            <div className="mb-14">

              <h3 className="text-2xl font-bold mb-8">
                Company
              </h3>

              <ul className="space-y-5">

                {[
                  { name: "About GymSword", path: "/about" },
                  { name: "Privacy Policy", path: "/privacy-policy" },
                  { name: "Terms & Conditions", path: "/terms-and-conditions" },
                ].map((item, index) => (

                  <li key={index}>

                    <Link
                      to={item.path}
                      className="group flex items-center justify-between text-gray-400 hover:text-white transition duration-300 text-lg"
                    >

                      {item.name}

                      <span className="translate-x-0 group-hover:translate-x-1 transition">
                        →
                      </span>

                    </Link>

                  </li>

                ))}

              </ul>

            </div>

            {/* NEWSLETTER */}
            <div className="bg-white/[0.04] border border-white/10 rounded-[35px] p-8">

              <p className="uppercase tracking-[4px] text-gray-500 text-xs font-semibold mb-4">
                Stay Updated
              </p>

              <h3 className="text-3xl font-black leading-tight mb-5">

                Join The
                <span className="block text-gray-500">
                  GymSword Movement
                </span>

              </h3>

              <p className="text-gray-400 leading-8 mb-8">

                Receive updates on premium drops,
                exclusive collections, and special offers.

              </p>

              <div className="space-y-4">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-black/40 border border-white/10 focus:border-white/30 outline-none px-5 py-4 rounded-2xl text-white placeholder:text-gray-600"
                />

                <button
                  className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 py-4 rounded-2xl font-bold text-lg hover:scale-[1.02]"
                >
                  Subscribe
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* COPYRIGHT */}
          <p className="text-gray-500 text-sm text-center md:text-left leading-7">

            GymSword™ and the GymSword logo are trademarks of GymSword Pvt Ltd © 2026 GymSword. All rights reserved.

          </p>

          {/* LINKS */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">

            <Link
              to="/privacy-policy"
              className="text-gray-500 hover:text-white transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="text-gray-500 hover:text-white transition"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/contact"
              className="text-gray-500 hover:text-white transition"
            >
              Contact
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}