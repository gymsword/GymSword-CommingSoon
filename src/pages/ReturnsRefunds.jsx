// ReturnsRefunds.jsx

import React from "react";

import {
  RotateCcw,
  ShieldCheck,
  BadgeCheck,
  PackageCheck,
  Wallet,
  CircleCheckBig,
} from "lucide-react";

export default function ReturnsRefunds() {

  const returnPolicies = [
    {
      icon: <RotateCcw size={28} />,
      title: "Easy Returns",
      desc: "GymSword allows easy returns within 7 days of delivery if the product is unused and in original condition.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Quality Inspection",
      desc: "Every returned product goes through a careful quality inspection before approval for refund or exchange.",
    },
    {
      icon: <BadgeCheck size={28} />,
      title: "Refund Approval",
      desc: "Once approved, refunds are initiated securely to your original payment method without hidden charges.",
    },
    {
      icon: <PackageCheck size={28} />,
      title: "Secure Packaging",
      desc: "Products should be returned with original packaging, tags, and accessories for successful processing.",
    },
    {
      icon: <Wallet size={28} />,
      title: "Fast Refunds",
      desc: "Refunds are usually processed within 5-7 working days after the return request is approved.",
    },
    {
      icon: <CircleCheckBig size={28} />,
      title: "Trusted Support",
      desc: "Our GymSword support team is available to help with returns, refunds, and exchange-related questions.",
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
              GymSword Return Policy
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">

              Returns &
              <span className="block text-gray-400 mt-2">
                Refunds
              </span>

            </h1>

            <p className="mt-10 text-gray-300 text-lg md:text-xl leading-9 max-w-2xl">
              Learn everything about GymSword return policies,
              refund approvals, exchanges, and secure customer protection.
            </p>

          </div>

        </div>

      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">

        {/* TOP TITLE */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-gray-500 text-sm font-semibold mb-4">
            Return Information
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Hassle-Free Returns
          </h2>

          <p className="text-gray-600 text-lg leading-8 max-w-3xl mx-auto mt-6">
            GymSword ensures a smooth and transparent return &
            refund experience for every customer.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {returnPolicies.map((item, index) => (

            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-[32px] p-8 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >

              {/* BG HOVER EFFECT */}
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

        {/* EXTRA SUPPORT SECTION */}
        <div className="mt-24 bg-black text-white rounded-[40px] p-10 md:p-14 relative overflow-hidden">

          {/* BG EFFECT */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl"></div>

          {/* CONTENT */}
          <div className="relative z-10 max-w-4xl">

            <p className="uppercase tracking-[4px] text-gray-400 text-sm font-semibold mb-5">
              Need Return Assistance?
            </p>

            <h3 className="text-4xl md:text-5xl font-black leading-tight mb-6">

              GymSword
              <span className="block text-gray-400 mt-2">
                Support Team
              </span>

            </h3>

            <p className="text-gray-300 text-lg leading-8 max-w-2xl mb-10">
              Need help with returns, exchanges, damaged items,
              or refund status? Our support team is here to assist you.
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