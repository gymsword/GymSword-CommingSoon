// src/components/UpcomingProduct.jsx

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  Sparkles,
  Clock3,
  ShieldCheck,
  Flame,
} from "lucide-react";

const upcomingProducts = [
  {
    id: 1,
    title: "STEALTH RUNNER",
    subtitle: "Luxury Performance Sneakers",
    status: "Launching Soon",
    image:
      "/Premiumimage1.png",
  },
  {
    id: 2,
    title: "SHADOW TECH",
    subtitle: "Oversized Premium Hoodie",
    status: "Limited Drop",
    image:
      "/Premimumimage2.png",
  },
  {
    id: 3,
    title: "NOIR ELITE",
    subtitle: "Luxury Streetwear Collection",
    status: "Coming This Season",
    image:
      "/Premimumimage3.png",
  },
  {
    id: 4,
    title: "GYMSWORD X",
    subtitle: "Elite Smart Activewear",
    status: "Launching Worldwide",
    image:
      "/Premimumimage4.png",
  },
];

const features = [
  {
    icon: <Sparkles size={20} />,
    title: "Premium Quality",
    desc: "Crafted with luxury-grade materials.",
  },
  {
    icon: <Clock3 size={20} />,
    title: "Early Access",
    desc: "Be first to access exclusive launches.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Limited Editions",
    desc: "Rare collections with premium feel.",
  },
  {
    icon: <Flame size={20} />,
    title: "Luxury Streetwear",
    desc: "Minimal futuristic fashion identity.",
  },
];

