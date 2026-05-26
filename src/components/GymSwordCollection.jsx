import React from "react";
import { motion } from "framer-motion";
import { Heart, ChevronLeft, ChevronRight, Star } from "lucide-react";
import UpcomingProduct from "./UpcomingProduct";

const GymSwordCollection = () => {

  const products = [
    {
      name: "GymSword Oversized T-Shirt",
      fit: "Oversized Fit",
      color: "Soft White",
      price: "₹4,599",
      rating: "4.9",
      image:
        "/GymSwordOversizedT-Shirt.webp",
    },

    {
      name: "GymSword Premium T-Shirt",
      fit: "Luxury Fit",
      color: "Matte Black",
      price: "₹4,899",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },

    {
      name: "GymSword Washed Hoodie",
      fit: "Oversized Fit",
      color: "Shadow Black",
      price: "₹7,999",
      rating: "5.0",
      image:
        "/GymSwordWashedHoodie.jpg",
    },

    {
      name: "GymSword Lightweight Joggers",
      fit: "Regular Fit",
      color: "Jet Black",
      price: "₹6,499",
      rating: "4.7",
      image:
        "/GymSwordightweightJoggers.webp",
    },
  ];

  return (
    <div className="w-full min-h-screen  overflow-hidden">

      <div className="px-4 md:px-10 lg:px-16 py-12">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">

          <div className="flex items-center gap-5 flex-wrap">

            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">

              UNFINISHED:
              <span className="ml-3">
                GYMSWORD
              </span>

            </h2>

            <button className="underline font-semibold text-sm uppercase tracking-[2px]">
              View All
            </button>

          </div>

          {/* ARROWS */}
          <div className="hidden md:flex items-center gap-3">

            <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">

              <ChevronLeft size={20} />

            </button>

            <button className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-lg">

              <ChevronRight size={20} />

            </button>

          </div>

        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {products.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.4,
              }}
              className="group"
            >

              {/* CARD */}
              <div className="bg-white rounded-[30px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

                {/* IMAGE AREA */}
                <div className="relative overflow-hidden h-[560px]">

                  {/* BLURRED BACKGROUND */}
                  <div
                    className="absolute inset-0 bg-cover bg-center scale-150 blur-[120px] opacity-80"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  />

                  {/* SECOND BLUR LAYER */}
                  <div
                    className="absolute inset-0 bg-cover bg-center scale-125 blur-[80px] opacity-60"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  />

                  {/* MAIN IMAGE */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="relative z-10 w-full h-full object-cover scale-110 blur-[6px] brightness-[0.82] group-hover:scale-[1.15] transition-all duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent z-10"></div>

                  {/* HEART */}
                  <button className="absolute top-5 right-5 z-30 w-11 h-11 rounded-full bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center">

                    <Heart size={18} className="text-white" />

                  </button>

                  {/* NEW BADGE */}
                  <div className="absolute bottom-5 left-5 z-30 px-4 py-2 rounded-md bg-white">

                    <p className="text-black uppercase tracking-[3px] text-[10px] font-bold">
                      New
                    </p>

                  </div>

                  {/* LOGO CENTER */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">

                    {/* GLOW */}
                    <div className="absolute w-40 h-40 bg-white/20 rounded-full blur-[70px]" />

                    <img
                      src="/GymSwordlogo.png"
                      alt="logo"
                      className="w-28 object-contain opacity-100 drop-shadow-[0_0_60px_rgba(255,255,255,0.9)]"
                    />

                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-5">

                  {/* RATING */}
                  <div className="flex items-center justify-between mb-3">

                    <div className="flex items-center gap-1">

                      <Star
                        size={15}
                        className="fill-black text-black"
                      />

                      <span className="font-semibold text-sm">
                        {item.rating}
                      </span>

                    </div>

                    <p className="text-[10px] uppercase tracking-[4px] text-gray-400">
                      Luxury
                    </p>

                  </div>

                  {/* NAME */}
                  <h3 className="text-xl font-semibold leading-tight">
                    {item.name}
                  </h3>

                  {/* FIT */}
                  <p className="text-gray-500 mt-2">
                    {item.fit}
                  </p>

                  {/* COLOR */}
                  <p className="text-gray-500 mt-1">
                    {item.color}
                  </p>

                  {/* PRICE */}
                  <div className="mt-5 flex items-center justify-between">

                    <div>

                      <p className="text-gray-400 text-xs uppercase tracking-[3px] mb-1">
                        Regular Price
                      </p>

                      {/* <p className="text-3xl font-black">
                        {item.price}
                      </p> */}

                    </div>

                    {/* BUTTON */}
                    <button className="px-5 py-2 rounded-full bg-black text-white text-[10px] uppercase tracking-[4px] font-bold shadow-xl">

                      Upcoming

                    </button>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
<UpcomingProduct/>
    </div>
  );
};

export default GymSwordCollection;