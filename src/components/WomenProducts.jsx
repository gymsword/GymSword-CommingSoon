import React, { useRef, useEffect, useState } from "react";
import { products } from "../data/data";
import { useCart } from "../context/CartContext";
import {
  Heart,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShoppingBag,
} from "lucide-react";
import { motion } from "framer-motion";
import CategoryNavbar from "../components/CategoryNavbar";
import LuxuryUpcomingDrop from "./LuxuryUpcomingDrop";

export default function WomenProducts() {

  const {
    addToCart,
    toggleWishlist,
    wishlist = [],
  } = useCart();

  const scrollRef = useRef(null);

  // ACTIVE CATEGORY
  const [activeCategory, setActiveCategory] =
    useState("New In");

  // SIZE STATE
  const [selectedSizes, setSelectedSizes] =
    useState({});

  // WOMEN PRODUCTS
  const womenProducts = products.filter(
    (item) => item.category === "women"
  );

  // CATEGORY DATA
  const categories = [
    {
      title: "New In",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
    },
    {
      title: "Brands",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    },
    {
      title: "Clothing",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
    },
    {
      title: "Shoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      title: "Bags",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    },
    {
      title: "Accessories",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
    },
    {
      title: "Watches",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
    },
    {
      title: "Lifestyle",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    },
    {
      title: "Sale",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    },
  ];

  // ✅ FILTER SYSTEM
  const getFilteredProducts = () => {

    switch (activeCategory) {

      case "New In":
        return womenProducts.slice(0, 6);

      case "Brands":
        return womenProducts.slice(2, 10);

      case "Clothing":
        return womenProducts.slice(0, 8);

      case "Shoes":
        return womenProducts.slice(4, 10);

      case "Bags":
        return womenProducts.slice(1, 7);

      case "Accessories":
        return womenProducts.slice(3, 9);

      case "Watches":
        return womenProducts.slice(5, 11);

      case "Lifestyle":
        return womenProducts.slice(0, 5);

      case "Sale":
        return womenProducts.filter(
          (item) => item.discount >= 15
        );

      default:
        return womenProducts;
    }
  };

  const filteredProducts =
    getFilteredProducts();

  // AUTO SCROLL
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

    <div className="w-full min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 py-8 md:py-10 text-black overflow-hidden bg-white">

      {/* NAVBAR */}
      <CategoryNavbar />

      {/* HERO */}
      <div className="mt-8 md:mt-10 mb-14 md:mb-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

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
          className="order-2 md:order-1"
        >

          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 rounded-full bg-white border border-gray-200 shadow-lg mb-5 md:mb-6">

            <Sparkles size={15} />

            <p className="uppercase tracking-[3px] md:tracking-[4px] text-[9px] md:text-[10px] font-semibold">
              Premium Fashion
            </p>

          </div>

          <h1 className="text-[42px] sm:text-[56px] md:text-7xl font-black leading-[0.95] tracking-[-2px] md:tracking-[-3px]">

            WOMEN

            <span className="block text-gray-300">
              COLLECTION
            </span>

          </h1>

          <p className="mt-5 md:mt-6 text-gray-600 leading-relaxed max-w-xl text-sm sm:text-base md:text-lg">

            Luxury streetwear and premium activewear designed
            for the modern generation.

          </p>

          <div className="flex flex-wrap gap-4 mt-7 md:mt-8">

            <button className="px-6 sm:px-8 py-3 md:py-4 rounded-full bg-black text-white text-[10px] md:text-xs uppercase tracking-[2px] md:tracking-[3px] font-bold shadow-2xl whitespace-nowrap">

              Explore Collection

            </button>

            <button className="px-6 sm:px-8 py-3 md:py-4 rounded-full bg-white border border-gray-200 text-[10px] md:text-xs uppercase tracking-[2px] md:tracking-[3px] font-bold shadow-xl whitespace-nowrap">

              Trending Now

            </button>

          </div>

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
          className="relative overflow-hidden rounded-[30px] md:rounded-[40px] h-[480px] sm:h-[620px] md:h-[550px] shadow-[0_30px_80px_rgba(0,0,0,0.15)] order-1 md:order-2"
        >

          <div
            className="absolute inset-0 bg-cover bg-center scale-125 blur-[80px] opacity-40"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1529139574466-a303027c1d8b)",
            }}
          />

          <motion.img
            src="/womenfitness5.png"
            className="w-full h-full object-cover scale-[1.08] md:scale-105 blur-[2px]"
            animate={{
              scale: [1.05, 1.08, 1.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">

            <img
              src="/GymSwordlogo.png"
              alt="logo"
              className="w-24 sm:w-32 md:w-40 object-contain drop-shadow-[0_0_60px_rgba(255,255,255,0.6)]"
            />

            <p className="mt-5 text-[9px] sm:text-[11px] tracking-[5px] sm:tracking-[8px] uppercase text-white/70 text-center">
              Luxury Editorial
            </p>

          </div>

        </motion.div>

      </div>

      {/* PRODUCTS HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 mb-8">

        <div>

          <p className="uppercase tracking-[4px] md:tracking-[5px] text-[9px] md:text-[10px] text-gray-500 mb-2">
            Curated Products
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            {activeCategory}
          </h2>

        </div>

        <div className="flex gap-3">

          <button
            onClick={scrollLeft}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500 shadow-lg"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={scrollRight}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500 shadow-lg"
          >
            <ChevronRight size={18} />
          </button>

        </div>

      </div>

      {/* PRODUCTS */}
      <div
        ref={scrollRef}
        className="flex gap-5 md:gap-7 overflow-x-auto scroll-smooth no-scrollbar pb-4"
      >

        {filteredProducts.map((item) => {

          const selectedSize =
            selectedSizes[item.id] || "M";

          return (

            <motion.div
              key={item.cartId}
              whileHover={{
                y: -12,
              }}
              className="min-w-[260px] sm:min-w-[300px] group flex-shrink-0"
            >

              <div className="relative overflow-hidden rounded-[30px] md:rounded-[35px] bg-white border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

                {/* BG */}
                <div
                  className="absolute inset-0 bg-cover bg-center scale-125 blur-[70px] opacity-40"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                />

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[340px] sm:h-[420px] object-cover scale-105 blur-[3px] group-hover:scale-110 transition-all duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

                {/* HEART */}
                <button
                  onClick={() =>
                    toggleWishlist({
                      ...item,
                      selectedSize,
                    })
                  }
                  className="absolute top-4 right-4 z-20 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/20"
                >

                  <Heart
                    size={18}
                    className={`${
                      wishlist.some(
                        (wish) =>
                          wish.cartId ===
                          item.cartId
                      )
                        ? "fill-white text-white"
                        : "text-white"
                    }`}
                  />

                </button>

                {/* DISCOUNT */}
                <span className="absolute top-4 left-4 z-20 px-3 md:px-4 py-2 rounded-full bg-black text-white text-[8px] md:text-[10px] uppercase tracking-[2px] md:tracking-[4px] shadow-xl">

                  {item.discount}% OFF

                </span>

                {/* LOGO */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">

                  <img
                    src="/GymSwordlogo.png"
                    alt="logo"
                    className="w-20 md:w-24 opacity-90 object-contain"
                  />

                </div>

                {/* ADD TO CART */}
                <button
                  onClick={() =>
                    addToCart({
                      ...item,
                      selectedSize,
                    })
                  }
                  className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white text-black px-5 md:px-7 py-3 rounded-full text-[10px] md:text-[11px] uppercase tracking-[2px] md:tracking-[3px] font-bold opacity-100 md:opacity-0 translate-y-0 md:translate-y-6 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 shadow-2xl flex items-center gap-2 whitespace-nowrap"
                >

                  <ShoppingBag size={15} />

                  Add To Cart

                </button>

              </div>

              {/* DETAILS */}
              <div className="mt-5 space-y-3">

                {/* <p className="text-[9px] md:text-[10px] tracking-[3px] md:tracking-[4px] uppercase text-gray-500">

                  {item.brand}

                </p> */}

                <p className="text-xl md:text-2xl font-black leading-tight">

                  {item.name}

                </p>

                {/* SIZE SELECTOR */}
                <div className="flex gap-2 pt-1 flex-wrap">

                  {["S", "M", "L", "XL"].map(
                    (size) => (

                      <button
                        key={size}
                        onClick={() =>
                          setSelectedSizes(
                            (prev) => ({
                              ...prev,
                              [item.id]:
                                size,
                            })
                          )
                        }
                        className={`w-9 h-9 rounded-full text-[11px] font-semibold border transition-all duration-300 ${
                          selectedSize ===
                          size
                            ? "bg-black text-white border-black"
                            : "bg-white text-black border-gray-300 hover:bg-black hover:text-white"
                        }`}
                      >

                        {size}

                      </button>

                    )
                  )}

                </div>

                {/* PRICE */}
                <div className="flex items-center justify-between">

                  <div>

                    <div className="flex items-center gap-3 flex-wrap">

                      {/* <span className="text-lg md:text-xl font-bold">

                        ₹
                        {Math.round(
                          item.price -
                            (item.price *
                              item.discount) /
                              100
                        )}

                      </span> */}

                      {/* <span className="line-through text-gray-400 text-sm">

                        ₹{item.price}

                      </span> */}

                    </div>

                    <p className="text-[9px] md:text-[10px] uppercase tracking-[2px] md:tracking-[3px] text-gray-400 mt-2">

                      Selected Size : {selectedSize}

                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          );
        })}

      </div>

      <LuxuryUpcomingDrop />

    </div>
  );
}