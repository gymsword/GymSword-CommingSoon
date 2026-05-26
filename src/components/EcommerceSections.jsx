import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ShoppingBag, Tag, ShieldCheck, RotateCcw } from "lucide-react";

export default function EcommerceSections() {

  const features = [
    {
      icon: <ShoppingBag size={28} />,
      title: "Premium Quality Products",
      desc: "Carefully curated items with strict quality checks.",
    },
    {
      icon: <Tag size={28} />,
      title: "Exciting Deals",
      desc: "Daily discounts & exclusive festive offers.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Secure Checkout",
      desc: "Safe payments with UPI, cards & COD.",
    },
    {
      icon: <RotateCcw size={28} />,
      title: "Easy Returns",
      desc: "Quick refunds & hassle-free returns.",
    },
  ];

  // 🔥 Premium Card
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
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>

        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center overflow-hidden hover:border-purple-400/40 transition">

          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <div className="relative z-10 w-16 h-16 mx-auto flex items-center justify-center rounded-full border border-white/20 group-hover:border-purple-400 transition">
            <div className="text-gray-300 group-hover:text-white transition">
              {item.icon}
            </div>
          </div>

          <h3 className="relative z-10 mt-4 text-lg font-semibold text-white">
            {item.title}
          </h3>

          <p className="relative z-10 text-sm text-gray-400 mt-2">
            {item.desc}
          </p>

          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 shadow-[0_0_40px_rgba(168,85,247,0.4)]"></div>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      {/* ================= FEATURES ================= */}


      {/* ================= REVIEWS ================= */}
      <div className="py-24 bg-[#0b0b0f] text-center">
        <h2 className="text-4xl font-bold text-white">
          Loved by Thousands 💜
        </h2>

        <p className="text-gray-400 mt-3 mb-12">
          Real reviews from our customers
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            { name: "Amit Sharma", rating: 5, text: "Amazing quality & delivery!" },
            { name: "Priya Verma", rating: 4, text: "Great deals and smooth UI." },
            { name: "Rahul Singh", rating: 5, text: "Support is top-notch!" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.03 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-400/30 shadow-lg transition"
            >
              <div className="text-yellow-400 text-lg mb-2">
                {"★".repeat(item.rating)}
              </div>
              <p className="text-gray-300 text-sm">{item.text}</p>
              <h4 className="mt-4 font-semibold text-white">
                {item.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>

 
{/* ================= PREMIUM DELIVERY (SVG CLEAN UI) ================= */}
<div className="py-24 bg-black text-white">

  <div className="max-w-5xl mx-auto px-6 text-center">

    {/* TITLE */}
    <h2 className="text-4xl md:text-5xl font-semibold tracking-wide">
      Lightning Fast Delivery
    </h2>

    {/* SUBTEXT */}
    <p className="text-gray-400 mt-4 mb-14 max-w-2xl mx-auto">
      Get your orders delivered at lightning speed with real-time tracking,
      secure packaging, and guaranteed on-time delivery.
    </p>

    {/* MINIMAL BOX */}
    <div className="border border-white/10 rounded-2xl p-10 bg-white/[0.02] backdrop-blur-sm">

      {/* ICON + LINE */}
      <div className="relative h-24 flex items-center justify-center overflow-hidden">

        {/* static line */}
        <div className="absolute bottom-6 w-full h-[1px] bg-white/20"></div>

        {/* moving line */}
        <motion.div
          className="absolute bottom-6 w-full h-[1px] bg-white"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />

        {/* SVG DELIVERY ICON */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="z-10"
        >
          <svg
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="none"
            className="stroke-white"
            strokeWidth="1.5"
          >
            <path d="M3 7h13v10H3z" />
            <path d="M16 10h3l2 3v4h-5z" />
            <circle cx="7.5" cy="18" r="1.5" />
            <circle cx="17.5" cy="18" r="1.5" />
          </svg>
        </motion.div>
      </div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">

        <div className="p-4 border border-white/10 rounded-xl hover:bg-white/[0.04] transition">
          <h4 className="font-medium">Fast Dispatch</h4>
          <p className="text-gray-400 text-sm mt-1">
            Orders shipped within 24 hours.
          </p>
        </div>

        <div className="p-4 border border-white/10 rounded-xl hover:bg-white/[0.04] transition">
          <h4 className="font-medium">Live Tracking</h4>
  
        </div>

     

      </div>
    </div>
  </div>
</div>
    </>
  );
}