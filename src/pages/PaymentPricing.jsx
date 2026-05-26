// PaymentPricing.jsx

import React from "react";

import {
  CreditCard,
  Wallet,
  BadgeIndianRupee,
  ShieldCheck,
  Banknote,
  CircleDollarSign,
} from "lucide-react";

export default function PaymentPricing() {

  const paymentData = [
    {
      icon: <CreditCard size={28} />,
      title: "Secure Payments",
      desc: "All GymSword transactions are protected with advanced encrypted payment gateways for complete security.",
    },
    {
      icon: <Wallet size={28} />,
      title: "Payment Methods",
      desc: "We support UPI, Wallets, Credit Cards, Debit Cards, EMI, and Net Banking for easy payments.",
    },
    {
      icon: <BadgeIndianRupee size={28} />,
      title: "Transparent Pricing",
      desc: "No hidden charges. Taxes, delivery fees, and discounts are shown clearly during checkout.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Trusted Checkout",
      desc: "GymSword uses secure checkout systems to protect your personal and financial information.",
    },
    {
      icon: <Banknote size={28} />,
      title: "Instant Refunds",
      desc: "Approved refunds are processed safely back to your original payment method within working days.",
    },
    {
      icon: <CircleDollarSign size={28} />,
      title: "Exclusive Offers",
      desc: "Enjoy special discounts, promo codes, and membership deals on selected GymSword products.",
    },
  ];

  return (
    <div className="bg-[#f4f4f4] min-h-screen text-black overflow-hidden">

      {/* HERO SECTION */}
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
              GymSword Payments
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">

              Payment &
              <span className="block text-gray-400 mt-2">
                Pricing
              </span>

            </h1>

            <p className="mt-10 text-gray-300 text-lg md:text-xl leading-9 max-w-2xl">
              Learn about secure payments, pricing transparency,
              refund systems, and trusted GymSword checkout services.
            </p>

          </div>

        </div>

      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">

        {/* TOP TITLE */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-gray-500 text-sm font-semibold mb-4">
            Payment Information
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Secure & Flexible Payments
          </h2>

          <p className="text-gray-600 text-lg leading-8 max-w-3xl mx-auto mt-6">
            GymSword provides secure payment solutions,
            flexible methods, transparent pricing, and safe checkout systems.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {paymentData.map((item, index) => (

            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-[32px] p-8 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >

              {/* HOVER BG */}
              <div className="absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 rounded-[32px]"></div>

              {/* CONTENT */}
              <div className="relative z-10">

                {/* ICON */}
                <div className="bg-[#f5f5f5] group-hover:bg-white group-hover:text-black transition-all duration-500 w-fit p-5 rounded-3xl mb-8">

                  {item.icon}

                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-black mb-5 leading-tight group-hover:text-white transition duration-500">

                  {item.title}

                </h3>

                {/* DESC */}
                <p className="text-gray-600 group-hover:text-gray-300 text-lg leading-8 transition duration-500">

                  {item.desc}

                </p>

              </div>

            </div>

          ))}

        </div>

        {/* EXTRA SECTION */}
        <div className="mt-24 bg-black text-white rounded-[40px] p-10 md:p-14 relative overflow-hidden">

          {/* BG EFFECT */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl"></div>

          {/* CONTENT */}
          <div className="relative z-10 max-w-4xl">

            <p className="uppercase tracking-[4px] text-gray-400 text-sm font-semibold mb-5">
              Need Payment Help?
            </p>

            <h3 className="text-4xl md:text-5xl font-black leading-tight mb-6">

              GymSword
              <span className="block text-gray-400 mt-2">
                Payment Support
              </span>

            </h3>

            <p className="text-gray-300 text-lg leading-8 max-w-2xl mb-10">
              Need assistance with payment issues, refunds,
              pricing details, or checkout errors? Our support team is here to help.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-black hover:bg-gray-200 transition-all duration-300 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105"
            >
              Contact Support
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}