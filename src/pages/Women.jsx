import React from "react";

import { motion } from "framer-motion";

import WomenProducts from "../components/WomenProducts";

export default function Women() {

  return (

    <div className="w-full overflow-hidden bg-white">

      {/* ================================================= */}
      {/* HERO SECTION */}
      {/* ================================================= */}
      <section className="relative w-full h-[72vh] md:h-[78vh] overflow-hidden">

        {/* FULL BACKGROUND BANNER IMAGE */}
        <div className="absolute inset-0">

          {/* MAIN IMAGE */}
          <img
            src="/womenbanner.png"
            alt="Banner"
            className="w-full h-full object-cover"
          />

          {/* BLUR IMAGE */}
          <div className="absolute inset-0 scale-110 blur-[14px] opacity-50">

            <img
              src="/bannerwomen.png"
              alt="Blur Banner"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* GLASS BLUR */}
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>

        {/* LEFT SIDE BLUR */}
        <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-white/10 blur-[140px] rounded-full"></div>

        {/* RIGHT SIDE BLUR */}
        <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-white/10 blur-[140px] rounded-full"></div>

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col mt-4 justify-between">

          {/* TOP LOGO */}
          <div className="px-5 md:px-10 lg:px-14 pt-10 md:pt-12">

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="flex items-center gap-3"
            >

              {/* LOGO */}
              <div className="relative">

                {/* BLUR */}
                <div className="absolute inset-0 bg-white/30 blur-3xl rounded-full scale-[2]"></div>

                {/* LOGO IMAGE */}
                <img
                  src="/logofinal1.png"
                  alt="Logo"
                  className="relative z-10 w-8 h-8 md:w-10 md:h-10 object-cover rounded-full border border-white/20"
                />

              </div>

              {/* BRAND */}
              <h2 className="text-white text-base md:text-lg font-black tracking-[-1px]">

                GymSword

              </h2>

            </motion.div>

          </div>

          {/* BOTTOM LEFT CONTENT */}
          <div className="w-full flex justify-start items-end h-full px-5 md:px-10 lg:px-14 pb-8 md:pb-12">

            <div className="max-w-[520px]">

              {/* SMALL TAG */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                  duration: 1,
                }}
                className="relative inline-block mb-4"
              >

                <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-150"></div>

                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 text-white text-[8px] md:text-[9px] uppercase tracking-[3px] px-4 py-2 rounded-full">

                  Luxury Activewear

                </div>

              </motion.div>

              {/* TITLE */}
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                  duration: 1,
                }}
                className="text-white text-[24px] sm:text-[34px] md:text-[42px] lg:text-[56px] leading-[0.92] font-light tracking-[-2px]"
              >

                Find your space

              </motion.h1>

              {/* SUBTITLE */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                }}
                className="text-white/90 text-[11px] sm:text-sm md:text-base lg:text-lg font-light max-w-[500px] mt-3 leading-relaxed"
              >

                Looser styles with premium fabrics make
                more room for movement, comfort,
                confidence, and elevated performance.

              </motion.p>

              {/* BUTTONS */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.7,
                  duration: 1,
                }}
                className="flex flex-wrap gap-3 mt-5"
              >

                <button className="group relative overflow-hidden bg-white text-black px-5 md:px-6 py-3 rounded-full text-[11px] md:text-xs font-medium hover:text-white transition duration-500">

                  <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition duration-500"></span>

                  <span className="relative z-10">
                    Shop Collection
                  </span>

                </button>

                <button className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 md:px-6 py-3 rounded-full text-[11px] md:text-xs font-medium transition duration-500">

                  <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition duration-500"></span>

                  <span className="relative z-10 group-hover:text-black transition duration-500">

                    Explore Styles

                  </span>

                </button>

              </motion.div>

            </div>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* PREMIUM IMAGE SECTION */}
      {/* ================================================= */}
      <section className="bg-black py-3 md:py-5">

        <div className="grid md:grid-cols-2 gap-[2px]">

          {/* IMAGE 1 */}
          <div className="relative h-[420px] md:h-[650px] overflow-hidden group">

            {/* MAIN BACKGROUND IMAGE */}
            <img
              src="/womenfitness1.jpg"
              alt="Women Fitness"
              className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-[3000ms]"
            />

            {/* HEAVY BLUR IMAGE */}
            <div className="absolute inset-0 scale-[1.4] blur-[65px] opacity-90">

              <img
                src="/womenfitness1.jpg"
                alt="Blur"
                className="w-full h-full object-cover brightness-[0.6]"
              />

            </div>

            {/* DARK PREMIUM OVERLAY */}
            <div className="absolute inset-0 bg-black/65 backdrop-blur-[10px]"></div>

            {/* EXTRA LIGHT EFFECT */}
            <div className="absolute inset-0 flex items-center justify-center">

              <div className="w-[300px] h-[300px] bg-white/10 blur-[150px] rounded-full"></div>

            </div>

            {/* CENTER LOGO */}
            <div className="absolute inset-0 flex items-center justify-center z-20">

              <div className="relative flex items-center justify-center">

                {/* MAIN GLOW */}
                <div className="absolute w-[220px] h-[220px] bg-white/30 blur-[180px] rounded-full"></div>

                {/* SECOND GLOW */}
                <div className="absolute w-[160px] h-[160px] bg-white/20 blur-[120px] rounded-full"></div>

                {/* LOGO */}
                <img
                  src="/logofinal1.png"
                  alt="Logo"
                  className="relative z-10 w-24 md:w-32 opacity-95 drop-shadow-[0_0_35px_rgba(255,255,255,0.6)]"
                />

              </div>

            </div>

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 p-6 md:p-10 z-30">

              <p className="text-white/70 uppercase tracking-[4px] text-[10px] md:text-xs mb-4">

                GymSword Exclusive

              </p>

              <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-black tracking-[-3px] max-w-[500px] leading-none">

                Coming Soon

              </h2>

              <p className="text-white/70 mt-4 max-w-[400px] text-sm md:text-base leading-relaxed">

                New luxury activewear collection built for confidence and performance.

              </p>

            </div>

          </div>

          {/* IMAGE 2 */}
          <div className="relative h-[420px] md:h-[650px] overflow-hidden group">

            {/* MAIN BACKGROUND IMAGE */}
            <img
              src="/womenfitness2.jpg"
              alt="Women Fitness"
              className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-[3000ms]"
            />

            {/* HEAVY BLUR IMAGE */}
            <div className="absolute inset-0 scale-[1.4] blur-[65px] opacity-90">

              <img
                src="/womenfitness2.jpg"
                alt="Blur"
                className="w-full h-full object-cover brightness-[0.6]"
              />

            </div>

            {/* DARK PREMIUM OVERLAY */}
            <div className="absolute inset-0 bg-black/65 backdrop-blur-[10px]"></div>

            {/* EXTRA LIGHT EFFECT */}
            <div className="absolute inset-0 flex items-center justify-center">

              <div className="w-[300px] h-[300px] bg-white/10 blur-[150px] rounded-full"></div>

            </div>

            {/* CENTER LOGO */}
            <div className="absolute inset-0 flex items-center justify-center z-20">

              <div className="relative flex items-center justify-center">

                {/* MAIN GLOW */}
                <div className="absolute w-[220px] h-[220px] bg-white/30 blur-[180px] rounded-full"></div>

                {/* SECOND GLOW */}
                <div className="absolute w-[160px] h-[160px] bg-white/20 blur-[120px] rounded-full"></div>

                {/* LOGO */}
                <img
                  src="/logofinal1.png"
                  alt="Logo"
                  className="relative z-10 w-24 md:w-32 opacity-95 drop-shadow-[0_0_35px_rgba(255,255,255,0.6)]"
                />

              </div>

            </div>

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 p-6 md:p-10 z-30">

              <p className="text-white/70 uppercase tracking-[4px] text-[10px] md:text-xs mb-4">

                Premium Sportswear

              </p>

              <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-black tracking-[-3px] max-w-[500px] leading-none">

                Luxury Drop Soon

              </h2>

              <p className="text-white/70 mt-4 max-w-[400px] text-sm md:text-base leading-relaxed">

                Elevate your training experience with premium GymSword essentials.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PRODUCTS */}
      <WomenProducts />

    </div>
  );
}