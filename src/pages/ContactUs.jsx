// ContactUs.jsx

import React from "react";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

export default function ContactUs() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen text-black overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative bg-black text-white overflow-hidden">

        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0">

          <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] bg-white/5 rounded-full blur-3xl"></div>

          <div className="absolute bottom-[-120px] left-[-120px] w-[350px] h-[350px] bg-gray-500/10 rounded-full blur-3xl"></div>

        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-36">

          <div className="max-w-4xl">

            <p className="uppercase tracking-[5px] text-gray-400 text-xs md:text-sm font-medium mb-6">
              GymSword Support Center
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[1] tracking-tight">
              Contact
              <span className="block text-gray-400 mt-2">
                GymSword
              </span>
            </h1>

            <p className="mt-10 text-gray-300 text-base md:text-xl leading-8 max-w-2xl">
              Questions about your orders, returns, collaborations,
              memberships, or GymSword products? Our support team
              is always ready to help you.
            </p>

          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">

          {/* LEFT SIDE */}
          <div>

            <p className="uppercase tracking-[4px] text-gray-500 text-sm font-semibold mb-4">
              Get In Touch
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Let’s Build
              <br />
              Something Great.
            </h2>

            <p className="text-gray-600 leading-8 text-lg mb-12 max-w-xl">
              We’re committed to delivering premium support and
              helping you with everything related to GymSword.
            </p>

            {/* INFO CARDS */}
            <div className="space-y-5">

              {/* EMAIL */}
              <div className="group bg-white border border-gray-200 rounded-[28px] p-7 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

                <div className="flex items-start gap-5">

                  <div className="bg-black text-white p-4 rounded-2xl group-hover:scale-110 transition duration-300">
                    <Mail size={24} />
                  </div>

                  <div>
                    <h3 className="font-bold text-2xl mb-2">
                      Email Support
                    </h3>

                    <p className="text-gray-700 text-lg">
                      support@gymsword.com
                    </p>

                    <p className="text-gray-500 mt-2 leading-7">
                      Our team replies within 24 hours.
                    </p>
                  </div>

                </div>
              </div>

              {/* PHONE */}
              <div className="group bg-white border border-gray-200 rounded-[28px] p-7 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

                <div className="flex items-start gap-5">

                  <div className="bg-black text-white p-4 rounded-2xl group-hover:scale-110 transition duration-300">
                    <Phone size={24} />
                  </div>

                  <div>
                    <h3 className="font-bold text-2xl mb-2">
                      Phone Number
                    </h3>

                    <p className="text-gray-700 text-lg">
                      +91 98765 43210
                    </p>

                    <p className="text-gray-500 mt-2 leading-7">
                      Monday - Saturday | 10 AM - 7 PM
                    </p>
                  </div>

                </div>
              </div>

              {/* LOCATION */}
              <div className="group bg-white border border-gray-200 rounded-[28px] p-7 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

                <div className="flex items-start gap-5">

                  <div className="bg-black text-white p-4 rounded-2xl group-hover:scale-110 transition duration-300">
                    <MapPin size={24} />
                  </div>

                  <div>
                    <h3 className="font-bold text-2xl mb-2">
                      Office Address
                    </h3>

                    <p className="text-gray-700 text-lg leading-8">
                      GymSword Pvt Ltd
                      <br />
                      New Delhi, India
                    </p>
                  </div>

                </div>
              </div>

              {/* HOURS */}
              <div className="group bg-white border border-gray-200 rounded-[28px] p-7 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

                <div className="flex items-start gap-5">

                  <div className="bg-black text-white p-4 rounded-2xl group-hover:scale-110 transition duration-300">
                    <Clock size={24} />
                  </div>

                  <div>
                    <h3 className="font-bold text-2xl mb-2">
                      Working Hours
                    </h3>

                    <p className="text-gray-700 text-lg leading-8">
                      Monday - Saturday
                      <br />
                      10:00 AM - 7:00 PM
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <div className="bg-white border border-gray-200 rounded-[36px] p-8 md:p-12 shadow-2xl">

              <p className="uppercase tracking-[4px] text-gray-500 text-sm font-semibold mb-4">
                Send Message
              </p>

              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-10">
                Contact Form
              </h2>

              <form className="space-y-7">

                {/* NAME */}
                <div>

                  <label className="block text-sm font-semibold mb-3">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border border-gray-300 bg-[#fafafa] rounded-2xl px-6 py-4 text-lg outline-none focus:border-black focus:bg-white transition-all duration-300"
                  />

                </div>

                {/* EMAIL */}
                <div>

                  <label className="block text-sm font-semibold mb-3">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full border border-gray-300 bg-[#fafafa] rounded-2xl px-6 py-4 text-lg outline-none focus:border-black focus:bg-white transition-all duration-300"
                  />

                </div>

                {/* SUBJECT */}
                <div>

                  <label className="block text-sm font-semibold mb-3">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Enter message subject"
                    className="w-full border border-gray-300 bg-[#fafafa] rounded-2xl px-6 py-4 text-lg outline-none focus:border-black focus:bg-white transition-all duration-300"
                  />

                </div>

                {/* MESSAGE */}
                <div>

                  <label className="block text-sm font-semibold mb-3">
                    Message
                  </label>

                  <textarea
                    rows="6"
                    placeholder="Write your message..."
                    className="w-full border border-gray-300 bg-[#fafafa] rounded-2xl px-6 py-4 text-lg outline-none focus:border-black focus:bg-white transition-all duration-300 resize-none"
                  ></textarea>

                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full bg-black hover:bg-gray-800 text-white py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.01]"
                >
                  Send Message
                  <Send size={22} />
                </button>

              </form>

              {/* SOCIALS */}
              <div className="mt-12">

                <p className="text-sm uppercase tracking-[3px] text-gray-500 font-semibold mb-5">
                  Follow GymSword
                </p>

                <div className="flex gap-4">

                  {/* INSTAGRAM */}
                  <a
                    href="https://www.instagram.com/gym_swordofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#fafafa] border border-gray-200 hover:bg-black hover:text-white transition-all duration-300 p-5 rounded-2xl cursor-pointer hover:-translate-y-1 hover:shadow-xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                    </svg>
                  </a>

                  {/* FACEBOOK */}
                  <div className="bg-[#fafafa] border border-gray-200 hover:bg-black hover:text-white transition-all duration-300 p-5 rounded-2xl cursor-pointer hover:-translate-y-1 hover:shadow-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12.07C22 6.477 17.523 2 12 2S2 6.477 2 12.07c0 5.017 3.657 9.174 8.438 9.93v-7.03H7.898v-2.9h2.54V9.845c0-2.522 1.492-3.916 3.777-3.916 1.094 0 2.238.196 2.238.196v2.475h-1.26c-1.243 0-1.63.774-1.63 1.567v1.883h2.773l-.443 2.9h-2.33V22c4.78-.756 8.437-4.913 8.437-9.93z"/>
                    </svg>
                  </div>

                  {/* TWITTER */}
                  <div className="bg-[#fafafa] border border-gray-200 hover:bg-black hover:text-white transition-all duration-300 p-5 rounded-2xl cursor-pointer hover:-translate-y-1 hover:shadow-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.37 8.56 8.56 0 0 1-2.71 1.04 4.25 4.25 0 0 0-7.24 3.88A12.06 12.06 0 0 1 3.15 4.9a4.24 4.24 0 0 0 1.31 5.67 4.21 4.21 0 0 1-1.92-.53v.05a4.25 4.25 0 0 0 3.41 4.16 4.3 4.3 0 0 1-1.91.07 4.26 4.26 0 0 0 3.97 2.95A8.53 8.53 0 0 1 2 19.54 12.03 12.03 0 0 0 8.29 21c7.55 0 11.68-6.25 11.68-11.67 0-.18-.01-.35-.02-.53A8.3 8.3 0 0 0 22.46 6z"/>
                    </svg>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}