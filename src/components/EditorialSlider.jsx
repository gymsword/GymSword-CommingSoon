import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function EditorialSlider() {

  // INLINE DATA
  const editorialData = [
    {
      id: 1,
      image:
        "/pushtheharder.jpeg",
      title: "The Season’s Edit",
      subtitle: "UP TO 60% OFF",
      desc: "Where luxury meets contemporary wardrobe essentials",
    },
    {
      id: 2,
      image:
        "/image56.png",
      title: "Wardrobe Refresh",
      subtitle: "Summer Essentials",
      desc: "Elevated styles for everyday wear",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
      title: "Best Seller Edit",
      subtitle: "UP TO 60% OFF",
      desc: "Most loved styles curated for you",
    },
  ];

  return (
    <div className="w-full px-5 md:px-10 py-16 overflow-hidden ">

      {/* PREMIUM HEADER */}
      <div className="text-center mb-14">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[8px] text-[11px] md:text-xs text-gray-500 font-medium mb-4"
        >
          Luxury Editorial
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black tracking-[-2px] text-black leading-tight"
        >
          FEATURED   COLLECTION
          <span className="block text-gray-700">
          
          </span>
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 1 }}
          className="h-[2px] bg-black mx-auto mt-6 opacity-70"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-sm md:text-base text-gray-600 leading-relaxed font-light"
        >
          Discover the future of luxury activewear with our exclusive editorial
          collection preview crafted for modern premium fashion culture.
        </motion.p>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {editorialData.map((item) => (

          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="group relative overflow-hidden rounded-[36px] h-[540px] bg-[#111] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.25)] hover:shadow-[0_30px_120px_rgba(0,0,0,0.35)] transition-all duration-700"
          >

            {/* BLUR BACKGROUND */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-[1.25] blur-[70px] opacity-60"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            />

            {/* SHINE EFFECT */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent z-20 pointer-events-none"></div>

            {/* IMAGE */}
            <motion.img
              src={item.image}
              alt={item.title}
              className="
                w-full
                h-full
                object-cover
                scale-[1.05]
                blur-[4px]
                brightness-[0.97]
                contrast-[1.05]
                saturate-[1]
                group-hover:blur-[6px]
                group-hover:scale-[1.09]
                transition-all
                duration-700
              "
              animate={{
                scale: [1.05, 1.08, 1.05],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* PREMIUM OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/20 z-20"></div>

            {/* GLASS EFFECT */}
            <div className="absolute inset-0 backdrop-blur-[1px] bg-white/[0.02] z-20"></div>

            {/* TOP CONTENT */}
            <div className="absolute top-5 left-5 right-5 z-40 flex items-center justify-between">

              {/* BADGE */}
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] uppercase tracking-[4px] font-medium"
              >
                Exclusive
              </motion.span>

              {/* HEART */}
              <motion.button
                whileHover={{
                  scale: 1.15,
                  rotate: 8,
                }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center transition duration-300"
              >

                <Heart size={18} className="text-white" />

              </motion.button>

            </div>

            {/* CENTER LOGO */}
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none">

              <motion.img
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src="/GymSwordlogo.png"
                alt="logo"
                className="w-24 md:w-32 opacity-95 object-contain drop-shadow-[0_0_60px_rgba(255,255,255,0.4)] group-hover:scale-110 transition duration-700"
              />

              <p className="mt-5 text-white/75 text-[10px] md:text-xs tracking-[6px] uppercase font-light">
                Confidential Release
              </p>

            </div>

            {/* BOTTOM CONTENT */}
            <div className="absolute bottom-0 left-0 w-full z-40 p-8">

              {/* <p className="text-white/60 text-[11px] tracking-[5px] uppercase mb-3 font-medium">
                {item.subtitle}
              </p> */}

              <h3 className="text-3xl md:text-4xl font-black text-white leading-[1.1] tracking-[-1.5px] group-hover:translate-y-[-2px] transition duration-500">
                {item.title}
              </h3>

              <p className="mt-4 text-white/75 text-sm md:text-base leading-relaxed font-light tracking-[0.3px]">
                {item.desc}
              </p>

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.96 }}
                className="
                  mt-7
                  px-8
                  py-3
                  rounded-full
                  bg-white
                  text-black
                  text-[11px]
                  uppercase
                  tracking-[3px]
                  font-bold
                  shadow-[0_10px_40px_rgba(255,255,255,0.25)]
                  hover:bg-black
                  hover:text-white
                  border
                  border-white/20
                  transition-all
                  duration-500
                "
              >
                Explore Preview
              </motion.button>

            </div>

          </motion.div>

        ))}

      </div>

    </div>
  );
}