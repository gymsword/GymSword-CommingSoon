import React, { useState } from "react";

import {
  ShieldCheck,
  Truck,
  CreditCard,
  BadgeCheck,
  MapPin,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

import { useCart } from "../context/CartContext";

export default function Checkout() {

  const {
    cart = [],
    totalPrice,
    placeOrder,
  } = useCart();

  // =========================
  // USER FORM
  // =========================
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
    });

  // =========================
  // DELIVERY OPTION
  // =========================
  const [deliveryType, setDeliveryType] =
    useState("standard");

  // =========================
  // PRICE LOGIC
  // =========================
  const deliveryCharge =
    deliveryType === "express"
      ? 199
      : 0;

  const gst = Math.round(
    totalPrice * 0.18
  );

  const finalTotal =
    totalPrice +
    deliveryCharge +
    gst;

  // =========================
  // HANDLE INPUT
  // =========================
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // =========================
  // RAZORPAY
  // =========================
  const handlePayment = () => {

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {

      alert(
        "Please fill all details"
      );

      return;
    }

    const options = {
      key: "rzp_test_1234567890",

      amount: finalTotal * 100,

      currency: "INR",

      name: "GymSword",

      description:
        "GymSword Pre Booking",

      handler: function () {

        placeOrder();

        alert(
          "Pre Booking Successful ✅"
        );

        window.location.href =
          "/orders";
      },

      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },

      theme: {
        color: "#000000",
      },
    };

    const rzp =
      new window.Razorpay(
        options
      );

    rzp.open();
  };

  return (

    <div className="min-h-screen bg-[#f5f5f5] py-12 sm:py-16 md:py-24 px-4 sm:px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto">

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
          className="mb-10 md:mb-14"
        >

          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-3 rounded-full bg-white border shadow-lg mb-5 md:mb-6">

            <Sparkles size={16} />

            <p className="uppercase tracking-[3px] md:tracking-[4px] text-[9px] md:text-[10px] font-bold">
              GymSword Pre Booking
            </p>

          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-[-2px] md:tracking-[-4px] leading-[1] md:leading-[0.95]">

            Secure
            <span className="block text-gray-300">
              Checkout
            </span>

          </h1>

          <p className="text-gray-500 mt-4 md:mt-5 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">

            Reserve your exclusive GymSword collection before official launch.
            Orders will be processed and delivered after launch release.

          </p>

        </motion.div>

        {cart.length === 0 ? (

          <div className="bg-white rounded-[25px] md:rounded-[40px] p-10 sm:p-14 md:p-20 text-center border shadow-sm">

            <h2 className="text-2xl md:text-3xl font-bold">
              Your pre booking bag is empty
            </h2>

            <p className="text-gray-500 mt-3 text-sm md:text-base">
              Add products before checkout.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">

            {/* LEFT SIDE */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">

              {/* SHIPPING */}
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
                  duration: 0.6,
                }}
                className="bg-white rounded-[25px] md:rounded-[40px] p-5 sm:p-6 md:p-8 border shadow-sm"
              >

                <div className="flex items-center gap-3 mb-6 md:mb-8">

                  <MapPin />

                  <h2 className="text-xl md:text-2xl font-black">
                    Shipping Details
                  </h2>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border rounded-2xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-black text-sm md:text-base"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="border rounded-2xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-black text-sm md:text-base"
                  />

                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border rounded-2xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-black text-sm md:text-base"
                  />

                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className="border rounded-2xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-black text-sm md:text-base"
                  />

                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    className="border rounded-2xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-black text-sm md:text-base"
                  />

                  <input
                    type="text"
                    name="pincode"
                    placeholder="Pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="border rounded-2xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-black text-sm md:text-base"
                  />

                  <textarea
                    rows="5"
                    name="address"
                    placeholder="Full Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="border rounded-2xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-black md:col-span-2 resize-none text-sm md:text-base"
                  />

                </div>

              </motion.div>

              {/* DELIVERY */}
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
                  delay: 0.1,
                  duration: 0.6,
                }}
                className="bg-white rounded-[25px] md:rounded-[40px] p-5 sm:p-6 md:p-8 border shadow-sm"
              >

                <div className="flex items-center gap-3 mb-6">

                  <Truck />

                  <h2 className="text-xl md:text-2xl font-black">
                    Delivery Information
                  </h2>

                </div>

                {/* PREBOOK NOTICE */}
                <div className="mb-6 rounded-3xl bg-black text-white p-4 md:p-5">

                  <p className="uppercase tracking-[3px] md:tracking-[4px] text-[9px] md:text-[10px] mb-3">
                    Launch Notice
                  </p>

                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">

                    This is a pre-booking order. Delivery will start after official GymSword launch.

                  </p>

                </div>

                <div className="space-y-4 md:space-y-5">

                  {/* STANDARD */}
                  <label
                    className={`border rounded-3xl p-4 md:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer transition ${
                      deliveryType === "standard"
                        ? "border-black bg-gray-50"
                        : ""
                    }`}
                  >

                    <div className="flex items-start gap-4">

                      <input
                        type="radio"
                        name="delivery"
                        checked={
                          deliveryType ===
                          "standard"
                        }
                        onChange={() =>
                          setDeliveryType(
                            "standard"
                          )
                        }
                      />

                      <div>

                        <h3 className="font-semibold text-sm md:text-base">
                          Standard Pre Booking
                        </h3>

                        <p className="text-xs md:text-sm text-gray-500 mt-1">
                          Delivery after official launch
                        </p>

                      </div>

                    </div>

                    <span className="font-bold text-green-600 text-sm md:text-base">
                      Free
                    </span>

                  </label>

                  {/* EXPRESS */}
                  <label
                    className={`border rounded-3xl p-4 md:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer transition ${
                      deliveryType === "express"
                        ? "border-black bg-gray-50"
                        : ""
                    }`}
                  >

                    <div className="flex items-start gap-4">

                      <input
                        type="radio"
                        name="delivery"
                        checked={
                          deliveryType ===
                          "express"
                        }
                        onChange={() =>
                          setDeliveryType(
                            "express"
                          )
                        }
                      />

                      <div>

                        <h3 className="font-semibold text-sm md:text-base">
                          Priority Pre Booking
                        </h3>

                        <p className="text-xs md:text-sm text-gray-500 mt-1">
                          Early dispatch after launch
                        </p>

                      </div>

                    </div>

                    <span className="font-bold text-sm md:text-base">
                      ₹199
                    </span>

                  </label>

                </div>

              </motion.div>

            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-8">

              {/* ORDER SUMMARY */}
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
                  duration: 0.7,
                }}
                className="relative bg-white rounded-[25px] md:rounded-[40px] p-5 sm:p-6 md:p-8 border shadow-sm lg:sticky lg:top-32 overflow-hidden"
              >

                {/* BG */}
                <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>

                <div className="relative z-10">

                  <div className="flex items-center gap-3 mb-6 md:mb-8">

                    <CreditCard />

                    <h2 className="text-xl md:text-2xl font-black">
                      Pre Booking Summary
                    </h2>

                  </div>

                  {/* PRODUCTS */}
                  <div className="space-y-4 md:space-y-5 max-h-[350px] overflow-y-auto pr-1 md:pr-2">

                    {cart.map((item) => (

                      <div
                        key={item.cartId}
                        className="relative overflow-hidden rounded-[25px] md:rounded-[30px] border p-4 bg-white"
                      >

                        {/* IMAGE BG */}
                        <div
                          className="absolute inset-0 scale-150 blur-[100px] opacity-30"
                          style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />

                        <div className="absolute inset-0 bg-white/70 backdrop-blur-[18px]"></div>

                        <div className="relative z-10 flex gap-4">

                          {/* IMAGE */}
                          <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">

                            {/* BLUR */}
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
                              className="relative z-10 w-full h-full object-cover blur-[4px]"
                            />

                            <div className="absolute inset-0 bg-black/20"></div>

                          </div>

                          {/* CONTENT */}
                          <div className="flex-1 min-w-0">

                            <h3 className="font-bold leading-tight text-sm md:text-base break-words">
                              {item.title ||
                                item.name}
                            </h3>

                            <p className="text-xs md:text-sm text-gray-500 mt-1">
                              Qty: {item.qty}
                            </p>

                            {/* SIZE */}
                            <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-gray-100 border border-gray-200">

                              <p className="text-[9px] md:text-[10px] uppercase tracking-[2px] md:tracking-[3px] font-bold text-black">

                                Size : {item.selectedSize || "M"}

                              </p>

                            </div>

                            <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-black text-white text-[8px] md:text-[9px] uppercase tracking-[2px] md:tracking-[3px] font-bold">

                              Coming Soon

                            </div>

                            {/* <p className="font-black mt-3 text-base md:text-lg">
                              ₹{item.price}
                            </p> */}

                          </div>

                        </div>

                      </div>
                    ))}

                  </div>

                  <hr className="my-6 md:my-8" />

                  {/* PRICE */}
                  <div className="space-y-4 text-sm md:text-base">

                    <div className="flex justify-between">

                      <span className="text-gray-500">
                        Subtotal
                      </span>

                      {/* <span>
                        ₹{totalPrice}
                      </span> */}

                    </div>

                    <div className="flex justify-between gap-4">

                      <div>

                        <span className="text-gray-500">
                          Delivery
                        </span>

                        <p className="text-xs text-gray-400 mt-1">

                          {deliveryType ===
                          "express"
                            ? "Priority Delivery"
                            : "Standard Delivery"}

                        </p>

                      </div>

                      <span
                        className={
                          deliveryCharge === 0
                            ? "text-green-600 font-semibold"
                            : "font-semibold"
                        }
                      >

                        {deliveryCharge === 0
                          ? "Free"
                          : `₹${deliveryCharge}`}

                      </span>

                    </div>

                    <div className="flex justify-between">

                      <span className="text-gray-500">
                        GST (18%)
                      </span>

                      <span>
                        ₹{gst}
                      </span>

                    </div>

                  </div>

                  <hr className="my-6 md:my-8" />

                  {/* TOTAL */}
                  <div className="flex justify-between items-center gap-4">

                    <span className="text-lg md:text-xl font-black">
                      Total
                    </span>

                    <span className="text-2xl md:text-3xl font-black">
                      ₹{finalTotal}
                    </span>

                  </div>

                  {/* SECURITY */}
                  <div className="bg-gray-50 rounded-3xl p-4 md:p-5 mt-8 space-y-4">

                    <div className="flex items-center gap-3 text-xs md:text-sm">

                      <ShieldCheck
                        size={18}
                      />

                      <span>
                        Secure SSL encrypted checkout
                      </span>

                    </div>

                    <div className="flex items-center gap-3 text-xs md:text-sm">

                      <BadgeCheck
                        size={18}
                      />

                      <span>
                        100% Authentic Products
                      </span>

                    </div>

                  </div>

                  {/* PAYMENT BUTTON */}
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    onClick={
                      handlePayment
                    }
                    className="mt-8 w-full bg-black text-white py-4 md:py-5 rounded-3xl text-base md:text-lg font-bold hover:bg-gray-900 transition shadow-xl"
                  >

                    Reserve Now • ₹{finalTotal}

                  </motion.button>

                  <p className="text-[10px] md:text-xs text-center text-gray-500 mt-4 leading-relaxed">
                    By continuing, you agree to GymSword's pre-booking policy and launch terms.
                  </p>

                </div>

              </motion.div>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}