const UpcomingProduct = () => {
      const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-black text-white py-24 px-6 md:px-16">
      {/* MAIN BACKGROUND IMAGES */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="absolute top-0 left-0 w-[500px] opacity-10 blur-3xl"
        />

        <img
          src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="absolute bottom-0 right-0 w-[500px] opacity-10 blur-3xl"
        />

        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-gray-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-5 py-2 rounded-full text-sm tracking-[3px] uppercase text-gray-300 mb-6 backdrop-blur-xl">
            <Sparkles size={16} />
            Upcoming Collection
          </div>

          <h2 className="text-4xl md:text-7xl font-black tracking-tight leading-tight">
            MANY PRODUCTS
            <br />
            <span className="text-gray-500">COMING SOON</span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-400 mt-8 text-lg leading-relaxed">
            Discover the future of premium fashion and luxury activewear.
            Exclusive products are preparing for launch under the
            <span className="text-white font-semibold"> GymSword </span>
            movement.
          </p>
        </motion.div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-2xl"
            >
              {/* CARD BACKGROUND IMAGE */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-110 opacity-20 group-hover:scale-125 transition duration-700"
                style={{
                  backgroundImage: `url(${product.image})`,
                }}
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/75" />

              {/* CONTENT */}
              <div className="relative z-10 p-7 md:p-10">
                {/* TOP */}
                <div className="flex items-center justify-between mb-10">
                  <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-[2px] text-gray-300 backdrop-blur-xl">
                    {product.status}
                  </div>

                  <button className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition duration-500">
                    <ArrowUpRight size={20} />
                  </button>
                </div>

                {/* PREMIUM HIDDEN PRODUCT BOX */}
             {/* PREMIUM HIDDEN PRODUCT BOX */}
{/* PREMIUM HIDDEN PRODUCT BOX */}
<div className="relative overflow-hidden rounded-[36px] h-[340px] flex items-center justify-center mb-8 border border-white/10 bg-[#050505] group/card">

  {/* MAIN BACKGROUND IMAGE */}
  <img
    src={product.image}
    alt={product.title}
    className="absolute inset-0 w-full h-full object-cover scale-125 blur-[45px] opacity-30 group-hover/card:scale-150 transition-all duration-1000"
  />

  {/* BLACK OVERLAY */}
  <div className="absolute inset-0 bg-black/70" />

  {/* PREMIUM GLOW */}
  <div className="absolute w-[280px] h-[280px] bg-white/10 rounded-full blur-[130px]" />

  {/* FLOATING IMAGE 1 */}
  <motion.img
    whileHover={{ scale: 1.08 }}
    src="/Premiumimage1.png"
    className="absolute top-5 left-5 w-28 h-28 object-cover rounded-[24px] opacity-35 blur-[2px] rotate-[-10deg] group-hover/card:scale-110 transition-all duration-700 shadow-[0_0_40px_rgba(255,255,255,0.08)]"
  />

  {/* FLOATING IMAGE 2 */}
  <motion.img
    whileHover={{ scale: 1.08 }}
    src="/Premimumimage2.png"
    className="absolute top-6 right-5 w-32 h-32 object-cover rounded-[24px] opacity-35 blur-[2px] rotate-[10deg] group-hover/card:scale-110 transition-all duration-700 shadow-[0_0_40px_rgba(255,255,255,0.08)]"
  />

  {/* FLOATING IMAGE 3 */}
  <motion.img
    whileHover={{ scale: 1.08 }}
    src="/Premimumimage3.png"
    className="absolute bottom-6 left-6 w-28 h-28 object-cover rounded-[24px] opacity-35 blur-[2px] rotate-[8deg] group-hover/card:scale-110 transition-all duration-700 shadow-[0_0_40px_rgba(255,255,255,0.08)]"
  />

  {/* FLOATING IMAGE 4 */}
  <motion.img
    whileHover={{ scale: 1.08 }}
    src="/Premimumimage4.png"
    className="absolute bottom-5 right-6 w-32 h-32 object-cover rounded-[24px] opacity-35 blur-[2px] rotate-[-8deg] group-hover/card:scale-110 transition-all duration-700 shadow-[0_0_40px_rgba(255,255,255,0.08)]"
  />

  {/* CENTER LOGO */}
  <div className="relative z-20 text-center">

    <motion.div
      whileHover={{
        scale: 1.06,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
      }}
      className="relative w-40 h-40 mx-auto rounded-full border border-white/10 bg-white/10 backdrop-blur-3xl flex items-center justify-center overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.08)]"
    >

      {/* INNER LIGHT */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />

      {/* LOGO */}
      <img
        src="/logofinal1.png"
        alt="GymSword Logo"
        className="relative z-10 w-24 h-24 object-contain drop-shadow-[0_0_35px_rgba(255,255,255,0.35)] group-hover/card:scale-110 transition-all duration-700"
      />

    </motion.div>

    {/* TEXT */}
    <p className="mt-7 text-gray-300 uppercase tracking-[8px] text-[11px] font-medium">
      Hidden Until Launch
    </p>

  </div>

</div>

                {/* TEXT */}
                <h3 className="text-3xl md:text-4xl font-black tracking-wide mb-3">
                  {product.title}
                </h3>

                <p className="text-gray-400 text-lg">
                  {product.subtitle}
                </p>

                {/* BOTTOM */}
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="text-gray-500 text-sm uppercase tracking-[3px]">
                    Premium Release
                  </span>

                  <button className="text-sm uppercase tracking-[3px] text-white hover:text-gray-300 transition">
                    Notify Me
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-24">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl hover:bg-white/[0.07] transition duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center mb-5">
                {item.icon}
              </div>

              <h4 className="text-xl font-bold mb-2">{item.title}</h4>

              <p className="text-gray-400 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden mt-24 rounded-[40px] border border-white/10 bg-gradient-to-r from-white/[0.08] to-white/[0.03] backdrop-blur-2xl p-10 md:p-16 text-center"
        >
          {/* CTA BG IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1600&auto=format&fit=crop"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-10 blur-sm"
          />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              THE FUTURE OF
              <br />
              <span className="text-gray-500">GYMSWORD</span>
            </h2>

            <p className="max-w-2xl mx-auto text-gray-400 mt-6 text-lg">
              More premium collections are preparing for launch. Join the next
              generation of luxury streetwear and activewear culture.
            </p>

         <button
  onClick={() => navigate("/")}
  className="mt-10 bg-white text-black hover:bg-gray-200 transition duration-300 px-10 py-5 rounded-full uppercase tracking-[4px] text-sm font-bold shadow-2xl"
>
  Explore Future Drops
</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingProduct;