import React from "react";
import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import UpcomingProduct from "./UpcomingProduct";

const LuxuryUpcomingDrop = () => {

  const products = [
    {
      name: "Vital Sweetheart Neck Crop Top",
      subtitle: "Super-Set Pink/Marl",
      price: "₹4,299",
      rating: "4.8",
      image:
        "/VitalSweetheartNeckCropTop.webp",
    },
    {
      name: "Vital Sports Bra",
      subtitle: "Light Support",
      price: "₹3,899",
      rating: "3.5",
      image:
        "/VitalSportsBra.webp",
    },
    {
      name: "Vital Seamless Long Sleeve Top",
      subtitle: "Regular Fit",
      price: "₹4,199",
      rating: "4.4",
      image:
        "/VitalSeamlessLongSleeve Top.webp",
    },
    {
      name: "Vital Tank With Shelf",
      subtitle: "Premium Fit",
      price: "₹3,999",
      rating: "3.7",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    },
    {
      name: "Lightweight High Support Sports Bra",
      subtitle: "Luxury Activewear",
      price: "₹4,499",
      rating: "4.6",
      image:
        "/images-HighSupportV_NeckSportsBraGSBlackB3B3L_BB2J8049_3840x.webp",
    },
    {
      name: "Adapt Animal X Whitney Sports Bra",
      subtitle: "Performance Edition",
      price: "₹4,799",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    },
    {
      name: "Training Cami Tank With Shelf",
      subtitle: "Premium Lifestyle",
      price: "₹2,999",
      rating: "4.2",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    },
    {
      name: "Premium T-shirts",
      subtitle: "Limited Collection",
      price: "₹3,699",
      rating: "4.1",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      name: "Ruched Sports Bra",
      subtitle: "Luxury Pink Drop",
      price: "₹3,899",
      rating: "4.5",
      image:
        "/RuchedSportsBra.webp",
    },
  ];

  return (
    <div className="w-full min-h-screen overflow-hidden">

      <div className="px-4 md:px-10 lg:px-16 py-16">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-12">

          <div>

            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              New In
              {/* <span className="text-pink-500 ml-3">
                Pink
              </span> */}
            </h2>

            <p className="mt-3 text-gray-600 max-w-xl">
              Premium activewear collection inspired by
              luxury fashion and modern fitness culture.
            </p>

          </div>

          <button className="hidden md:block text-sm font-bold underline uppercase tracking-[3px]">
            View All
          </button>

        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

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
              <div className="bg-white rounded-[30px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white/30">

                {/* IMAGE SECTION */}
                <div className="relative overflow-hidden h-[500px]">

                  {/* BLURRED BG */}
                  <div
                    className="absolute inset-0 bg-cover bg-center scale-125 blur-[90px] opacity-70"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  />

                  {/* MAIN IMAGE */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover scale-110 blur-[6px] brightness-[0.78] group-hover:scale-[1.15] transition-all duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

                  {/* HEART */}
                  <button className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center">

                    <Heart size={18} className="text-white" />

                  </button>

                  {/* COMING SOON */}
                  <div className="absolute top-5 left-5 z-20 px-5 py-2 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20">

                    <p className="text-white uppercase tracking-[5px] text-[10px] font-bold">
                      Coming Soon
                    </p>

                  </div>

                  {/* LOGO */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">

                    <img
                      src="/GymSwordlogo.png"
                      alt="logo"
                      className="w-28 object-contain opacity-95 drop-shadow-[0_0_50px_rgba(255,255,255,0.6)]"
                    />

                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-6">

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
                      Premium
                    </p>

                  </div>

                  {/* NAME */}
                  <h3 className="text-2xl font-black leading-tight">
                    {item.name}
                  </h3>

                  {/* SUBTITLE */}
                  <p className="text-gray-500 mt-2 text-sm uppercase tracking-[2px]">
                    {item.subtitle}
                  </p>

                  {/* PRICE */}
                  <div className="mt-6 flex items-center justify-between">

                    <div>

                      <p className="text-gray-400 text-xs uppercase tracking-[3px] mb-1">
                        Regular Price
                      </p>

                      {/* <p className="text-2xl font-black">
                        {item.price}
                      </p> */}

                    </div>

                    {/* TAG */}
                    <div className="px-4 py-2 rounded-full bg-black text-white text-[10px] uppercase tracking-[4px] font-bold">

                      Upcoming

                    </div>

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

export default LuxuryUpcomingDrop;