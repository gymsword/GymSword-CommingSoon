import React, {
  useRef,
  useEffect,
  useState,
} from "react";

import { products } from "../data/data";

import { useCart } from "../context/CartContext";

import { useNavigate } from "react-router-dom";

import {
  Heart,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShoppingBag,
} from "lucide-react";

import { motion } from "framer-motion";

import GymSwordCollection from "../components/GymSwordCollection";

export default function Menswear() {

  const navigate = useNavigate();

  const {
    addToCart,
    toggleWishlist,
    wishlist = [],
  } = useCart();

  const scrollRef = useRef(null);

  // SIZE STATE
  const [selectedSizes, setSelectedSizes] =
    useState({});

  // FILTER PRODUCTS
  const mensProducts = [
    ...products.filter(
      (item) =>
        item.category === "menswear"
    ),

    // EXTRA PRODUCTS
    {
      cartId: "luxury-1",
      title:
        "GymSword Compression Tee",
      price: 2499,
      image:
        "/images/CompressionTee.webp",
      category: "menswear",
    },

    {
      cartId: "luxury-2",
      title:
        "Elite Performance Hoodie",
      price: 3999,
      image:
        "/ElitePerformanceHoodie.webp",
      category: "menswear",
    },

    {
      cartId: "luxury-3",
      title:
        "Premium Training Joggers",
      price: 3299,
      image:
        "/Premium rainingJoggers.webp",
      category: "menswear",
    },

    {
      cartId: "luxury-4",
      title:
        "GymSword Oversized Tee",
      price: 2199,
      image: "/oversize.png",
      category: "menswear",
    },

    {
      cartId: "luxury-5",
      title:
        "Athletic Luxe Shorts",
      price: 1899,
      image: "/mens5.jpg",
      category: "menswear",
    },

    {
      cartId: "luxury-6",
      title:
        "GymSword Pro Jacket",
      price: 4999,
      image: "/mens6.jpg",
      category: "menswear",
    },
  ].slice(0, 6);

  // AUTO SLIDE
  useEffect(() => {

    const interval = setInterval(() => {

      if (scrollRef.current) {

        scrollRef.current.scrollBy({
          left: 260,
          behavior: "smooth",
        });

      }

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  // BUTTONS
  const scrollLeft = () => {

    scrollRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });

  };

  const scrollRight = () => {

    scrollRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });

  };

  return (
    <div className="w-full min-h-screen overflow-hidden">

      <div className="px-4 md:px-10 lg:px-16 py-10">

        {/* HERO */}
        <div className="mt-10 mb-16 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            {/* TAG */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
                duration: 0.6,
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white shadow-xl border border-gray-200 mb-7"
            >

              <Sparkles size={16} />

              <p className="uppercase tracking-[4px] text-[10px] font-bold">
                Premium Menswear
              </p>

            </motion.div>

            {/* TITLE */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
              className="text-5xl md:text-7xl font-black leading-[0.9] tracking-[-4px]"
            >

              MEN'S

              <span className="block text-gray-300">
                COLLECTION
              </span>

            </motion.h1>

            {/* DESC */}
            <motion.p
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.7,
              }}
              className="mt-8 text-gray-700 text-lg leading-relaxed max-w-xl"
            >

              Discover premium menswear inspired by luxury
              fashion culture, performance aesthetics,
              and modern streetwear trends.

            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.7,
              }}
              className="flex flex-wrap gap-5 mt-10"
            >

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="px-9 py-4 rounded-full bg-black text-white uppercase tracking-[3px] text-xs font-bold shadow-2xl"
              >

                Explore Collection

              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="px-9 py-4 rounded-full bg-white border border-gray-200 uppercase tracking-[3px] text-xs font-bold shadow-xl"
              >

                Trending Now

              </motion.button>

            </motion.div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative overflow-hidden rounded-[40px] h-[520px] shadow-[0_40px_100px_rgba(0,0,0,0.18)]"
          >

            {/* BLUR BACKGROUND */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-150 blur-[120px] opacity-80"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f)",
              }}
            />

            {/* IMAGE */}
            <img
              src="/Menwear1.png"
              alt="menswear"
              className="w-full h-full object-cover scale-110 blur-[6px] brightness-[0.8]"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

            {/* CENTER LOGO */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">

              {/* GLOW */}
              <div className="absolute w-44 h-44 bg-white/20 rounded-full blur-[80px]" />

              <img
                src="/GymSwordlogo.png"
                alt="logo"
                className="w-36 md:w-44 object-contain drop-shadow-[0_0_60px_rgba(255,255,255,0.7)]"
              />

              {/* TAG */}
              <div className="mt-8 px-8 py-4 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20">

                <p className="text-white uppercase tracking-[8px] text-xs font-bold">
                  Luxury Menswear
                </p>

              </div>

            </div>

          </motion.div>

        </div>

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="flex justify-between items-center mb-5"
        >

          <div>

            <p className="uppercase tracking-[4px] text-[9px] text-gray-500 mb-1">
              Curated Products
            </p>

            <h2 className="text-2xl md:text-4xl font-black leading-none">
              Recommendations
            </h2>

          </div>

          {/* BUTTONS */}
          <div className="flex gap-2">

            <motion.button
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={scrollLeft}
              className="w-11 h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500 shadow-lg"
            >

              <ChevronLeft size={16} />

            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={scrollRight}
              className="w-11 h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500 shadow-lg"
            >

              <ChevronRight size={16} />

            </motion.button>

          </div>

        </motion.div>

        {/* PRODUCTS */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar pb-3"
        >

          {mensProducts.map(
            (item, index) => {

              const selectedSize =
                selectedSizes[
                  item.cartId
                ] || "M";

              return (

                <motion.div
                  key={item.cartId}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay:
                      index * 0.08,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group min-w-[240px] md:min-w-[270px] flex-shrink-0"
                >

                  {/* CARD */}
                  <div className="bg-white rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white/30">

                    {/* IMAGE AREA */}
                    <div className="relative overflow-hidden h-[340px] md:h-[390px]">

                      {/* BACKGROUND BLUR */}
                      <div
                        className="absolute inset-0 bg-cover bg-center scale-150 blur-[120px] opacity-80"
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}
                      />

                      {/* SECOND BLUR */}
                      <div
                        className="absolute inset-0 bg-cover bg-center scale-125 blur-[80px] opacity-60"
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}
                      />

                      {/* MAIN IMAGE */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="relative z-10 w-full h-full object-cover scale-110 blur-[4px] brightness-[0.82] group-hover:scale-[1.15] transition-all duration-700"
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent z-10"></div>

                      {/* HEART */}
                      <button
                        onClick={() =>
                          toggleWishlist({
                            ...item,
                            selectedSize,
                          })
                        }
                        className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center"
                      >

                        <Heart
                          size={15}
                          className={`${
                            wishlist.some(
                              (
                                wish
                              ) =>
                                wish.cartId ===
                                item.cartId
                            )
                              ? "fill-white text-white"
                              : "text-white"
                          }`}
                        />

                      </button>

                      {/* TAG */}
                      <div className="absolute top-4 left-4 z-30 px-4 py-2 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20">

                        <p className="text-white uppercase tracking-[4px] text-[9px] font-bold">
                          GymSword
                        </p>

                      </div>

                      {/* CENTER LOGO */}
                      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">

                        <div className="absolute w-32 h-32 bg-white/20 rounded-full blur-[60px]" />

                        <img
                          src="/GymSwordlogo.png"
                          alt="logo"
                          className="w-20 object-contain opacity-100 drop-shadow-[0_0_60px_rgba(255,255,255,0.8)]"
                        />

                      </div>

                      {/* ADD TO CART */}
                      <motion.button
                        whileHover={{
                          scale: 1.05,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                        onClick={() =>
                          addToCart({
                            ...item,
                            selectedSize,
                          })
                        }
                        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 bg-white text-black px-6 py-3 rounded-full text-[10px] uppercase tracking-[3px] font-bold opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-2xl flex items-center gap-2"
                      >

                        <ShoppingBag
                          size={15}
                        />

                        Add To Cart

                      </motion.button>

                    </div>

                    {/* CONTENT */}
                    <div className="p-5">

                      {/* TITLE */}
                      <h3 className="text-xl font-black leading-tight">

                        {item.title}

                      </h3>

                      {/* SUBTEXT */}
                      <p className="text-gray-500 mt-2 text-[11px] uppercase tracking-[2px]">

                        Inspired by Lululemon & Gymshark

                      </p>

                      {/* SIZE */}
                      <div className="flex gap-2 mt-5">

                        {[
                          "S",
                          "M",
                          "L",
                          "XL",
                        ].map((size) => (

                          <button
                            key={size}
                            onClick={() =>
                              setSelectedSizes(
                                (
                                  prev
                                ) => ({
                                  ...prev,
                                  [item.cartId]:
                                    size,
                                })
                              )
                            }
                            className={`w-9 h-9 rounded-full text-[10px] font-bold border transition-all duration-300 ${
                              selectedSize ===
                              size
                                ? "bg-black text-white border-black"
                                : "bg-white text-black border-gray-300 hover:bg-black hover:text-white"
                            }`}
                          >

                            {size}

                          </button>

                        ))}

                      </div>

                      {/* PRICE */}
                      <div className="mt-5 flex items-center justify-between">

                        <div>

                          <p className="text-gray-400 text-[10px] uppercase tracking-[3px] mb-1">

                            Price

                          </p>

                          {/* <p className="text-2xl font-black">

                            ₹{item.price}

                          </p> */}

                          <p className="text-[10px] uppercase tracking-[3px] text-gray-400 mt-2">

                            Selected Size : {selectedSize}

                          </p>

                        </div>

                        {/* TAG */}
                        <div className="px-4 py-2 rounded-full bg-black text-white text-[9px] uppercase tracking-[3px] font-bold shadow-xl">

                          Premium

                        </div>

                      </div>

                    </div>

                  </div>

                </motion.div>

              );
            }
          )}

        </div>

        {/* NEWSLETTER */}
        <div className="mt-20 bg-white rounded-[40px] p-10 md:p-14 shadow-[0_25px_80px_rgba(0,0,0,0.08)]">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>

              <p className="uppercase tracking-[5px] text-[10px] text-gray-500 mb-3">
                Newsletter
              </p>

              <h2 className="text-4xl md:text-5xl font-black leading-tight">

                Never Miss

                <span className="block text-gray-300">
                  A Drop
                </span>

              </h2>

              <p className="text-gray-600 mt-5 leading-relaxed">

                Sign up for promotions, luxury releases,
                stock updates, and exclusive member access.

              </p>

            </div>

            <div>

              <input
                placeholder="Your email address"
                className="w-full px-6 py-5 rounded-full border border-gray-200 outline-none mb-5 text-sm"
              />

              <button
                onClick={() =>
                  navigate(
                    "/register"
                  )
                }
                className="w-full bg-black text-white py-5 rounded-full uppercase tracking-[4px] text-xs font-bold shadow-xl"
              >

                Sign Up Now

              </button>

            </div>

          </div>

        </div>

      </div>

      <GymSwordCollection />

    </div>
  );
}