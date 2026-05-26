import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    title: "Oversized Performance Tee",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
  },
  {
    title: "Luxury Compression Fit",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",
  },
  {
    title: "Elite Training Hoodie",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
  },
];

const ProductTeaser = () => {
  return (
    <section className="relative z-10 px-4 sm:px-6 py-28 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pink-500/10 blur-[180px] rounded-full"></div>
      </div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">

        {/* TOP SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          {/* BADGE */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-purple-500/20 bg-white/[0.05] backdrop-blur-2xl shadow-[0_0_40px_rgba(168,85,247,0.15)] mb-8">

            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse"></div>

            <span className="text-[11px] uppercase tracking-[5px] text-gray-200 font-semibold">
              Upcoming Collections
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-[-5px] leading-[0.95]">

            OUR

            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow-[0_0_40px_rgba(168,85,247,0.4)]">
              PRODUCTS
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="max-w-3xl mx-auto text-gray-400 text-lg md:text-[20px] mt-10 leading-[2]">
            Premium activewear engineered with luxury aesthetics,
            modern performance identity, and elite streetwear culture.
            <br />
            Something powerful is arriving soon.
          </p>
        </motion.div>

        {/* PRODUCT GRID */}
    {/* PRODUCT GRID */}
<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">

  {products.map((product, index) => (

    <motion.div
      key={index}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: index * 0.12,
      }}
      viewport={{ once: true }}
      className="group relative"
    >

      {/* OUTER GLOW */}
      <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-500/20 via-pink-500/10 to-blue-500/20 rounded-[42px] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

      {/* MAIN CARD */}
      <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.04] backdrop-blur-[25px] shadow-[0_0_60px_rgba(255,255,255,0.04)] hover:-translate-y-3 transition-all duration-700">

        {/* TOP LIGHT */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent z-20"></div>

        {/* IMAGE AREA */}
        <div className="relative h-[420px] sm:h-[480px] overflow-hidden">

          {/* IMAGE */}
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover scale-110 blur-[10px] brightness-[0.7] group-hover:scale-[1.18] transition-all duration-[2500ms]"
          />

          {/* OVERLAYS */}
          <div className="absolute inset-0 bg-black/45"></div>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>

          <div className="absolute inset-0 backdrop-blur-[2px]"></div>

          {/* BIG BACKGROUND TEXT */}
          <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[90px] md:text-[120px] font-black text-white/[0.03] tracking-[-8px] leading-none whitespace-nowrap">
            SOON
          </h1>

          {/* TOP BADGE */}
          <div className="absolute top-5 left-5 z-20">

            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-2xl shadow-[0_0_30px_rgba(255,255,255,0.05)]">

              <div className="relative">

                <div className="absolute inset-0 bg-purple-500 blur-md opacity-80"></div>

                <div className="relative w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse"></div>
              </div>

              <span className="text-[10px] uppercase tracking-[4px] text-white">
                Coming Soon
              </span>
            </div>
          </div>

          {/* CENTER CONTENT */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">

            {/* MINI TEXT */}
            <p className="text-[10px] uppercase tracking-[5px] text-gray-300 mb-5">
              Luxury Activewear
            </p>

            {/* TITLE */}
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 1,
              }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-[-2px] leading-[1.05] drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              {product.title}
            </motion.h3>

            {/* SUBTEXT */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-[260px] mt-6">
              Engineered with premium performance,
              luxury aesthetics, and elite streetwear identity.
            </p>
          </div>

          {/* BOTTOM PANEL */}
          <div className="absolute bottom-0 left-0 w-full p-5 z-20">

            <div className="rounded-[24px] border border-white/10 bg-black/30 backdrop-blur-[20px] p-5 flex items-center justify-between shadow-[0_0_30px_rgba(255,255,255,0.04)]">

              {/* LEFT */}
              <div>

                <h4 className="text-white text-lg font-semibold">
                  Launching Soon
                </h4>

                <p className="text-gray-400 text-sm mt-1">
                  Exclusive Limited Collection
                </p>
              </div>

              {/* RIGHT DOT */}
              <div className="relative">

                <div className="absolute inset-0 bg-purple-500 blur-xl opacity-80"></div>

                <div className="relative w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"></div>
              </div>
            </div>
          </div>

          {/* SHINE EFFECT */}
          <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] translate-x-[-100%] group-hover:translate-x-[120%] transition-all duration-[2500ms]"></div>

        </div>
      </div>
    </motion.div>
  ))}
</div>

        {/* BOTTOM TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >

          <p className="text-gray-500 uppercase tracking-[5px] text-sm">
            More Collections Revealing Soon
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductTeaser;