// OrdersDelivery.jsx

import React from "react";

import {
  Truck,
  Package,
  Clock,
  ShieldCheck,
  MapPinned,
  CheckCircle2,
} from "lucide-react";

export default function OrdersDelivery() {

  const deliveryData = [
    {
      icon: <Package size={28} />,
      title: "Order Processing",
      desc: "All GymSword orders are processed within 24-48 hours after successful payment confirmation and verification.",
    },
    {
      icon: <Truck size={28} />,
      title: "Fast Shipping",
      desc: "We partner with trusted delivery services across India to ensure secure and fast shipping for every order.",
    },
    {
      icon: <Clock size={28} />,
      title: "Delivery Time",
      desc: "Orders are usually delivered within 3-7 business days depending on your city, region, and courier availability.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Secure Packaging",
      desc: "Every GymSword package is packed carefully to protect your products during shipping and transit.",
    },
    {
      icon: <MapPinned size={28} />,
      title: "Order Tracking",
      desc: "Track your shipment easily using the tracking details shared through SMS and email after dispatch.",
    },
    {
      icon: <CheckCircle2 size={28} />,
      title: "Delivery Support",
      desc: "Our support team is always available to assist with delivery updates, delays, or shipping concerns.",
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
              GymSword Shipping Services
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">

              Orders &
              <span className="block text-gray-400 mt-2">
                Delivery
              </span>

            </h1>

            <p className="mt-10 text-gray-300 text-lg md:text-xl leading-9 max-w-2xl">
              Everything you need to know about GymSword
              order processing, shipping, tracking, and delivery services.
            </p>

          </div>

        </div>

      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">

        {/* TOP TITLE */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-gray-500 text-sm font-semibold mb-4">
            Shipping Information
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Fast & Reliable Delivery
          </h2>

          <p className="text-gray-600 text-lg leading-8 max-w-3xl mx-auto mt-6">
            GymSword ensures every order is processed carefully,
            packed securely, and delivered quickly to your doorstep.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {deliveryData.map((item, index) => (

            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-[32px] p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >

              {/* ICON */}
              <div className="bg-[#f5f5f5] group-hover:bg-black group-hover:text-white transition-all duration-500 w-fit p-5 rounded-3xl mb-8">

                {item.icon}

              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-black mb-5 leading-tight">

                {item.title}

              </h3>

              {/* DESC */}
              <p className="text-gray-600 text-lg leading-8">

                {item.desc}

              </p>

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
              Delivery Support
            </p>

            <h3 className="text-4xl md:text-5xl font-black leading-tight mb-6">

              Need Help With
              <span className="block text-gray-400 mt-2">
                Your Order?
              </span>

            </h3>

            <p className="text-gray-300 text-lg leading-8 max-w-2xl mb-10">
              Our GymSword support team is here to help you
              with tracking updates, shipping delays, order issues,
              and delivery-related questions.
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