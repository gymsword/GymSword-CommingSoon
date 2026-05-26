import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Cart() {

  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalPrice,
  } = useCart();

  // 💰 CALCULATIONS
  const deliveryCharge =
    totalPrice > 1000 ? 0 : 50;

  const gst = Math.round(
    totalPrice * 0.18
  );

  const finalTotal =
    totalPrice +
    deliveryCharge +
    gst;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 overflow-hidden">

      {/* HEADER */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="mb-8 md:mb-10"
      >

        <div className="inline-flex items-center gap-2 px-4 md:px-5 py-3 rounded-full bg-black text-white mb-5 md:mb-6 shadow-xl">

          <ShoppingBag size={16} />

          <p className="uppercase tracking-[3px] md:tracking-[4px] text-[9px] md:text-[10px] font-bold">
            GYmSword Pre Booking
          </p>

        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[-1px] md:tracking-[-2px]">

          Pre Booking Bag

        </h1>

        <p className="text-gray-500 mt-3 max-w-2xl leading-relaxed text-sm md:text-base">

          Reserve your premium GymSword collection before launch.
          Orders will be processed and shipped after the official launch release.

        </p>

      </motion.div>

      {cart.length === 0 ? (

        // 🔥 EMPTY CART UI
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex flex-col items-center justify-center text-center py-16 md:py-20"
        >

          {/* IMAGE */}
          <motion.img
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
            }}
            src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
            alt="Empty Bag"
            className="w-40 sm:w-48 md:w-56 mb-8 opacity-90"
          />

          {/* TITLE */}
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            Your pre-booking bag is empty!
          </h2>

          {/* TEXT */}
          <p className="text-gray-500 max-w-md mb-8 text-sm md:text-base px-4">
            Reserve upcoming GymSword luxury collections before official launch.
          </p>

          {/* BUTTON */}
          <Link to="/">
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="bg-[#1f2a37] text-white px-8 md:px-10 py-3 md:py-4 text-sm font-medium hover:bg-black transition rounded-full shadow-xl"
            >

              Back to shopping

            </motion.button>
          </Link>

        </motion.div>

      ) : (

        // 🛒 CART DATA UI
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">

          {/* LEFT - ITEMS */}
          <div className="lg:col-span-2 space-y-5 md:space-y-6">

            <AnimatePresence>

              {cart.map((item, index) => (

                <motion.div
                  key={`${item.cartId}-${item.selectedSize}`}
                  layout
                  initial={{
                    opacity: 0,
                    y: 40,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    x: 80,
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                    delay: index * 0.03,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="relative flex flex-col sm:flex-row gap-5 md:gap-6 border rounded-[25px] md:rounded-[30px] p-4 md:p-5 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white"
                >

                  {/* BLUR BACKGROUND */}
                  <div
                    className="absolute inset-0 scale-150 blur-[100px] opacity-30"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-white/70 backdrop-blur-[18px]"></div>

                  {/* IMAGE */}
                  <motion.div
                    layout
                    className="relative z-10"
                  >

                    <div className="relative w-full sm:w-28 h-[260px] sm:h-28 rounded-2xl overflow-hidden">

                      {/* IMAGE BLUR */}
                      <div
                        className="absolute inset-0 scale-125 blur-[40px] opacity-80"
                        style={{
                          backgroundImage: `url(${item.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />

                      {/* MAIN IMAGE */}
                      <motion.img
                        layout
                        src={item.image}
                        alt={item.title}
                        className="relative z-10 w-full h-full object-cover rounded-2xl blur-[2px]"
                      />

                    </div>

                  </motion.div>

                  {/* CONTENT */}
                  <div className="relative z-10 flex-1">

                    {/* TITLE */}
                    <h2 className="font-bold text-lg sm:text-xl">
                      {item.title || item.name}
                    </h2>

                    {/* PRICE */}
                    {/* <p className="text-gray-500 text-sm mt-1">
                      ₹{item.price}
                    </p> */}

                    {/* SIZE */}
                    <div className="mt-3 inline-flex items-center px-4 py-2 rounded-full bg-gray-100 border border-gray-200">

                      <p className="text-[10px] uppercase tracking-[3px] font-bold text-black">

                        Size : {item.selectedSize || "M"}

                      </p>

                    </div>

                    {/* PREBOOK TAG */}
                    <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-[10px] uppercase tracking-[2px] md:tracking-[3px] font-bold">

                      Coming Soon • Pre Booking

                    </div>

                    {/* MESSAGE */}
                    <p className="text-xs text-gray-500 mt-3 leading-relaxed max-w-md">

                      Your order will be reserved now and delivered after the official GymSword launch release.

                    </p>

                    {/* QTY */}
                    <motion.div
                      layout
                      className="flex items-center gap-3 mt-5"
                    >

                      {/* MINUS */}
                      <motion.button
                        whileHover={{
                          scale: 1.08,
                        }}
                        whileTap={{
                          scale: 0.92,
                        }}
                        onClick={() =>
                          decreaseQty(item.cartId)
                        }
                        className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                      >

                        <Minus size={16} />

                      </motion.button>

                      {/* QTY */}
                      <motion.span
                        key={item.qty}
                        initial={{
                          scale: 1.4,
                          opacity: 0.5,
                        }}
                        animate={{
                          scale: 1,
                          opacity: 1,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="font-semibold text-lg min-w-[20px] text-center"
                      >

                        {item.qty}

                      </motion.span>

                      {/* PLUS */}
                      <motion.button
                        whileHover={{
                          scale: 1.08,
                        }}
                        whileTap={{
                          scale: 0.92,
                        }}
                        onClick={() =>
                          increaseQty(item.cartId)
                        }
                        className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                      >

                        <Plus size={16} />

                      </motion.button>

                    </motion.div>

                  </div>

                  {/* RIGHT */}
                  <div className="relative z-10 flex flex-row sm:flex-col items-center sm:items-end justify-between gap-4">

                    {/* <motion.p
                      key={item.qty}
                      initial={{
                        opacity: 0.5,
                        scale: 1.2,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="font-black text-xl"
                    >

                      ₹{item.price * item.qty}

                    </motion.p> */}

                    {/* REMOVE */}
                    <motion.button
                      whileHover={{
                        scale: 1.12,
                        rotate: 6,
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                      onClick={() =>
                        removeFromCart(item.cartId)
                      }
                      className="w-11 h-11 rounded-full bg-red-50 flex items-center justify-center hover:bg-red-100 transition-all duration-300"
                    >

                      <Trash2
                        size={18}
                        className="text-red-500"
                      />

                    </motion.button>

                  </div>

                </motion.div>

              ))}

            </AnimatePresence>

          </div>

          {/* RIGHT - SUMMARY */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="relative overflow-hidden rounded-[30px] md:rounded-[35px] p-5 md:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)] bg-white h-fit lg:sticky lg:top-24"
          >

            {/* BLUR BG */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white"></div>

            <div className="relative z-10">

              <h2 className="text-xl md:text-2xl font-black mb-6">
                Pre Booking Summary
              </h2>

              {/* PREBOOK NOTICE */}
              <div className="mb-6 p-4 rounded-2xl bg-black text-white">

                <p className="text-[10px] uppercase tracking-[4px] mb-2">
                  Launch Notice
                </p>

                <p className="text-sm leading-relaxed text-white/80">

                  All products are currently in pre-booking mode.
                  Orders will be shipped after official launch.

                </p>

              </div>

              <div className="space-y-4 text-sm">

                <div className="flex justify-between">
                  <span>Subtotal</span>

                  {/* <motion.span
                    key={totalPrice}
                    initial={{
                      scale: 1.1,
                    }}
                    animate={{
                      scale: 1,
                    }}
                  >
                    ₹{totalPrice}
                  </motion.span> */}

                </div>

                <div className="flex justify-between">

                  <span>
                    Pre Booking Delivery
                  </span>

                  <span
                    className={
                      deliveryCharge === 0
                        ? "text-green-600"
                        : ""
                    }
                  >

                    {deliveryCharge === 0
                      ? "Free"
                      : `₹${deliveryCharge}`}

                  </span>

                </div>

                <div className="flex justify-between">

                  <span>GST (18%)</span>

                  <span>
                    ₹{gst}
                  </span>

                </div>

              </div>

              <hr className="my-5" />

              <div className="flex justify-between font-black text-xl md:text-2xl">

                <span>Total</span>

                <motion.span
                  key={finalTotal}
                  initial={{
                    scale: 1.08,
                  }}
                  animate={{
                    scale: 1,
                  }}
                >

                  ₹{finalTotal}

                </motion.span>

              </div>

              <p className="text-xs text-gray-500 mt-3">
                Inclusive of all taxes
              </p>

              {deliveryCharge === 0 && (

                <p className="text-xs text-green-600 mt-2">

                  You unlocked free delivery 🎉

                </p>

              )}

              <Link to="/checkout">

                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="mt-7 w-full bg-black text-white py-4 rounded-full uppercase tracking-[3px] md:tracking-[4px] text-[10px] md:text-xs font-bold shadow-xl"
                >

                  Reserve Your Order

                </motion.button>

              </Link>

            </div>

          </motion.div>

        </div>

      )}

    </div>
  );
}