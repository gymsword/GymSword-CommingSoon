import React from "react";
import { Target, Plane, Leaf, Headphones } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Target size={40} />,
      title: "Premium Craftsmanship",
      desc: "Every Goamen shirt is made with attention to detail, using high-quality fabrics and tailored stitching for all-day comfort and durability.",
    },
    {
      icon: <Plane size={40} />,
      title: "Fast & Reliable Shipping",
      desc: "We ensure your order is shipped quickly and securely—track every step from our workshop to your doorstep.",
    },
    {
      icon: <Leaf size={40} />,
      title: "Sustainable Fashion",
      desc: "Our shirts are made with eco-conscious materials and processes. Dress sharp while making a difference.",
    },
    {
      icon: <Headphones size={40} />,
      title: "Customer-First Support",
      desc: "Questions or concerns? Our support team is ready to help you with anything you need, any time.",
    },
  ];

  return (
    <section className="bg-[#111111] text-white py-16 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center">

        {features.map((item, index) => (
          <div key={index} className="space-y-4">

            {/* ICON */}
            <div className="flex justify-center text-yellow-400">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="font-semibold text-lg">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-300 text-sm leading-6">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}