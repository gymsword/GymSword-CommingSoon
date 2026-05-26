import React, { useState, useEffect } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import EditorialSlider from "../components/EditorialSlider";
import CategoryGrid from "../components/CategoryGrid";
import { useCart } from "../context/CartContext";
import WhyChooseUs from "../components/WhyChooseUs";
import EcommerceSections from "../components/EcommerceSections";
import TopCollections from "../components/TopCollections";

// PRODUCTS
const products = [
  {
    id: 1,
    title: "High Raised leggines",
    price: 2200,
    image: "/hero3image.png",
  },
  {
    id: 2,
    title: "Shorts",
    price: 1600,
    image: "/heroimage2.png",
  },
  {
    id: 3,
    title: "Sports Bra",
    price: 1999,
    image: "/hero4image.png",
  },
  {
    id: 4,
    title: "Crop Jacket",
    price: 3999,
    image: "/imagehero1.png",
  },
];

export default function Home() {
  const { addToCart } = useCart();

  const [wishlist, setWishlist] = useState([]);
  const [index, setIndex] = useState(0);

  // HERO SLIDES
  const slides = [
    {
      image: "/model4.png",
      title: "Cozy Crew Online Exclusive",
      subtitle: "Luxury essentials designed for everyday confidence.",
    },
    {
      image: "/modelhero3.png",
      title: "Premium Streetwear Collection",
      subtitle: "Modern silhouettes with elevated comfort.",
    },
    {
      image: "/mainbackground.jpeg",
      title: "GymSword Signature Drop",
      subtitle: "Built for performance and premium lifestyle.",
    },
  ];

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const toggleWishlist = (product) => {
    if (wishlist.find((p) => p.id === product.id)) {
      setWishlist(wishlist.filter((p) => p.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">

      {/* HERO SECTION */}

      <div className="relative min-h-screen md:h-[88vh] overflow-hidden ">

        <AnimatePresence mode="wait">

          <motion.div
            key={index}
            className="absolute inset-0 grid grid-cols-1 md:grid-cols-[48%_52%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >

            {/* LEFT SIDE */}
         {/* LEFT SIDE */}
<div className="relative h-full flex items-center bg-white z-20">

  {/* CONTENT */}
  <div className="w-full px-5 sm:px-8 md:px-12 lg:px-20 pt-24 sm:pt-28 md:pt-0 pb-12 md:pb-0">

    <p className="text-sm sm:text-base md:text-lg font-medium text-black mb-4 md:mb-6 tracking-wide">
      Look Exclusive
    </p>

    <h1 className="max-w-[700px] text-[34px] sm:text-[48px] md:text-[58px] lg:text-[72px] xl:text-[82px] font-black leading-[1.02] md:leading-[0.95] tracking-[-1px] md:tracking-[-3px] text-black whitespace-pre-line break-words">
      {slides[index].title}
    </h1>

    <p className="mt-5 md:mt-8 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-[620px]">
      {slides[index].subtitle}
    </p>

    <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-4">

      <button className="bg-black text-white px-7 sm:px-10 md:px-14 py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:scale-105 transition-all duration-300">
        Shop Collection
      </button>

      <button className="border border-black text-black px-7 sm:px-10 py-3 md:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-black hover:text-white transition-all duration-300">
        Explore More
      </button>

    </div>

  </div>

</div>
            {/* RIGHT IMAGE */}
        {/* RIGHT IMAGE */}
<div className="relative h-[50vh] sm:h-[60vh] md:h-full overflow-hidden">

  <motion.img
    src={slides[index].image}
    alt=""
    className="w-full h-full object-cover object-center"
    initial={{ scale: 1.05 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1 }}
  />

</div>

          </motion.div>

        </AnimatePresence>

        {/* LEFT BUTTON */}
        <button
          onClick={prevSlide}
          className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-white shadow-xl flex items-center justify-center z-50 hover:scale-110 transition"
        >
          <ChevronLeft className="w-5 h-5 md:w-8 md:h-8" />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextSlide}
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-white shadow-xl flex items-center justify-center z-50 hover:scale-110 transition"
        >
          <ChevronRight className="w-5 h-5 md:w-8 md:h-8" />
        </button>

        {/* DOTS */}
        <div className="absolute bottom-5 md:bottom-7 left-1/2 -translate-x-1/2 flex gap-3 md:gap-4 z-50">

          {slides.map((_, i) => (

            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                index === i
                  ? "w-4 h-4 md:w-5 md:h-5 border-2 border-black bg-white"
                  : "w-2.5 h-2.5 bg-gray-400"
              }`}
            />

          ))}

        </div>

      </div>

      {/* PRODUCTS */}

      <div className="relative px-4 sm:px-6 md:px-12 py-10 md:py-14 overflow-hidden">

        {/* PREMIUM BACKGROUND GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] md:w-[700px] h-[220px] md:h-[300px] bg-white/20 blur-[140px] rounded-full"></div>

        {/* SECTION HEADER */}
        <div className="relative z-10 text-center mb-10 md:mb-14">

          <p className="uppercase tracking-[4px] sm:tracking-[6px] md:tracking-[8px] text-[10px] sm:text-xs md:text-sm text-gray-600 mb-3">
            Exclusive Drop
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-[2px] sm:tracking-[4px] md:tracking-[6px] text-black">
            NEW ARRIVALS
          </h2>

          <div className="w-24 md:w-32 h-[2px] bg-black mx-auto mt-5 opacity-70"></div>

          <p className="mt-5 text-gray-700 text-sm md:text-base max-w-xl mx-auto leading-relaxed px-3">
            Confidential luxury collection preview.
            Products remain intentionally concealed until official launch.
          </p>

        </div>

        {/* PRODUCT GRID */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">

          {products.map((product) => {
            const isWishlisted = wishlist.find(
              (p) => p.id === product.id
            );

            return (
              <motion.div
                key={product.id}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-[30px] border border-black/10 bg-white/30 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.15)]"
              >

                {/* TOP SHINE */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/10 z-10 pointer-events-none"></div>

                {/* IMAGE SECTION */}
                <div className="relative overflow-hidden h-[320px] sm:h-[360px] md:h-72 lg:h-80 flex items-center justify-center">

                  {/* COMING SOON BADGE */}
                  <div className="absolute top-4 left-4 z-40">
                    <span className="bg-black/70 text-white text-[10px] md:text-xs px-4 py-2 rounded-full tracking-[2px] md:tracking-[3px] uppercase backdrop-blur-xl border border-white/10">
                      Unreleased
                    </span>
                  </div>

                  {/* PREMIUM BLURRED BACKGROUND */}
                  <div
                    className="absolute inset-0 bg-cover bg-center scale-150 blur-[120px] opacity-90"
                    style={{
                      backgroundImage: `url(${product.image})`,
                    }}
                  />

                  {/* DARK FADE */}
                  <div className="absolute inset-0 bg-black/45 z-10"></div>

                  {/* PRODUCT IMAGE */}
                  <motion.img
                    src={product.image}
                    className="relative z-20 w-full h-full object-cover blur-[8px] brightness-[0.75] contrast-110 scale-105 group-hover:blur-[12px] group-hover:scale-110 transition-all duration-700"
                    whileHover={{ scale: 1.05 }}
                  />

                  {/* CENTER GLASS EFFECT */}
                  <div className="absolute inset-0 z-30 backdrop-blur-[6px] bg-white/[0.02]"></div>

                  {/* CENTER LOGO */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-40 pointer-events-none">

                    <img
                      src="/GymSwordlogo.png"
                      alt="logo"
                      className="w-24 sm:w-28 md:w-36 opacity-95 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.35)]"
                    />

                    <p className="mt-4 text-white/80 text-[10px] md:text-xs tracking-[4px] md:tracking-[5px] uppercase">
                      Launching Soon
                    </p>

                  </div>

                  {/* WISHLIST */}
                  <button
                    onClick={() => toggleWishlist(product)}
                    className="absolute top-4 right-4 z-50 bg-white/80 backdrop-blur-xl p-2 rounded-full border border-white/20 shadow-xl"
                  >
                    <Heart
                      size={18}
                      className={
                        isWishlisted
                          ? "fill-black text-black"
                          : "text-black"
                      }
                    />
                  </button>

                  {/* HIDDEN BUTTON */}
                  <button
                    onClick={() => addToCart(product)}
                    className="absolute bottom-5 left-1/2 -translate-x-1/2 z-50 bg-black/90 text-white px-5 md:px-6 py-2 rounded-full text-[10px] md:text-xs tracking-[2px] uppercase opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 backdrop-blur-xl border border-white/10"
                  >
                    Preview Locked
                  </button>

                </div>

                {/* PRODUCT DETAILS */}
                <div className="relative z-20 p-5 text-center">

                  <p className="text-sm md:text-base font-bold tracking-wide text-black uppercase">
                    {product.title}
                  </p>

                  <div className="flex items-center justify-center gap-2 mt-2">

                    <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div>

                    {/* <p className="text-gray-700 text-sm tracking-wider">
                      <p>₹{product.price}</p>
                    </p> */}

                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
{/* NOTIFY FORM */}

      <EditorialSlider />
      <TopCollections />
      <CategoryGrid />
      <WhyChooseUs />
      {/* <EcommerceSections /> */}

    </div>
  );
}