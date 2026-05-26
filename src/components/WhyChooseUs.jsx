import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ShoppingBag, Tag, ShieldCheck, RotateCcw } from "lucide-react";

export default function WhyChooseUs() {

  const features = [
    {
      icon: <ShoppingBag size={28} />,
      title: "Premium Quality Products",
      desc: "Carefully curated items with strict quality checks for the best shopping experience.",
    },
    {
      icon: <Tag size={28} />,
      title: "Exciting Deals & Offers",
      desc: "Enjoy daily discounts, exclusive deals, and special festive offers on top products.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Secure Checkout",
      desc: "Multiple safe payment options including UPI, cards, and cash on delivery.",
    },
    {
      icon: <RotateCcw size={28} />,
      title: "Easy Returns & Refunds",
      desc: "Hassle-free returns with quick refunds to ensure complete customer satisfaction.",
    },
  ];

  const Card = ({ item }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    const handleMouseMove = (e) => {
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        whileHover={{ scale: 1.05 }}
        className="relative group p-[1px] rounded-2xl cursor-pointer"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>

        <div className="relative bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <div className="relative z-10 w-16 h-16 mx-auto flex items-center justify-center rounded-full border border-gray-300 group-hover:border-red-500 transition">
            <div className="text-gray-600 group-hover:text-red-500 transition">
              {item.icon}
            </div>
          </div>

          <h3 className="relative z-10 mt-4 text-lg font-semibold text-red-500">
            {item.title}
          </h3>

          <p className="relative z-10 text-sm text-gray-600 mt-2">
            {item.desc}
          </p>

          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 shadow-[0_0_30px_rgba(255,0,100,0.4)]"></div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="relative py-20 bg-[#f7f7f7] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Why Shop With Us
        </h2>

        <div className="w-20 h-[2px] bg-red-500 mx-auto mt-3 mb-4"></div>

        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          Discover a seamless online shopping experience with top-quality products,
          secure payments, and fast delivery — all in one place.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}