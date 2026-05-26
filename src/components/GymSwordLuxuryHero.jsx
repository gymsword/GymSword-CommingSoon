
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Heart, ShoppingBag } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Oversized Hoodie",
    price: "₹4,999",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Premium Tracksuit",
    price: "₹6,499",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Luxury Tee",
    price: "₹2,499",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function GymSwordLuxuryHero() {
  const videoRef = useRef(null);

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);

    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="bg-black min-h-screen overflow-hidden text-white">

      {/* HERO SECTION */}
      <div className="relative h-screen overflow-hidden">

        {/* VIDEO */}
        <video
          ref={videoRef}
          src="/47e28cc7-0d53-41b5-98fa-7fedef3a0d84.mp4"
          muted
          loop
          playsInline
          autoPlay
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/55" />

        {/* SMOKE EFFECT */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

        {/* HERO CONTENT */}
        <div className="relative z-20 h-full flex items-center px-6 md:px-16 lg:px-24">

          <div className="max-w-3xl">

            {/* LOGO */}
            <motion.img
              src="/GymSwordlogo.png"
              alt="GymSword"
              className="w-24 md:w-36 mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            />

            {/* TITLE */}
            <motion.h1
              className="text-[45px] md:text-[85px] lg:text-[110px] font-black leading-[0.88] tracking-[-5px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              FORGED BY <br />
              DISCIPLINE.
            </motion.h1>

            {/* SUBTITLE */}
            <motion.p
              className="mt-8 text-gray-300 text-lg md:text-2xl leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
            >
              Premium performance wear engineered for athletes,
              creators, and warriors built for greatness.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              className="flex flex-wrap gap-5 mt-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >

              <button className="bg-white text-black px-10 py-5 rounded-full text-lg font-bold flex items-center gap-3 hover:scale-105 transition-all duration-300">
                Explore Collection
                <ArrowRight size={22} />
              </button>

              <button className="border border-white/20 bg-white/10 backdrop-blur-xl text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
                Watch Campaign
              </button>

            </motion.div>

          </div>

        </div>

      </div>

      {/* PRODUCTS SECTION */}
      <div className="px-6 md:px-16 lg:px-24 py-24 bg-black">

        {/* SECTION HEADER */}
        <div className="mb-16 text-center">

          <p className="uppercase tracking-[6px] text-gray-500 text-sm mb-4">
            GymSword Collection
          </p>

          <h2 className="text-4xl md:text-7xl font-black tracking-[-3px]">
            PREMIUM DROPS
          </h2>

        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product) => (

            <motion.div
              key={product.id}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[35px] bg-[#111] border border-white/10"
            >

              {/* IMAGE */}
              <div className="relative h-[500px] overflow-hidden">

                <img
                  src={product.image}
                  alt={product.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    hovered
                      ? "scale-110 blur-[2px] brightness-50"
                      : "scale-100"
                  }`}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* TOP ICONS */}
                <div className="absolute top-5 right-5 flex flex-col gap-3 z-20">

                  <button className="bg-white/10 backdrop-blur-xl border border-white/10 p-3 rounded-full hover:scale-110 transition">
                    <Heart size={18} />
                  </button>

                  <button className="bg-white/10 backdrop-blur-xl border border-white/10 p-3 rounded-full hover:scale-110 transition">
                    <ShoppingBag size={18} />
                  </button>

                </div>

                {/* PRODUCT INFO */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-20">

                  <h3 className="text-3xl font-bold mb-3">
                    {product.title}
                  </h3>

                  <div className="flex items-center justify-between">

                    <p className="text-gray-300 text-lg">
                      {product.price}
                    </p>

                    <button className="bg-white text-black px-5 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300">
                      Shop Now
                    </button>

                  </div>

                </div>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-white/5" />

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

