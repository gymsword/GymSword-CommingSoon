import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

export default function CartSidebar({ isOpen, setIsOpen }) {

  const {
    cart,
    increaseQty,
    decreaseQty,
    totalPrice,
  } = useCart();

  // ⏱️ AUTO CLOSE AFTER 3 SEC
  useEffect(() => {

    if (isOpen) {

      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 3000);

      return () => clearTimeout(timer);

    }

  }, [isOpen, setIsOpen]);

  return (
    <>
      {/* 🌫️ BLUR BACKGROUND */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-md z-40 transition"
        />
      )}

      {/* 🛒 SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white text-black shadow-2xl transform transition duration-500 z-50 overflow-hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* BLUR BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white"></div>

        {/* HEADER */}
        <div className="relative z-10 p-5 flex justify-between border-b border-gray-200">

          <div>

            <h2 className="font-black text-xl">
              Pre Booking Bag
            </h2>

            <p className="text-[10px] uppercase tracking-[3px] text-gray-500 mt-1">
              Coming Soon Collection
            </p>

          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="text-xl"
          >
            ✕
          </button>

        </div>

        {/* ITEMS */}
        <div className="relative z-10 p-4 space-y-4 overflow-y-auto h-[72%]">

          {cart.length === 0 ? (

            <div className="flex flex-col items-center justify-center h-full text-center">

              <p className="text-lg font-semibold">
                No pre-bookings yet
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Reserve your GymSword luxury drops before launch.
              </p>

            </div>

          ) : (

            cart.map((item, index) => (

              <motion.div
                key={item.cartId}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="relative overflow-hidden rounded-[26px] bg-white shadow-lg border border-gray-100 p-3"
              >

                {/* IMAGE BLUR BG */}
                <div
                  className="absolute inset-0 scale-150 blur-[90px] opacity-30"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-white/70 backdrop-blur-[18px]"></div>

                <div className="relative z-10 flex gap-3 items-center">

                  {/* IMAGE */}
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">

                    {/* EXTRA IMAGE BLUR */}
                    <div
                      className="absolute inset-0 scale-125 blur-[40px] opacity-90"
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
                      className="relative z-10 w-full h-full object-cover blur-[4px] brightness-[0.8]"
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-black/20"></div>

                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">

                    <p className="text-sm font-bold leading-tight">
                      {item.title}
                    </p>

                    {/* <p className="text-xs text-gray-500 mt-1">
                      ₹{item.price}
                    </p> */}

                    {/* COMING SOON */}
                    <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-black text-white text-[9px] uppercase tracking-[3px] font-bold">

                      Pre Booking

                    </div>

                    {/* QTY */}
                    <div className="flex items-center gap-2 mt-3">

                      <button
                        onClick={() => decreaseQty(item.cartId)}
                        className="w-7 h-7 rounded-full bg-gray-100 hover:bg-black hover:text-white transition flex items-center justify-center"
                      >
                        -
                      </button>

                      <span className="text-sm font-semibold">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => increaseQty(item.cartId)}
                        className="w-7 h-7 rounded-full bg-gray-100 hover:bg-black hover:text-white transition flex items-center justify-center"
                      >
                        +
                      </button>

                    </div>

                  </div>

                </div>

              </motion.div>

            ))
          )}

        </div>

        {/* TOTAL */}
        <div className="relative z-10 p-4 border-t border-gray-200 bg-white/80 backdrop-blur-xl">

          {/* NOTICE */}
          <div className="mb-4 p-3 rounded-2xl bg-black text-white">

            <p className="text-[9px] uppercase tracking-[4px] mb-2">
              Launch Notice
            </p>

            <p className="text-xs text-white/80 leading-relaxed">

              All products are currently hidden in blur mode until official GymSword launch.

            </p>

          </div>

          {/* <h3 className="font-black text-2xl">
            ₹{totalPrice}
          </h3> */}

          <p className="text-xs text-gray-500 mt-1">
            Pre-book your collection today
          </p>

          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="w-full mt-4 bg-black text-white py-4 rounded-full uppercase tracking-[4px] text-[10px] font-bold shadow-xl"
          >

            Reserve Now

          </motion.button>

        </div>

      </div>
    </>
  );
}