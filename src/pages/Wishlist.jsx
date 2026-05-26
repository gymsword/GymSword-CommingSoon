import React from "react";
import { Trash2, Heart, Sparkles } from "lucide-react";

import { motion } from "framer-motion";

import { useCart } from "../context/CartContext";

export default function Wishlist() {

  const {
    wishlist = [],
    removeFromWishlist,
    addToCart,
  } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 overflow-hidden">

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
        className="mb-12"
      >

        {/* TAG */}
        <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border shadow-lg mb-6">

          <Sparkles size={16} />

          <p className="uppercase tracking-[4px] text-[10px] font-bold">
            GymSword Wishlist
          </p>

        </div>

        {/* TITLE */}
        <h1 className="text-5xl md:text-7xl font-black tracking-[-4px] leading-[0.95]">

          My
          <span className="block text-gray-300">
            Wishlist ❤️
          </span>

        </h1>

        {/* TEXT */}
        <p className="text-gray-500 mt-5 text-lg max-w-2xl leading-relaxed">

          Save your favorite GymSword collections and reserve luxury drops before official launch.

        </p>

      </motion.div>

      {wishlist.length === 0 ? (

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
          className="flex flex-col items-center justify-center py-20 text-center"
        >

          {/* IMAGE */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/102/102279.png"
            alt="Wishlist Empty"
            className="w-40 opacity-80 mb-8"
          />

          {/* TITLE */}
          <h2 className="text-3xl font-bold">
            Wishlist is empty
          </h2>

          {/* TEXT */}
          <p className="text-gray-500 mt-3 max-w-md">
            Save upcoming GymSword premium collections and luxury pre-booking products here.
          </p>

        </motion.div>

      ) : (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {wishlist.map((item, index) => (

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
                delay: index * 0.08,
                duration: 0.6,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-[35px] border bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            >

              {/* BLUR BACKGROUND */}
              <div
                className="absolute inset-0 scale-150 blur-[120px] opacity-30"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-white/65 backdrop-blur-[18px]"></div>

              {/* CONTENT */}
              <div className="relative z-10">

                {/* IMAGE AREA */}
                <div className="relative overflow-hidden h-[420px]">

                  {/* IMAGE BLUR */}
                  <div
                    className="absolute inset-0 scale-125 blur-[50px] opacity-90"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  {/* MAIN IMAGE */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="relative z-10 w-full h-full object-cover blur-[5px] brightness-[0.82] group-hover:scale-[1.08] transition-all duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10"></div>

                  {/* HEART */}
                  <div className="absolute top-5 left-5 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">

                    <Heart
                      size={20}
                      className="text-red-500 fill-red-500"
                    />

                  </div>

                  {/* COMING SOON */}
                  <div className="absolute top-5 right-5 z-30 px-5 py-2 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20">

                    <p className="text-white uppercase tracking-[4px] text-[9px] font-bold">
                      Coming Soon
                    </p>

                  </div>

                  {/* CENTER LOGO */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">

                    {/* GLOW */}
                    <div className="absolute w-40 h-40 bg-white/20 rounded-full blur-[80px]" />

                    <img
                      src="/GymSwordlogo.png"
                      alt="logo"
                      className="w-28 object-contain opacity-100 drop-shadow-[0_0_60px_rgba(255,255,255,0.8)]"
                    />

                  </div>

                  {/* PREBOOK TAG */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 px-6 py-3 rounded-full bg-black text-white uppercase tracking-[4px] text-[10px] font-bold shadow-2xl">

                    Pre Booking

                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-6">

                  {/* TITLE */}
                  <h2 className="font-black text-2xl leading-tight">
                    {item.title}
                  </h2>

                  {/* SUBTEXT */}
                  <p className="text-gray-500 mt-3 text-sm leading-relaxed">

                    Reserve your premium GymSword collection before launch release.

                  </p>

                  {/* PRICE */}
                  <div className="mt-6 flex items-center justify-between">

                    <div>

                      <p className="text-gray-400 text-[10px] uppercase tracking-[3px] mb-1">
                        Price
                      </p>

                        {/* <p className="text-3xl font-black">
                          ₹{item.price}
                        </p> */}

                    </div>

                    {/* TAG */}
                    <div className="px-5 py-2 rounded-full bg-black text-white text-[9px] uppercase tracking-[4px] font-bold shadow-xl">

                      Luxury

                    </div>

                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-3 mt-7">

                    {/* ADD TO CART */}
                    <motion.button
                      whileHover={{
                        scale: 1.03,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      onClick={() =>
                        addToCart(item)
                      }
                      className="flex-1 bg-black text-white py-4 rounded-2xl uppercase tracking-[4px] text-[10px] font-bold shadow-xl"
                    >

                      Reserve Now

                    </motion.button>

                    {/* REMOVE */}
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFromWishlist(item.cartId);
                      }}
                      className="relative z-50 w-16 bg-red-100 rounded-2xl flex items-center justify-center hover:bg-red-200 transition cursor-pointer"
                    >

                      <Trash2
                        size={20}
                        className="text-red-500 pointer-events-none"
                      />

                    </motion.button>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>
      )}

    </div>
  );
}