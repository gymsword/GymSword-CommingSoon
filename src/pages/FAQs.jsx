// FAQs.jsx

import React, { useState } from "react";

import {
  ChevronDown,
  ShieldCheck,
  Truck,
  CreditCard,
  RotateCcw,
} from "lucide-react";

export default function FAQs() {

  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      icon: <Truck size={24} />,
      q: "How long does delivery take?",
      a: "GymSword orders are usually delivered within 3-7 business days depending on your location and shipping availability.",
    },
    {
      icon: <RotateCcw size={24} />,
      q: "Can I return my order?",
      a: "Yes. Products can be returned within 7 days if they are unused, unwashed, and in original packaging condition.",
    },
    {
      icon: <CreditCard size={24} />,
      q: "Which payment methods are accepted?",
      a: "We accept UPI, Debit Cards, Credit Cards, Wallets, and Net Banking for secure online payments.",
    },
    {
      icon: <ShieldCheck size={24} />,
      q: "How can I track my order?",
      a: "Once your order is shipped, GymSword will send tracking details to your registered email and mobile number.",
    },
  ];

  return (
    <div className="bg-[#f4f4f4] min-h-screen text-black overflow-hidden">

      {/* HERO */}
      <section className="relative bg-black text-white overflow-hidden">

        {/* BG EFFECTS */}
        <div className="absolute inset-0">

          <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] bg-white/5 rounded-full blur-3xl"></div>

          <div className="absolute bottom-[-120px] left-[-120px] w-[320px] h-[320px] bg-gray-500/10 rounded-full blur-3xl"></div>

        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">

          <div className="max-w-4xl">

            <p className="uppercase tracking-[5px] text-gray-400 text-xs md:text-sm font-semibold mb-6">
              GymSword Support Center
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">

              Frequently
              <span className="block text-gray-400 mt-2">
                Asked Questions
              </span>

            </h1>

            <p className="mt-10 text-gray-300 text-lg md:text-xl leading-9 max-w-2xl">
              Everything you need to know about GymSword
              orders, delivery, returns, payments, and customer support.
            </p>

          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">

        {/* TITLE */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-gray-500 text-sm font-semibold mb-4">
            Support & Help
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Need Answers?
          </h2>

          <p className="text-gray-600 text-lg leading-8 max-w-2xl mx-auto mt-6">
            Hover or click on any question to instantly
            reveal the answer.
          </p>

        </div>

        {/* FAQ LIST */}
        <div className="space-y-6">

          {faqs.map((item, index) => {

            const isOpen = openIndex === index;

            return (

              <div
                key={index}
                onMouseEnter={() => setOpenIndex(index)}
                className={`group bg-white border rounded-[32px] overflow-hidden transition-all duration-500
                ${
                  isOpen
                    ? "border-black shadow-2xl scale-[1.01]"
                    : "border-gray-200 hover:shadow-2xl hover:scale-[1.01]"
                }`}
              >

                {/* QUESTION */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between gap-5 p-7 md:p-8 text-left"
                >

                  <div className="flex items-center gap-5">

                    {/* ICON */}
                    <div
                      className={`p-4 rounded-2xl transition-all duration-500
                      ${
                        isOpen
                          ? "bg-black text-white rotate-3"
                          : "bg-gray-100 text-black group-hover:bg-black group-hover:text-white"
                      }`}
                    >
                      {item.icon}
                    </div>

                    {/* QUESTION */}
                    <div>

                      <h3
                        className={`text-xl md:text-2xl font-bold leading-tight transition-all duration-300
                        ${
                          isOpen
                            ? "text-black"
                            : "text-gray-800"
                        }`}
                      >
                        {item.q}
                      </h3>

                    </div>

                  </div>

                  {/* ARROW */}
                  <div
                    className={`transition-all duration-500
                    ${
                      isOpen
                        ? "rotate-180 text-black"
                        : "text-gray-500"
                    }`}
                  >
                    <ChevronDown size={30} />
                  </div>

                </button>

                {/* ANSWER */}
                <div
                  className={`grid transition-all duration-500 ease-in-out
                  ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >

                  <div className="overflow-hidden">

                    <div className="px-7 md:px-8 pb-8">

                      <div className="border-t border-gray-200 pt-6">

                        <p className="text-gray-600 text-lg leading-8 max-w-4xl animate-fadeIn">
                          {item.a}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            );
          })}

        </div>

        {/* SUPPORT CTA */}
        <div className="mt-20 bg-black text-white rounded-[40px] p-10 md:p-14 relative overflow-hidden">

          {/* BG EFFECT */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">

            <p className="uppercase tracking-[4px] text-gray-400 text-sm font-semibold mb-5">
              Still Need Help?
            </p>

            <h3 className="text-4xl md:text-5xl font-black leading-tight mb-6">

              Contact GymSword
              <span className="block text-gray-400 mt-2">
                Support Team
              </span>

            </h3>

            <p className="text-gray-300 text-lg leading-8 max-w-2xl mb-10">
              Our support specialists are available to help you
              with orders, delivery updates, returns, and account support.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-black hover:bg-gray-200 transition-all duration-300 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105"
            >
              Contact Us
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}