import React from "react";
import { motion } from "framer-motion";
import JoinMovementCTA from "../components/JoinMovementCTA";

const JoinWaitlist = () => {
  return (
    <div
      id="join-waitlist"
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pink-500/10 blur-[180px] rounded-full"></div>
      </div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* HERO */}
      <section className="relative z-10 px-4 sm:px-6 pt-40 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto text-center"
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-purple-500/20 bg-white/[0.05] backdrop-blur-2xl shadow-[0_0_40px_rgba(168,85,247,0.12)] mb-10">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse"></div>

            <span className="text-[11px] uppercase tracking-[5px] text-gray-200 font-semibold">
              Exclusive Early Access
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[120px] font-black tracking-[-5px] md:tracking-[-8px] leading-[0.9]">
            JOIN THE

            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow-[0_0_50px_rgba(168,85,247,0.45)]">
              FOUNDING
            </span>
            COMMUNITY
          </h1>

          {/* DESC */}
          <p className="max-w-4xl mx-auto text-gray-300 text-[16px] sm:text-lg md:text-[22px] leading-[2] mt-12">
            Be among the first to experience the next generation
            of luxury activewear, performance culture,
            and modern warrior identity.
            <br />
            Unlock founder pricing, limited drops,
            and exclusive launch access.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-14">
            <button className="group relative overflow-hidden h-[64px] px-10 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 hover:scale-105 transition-all duration-700 shadow-[0_0_60px_rgba(168,85,247,0.45)] font-semibold tracking-wide text-white">
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-all duration-500"></div>

              <span className="relative z-10">
                Reserve Your Spot
              </span>
            </button>

            <button className="h-[64px] px-10 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-2xl hover:border-purple-500/30 hover:bg-white/[0.08] transition-all duration-500 text-gray-200">
              Explore The Movement
            </button>
          </div>

          {/* SOCIAL PROOF */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-24">
            {[
              {
                number: "12K+",
                label: "Waitlist Members",
                color: "text-purple-400",
              },
              {
                number: "50+",
                label: "Creators Joining",
                color: "text-blue-400",
              },
              {
                number: "Worldwide",
                label: "Launching Soon",
                color: "text-pink-400",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-[35px] border border-white/10 bg-white/[0.04] backdrop-blur-[25px] p-8 shadow-[0_0_60px_rgba(255,255,255,0.03)]"
              >
                <h2 className={`text-5xl font-black ${item.color}`}>
                  {item.number}
                </h2>

                <p className="text-gray-400 mt-4 uppercase tracking-[3px] text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PRODUCT PREVIEW */}
      <section className="relative z-10 px-4 sm:px-6 py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute top-0 left-0 w-full h-full opacity-[0.05]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 800"
            fill="none"
          >
            <path
              d="M0 300C200 200 400 500 720 350C1040 200 1240 450 1440 300"
              stroke="white"
              strokeWidth="2"
            />

            <path
              d="M0 500C250 350 500 700 800 520C1100 340 1250 600 1440 450"
              stroke="white"
              strokeWidth="2"
            />
          </svg>

          <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* HEADING */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-2xl mb-8">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse"></div>

              <span className="text-[11px] uppercase tracking-[5px] text-gray-300 font-semibold">
                Upcoming Collection
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-[-5px] leading-[0.9]">
              FUTURE

              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                DROPS
              </span>
            </h2>

            <p className="max-w-3xl mx-auto text-gray-400 text-lg md:text-[20px] leading-[2] mt-10">
              Designed for elite performance, luxury aesthetics,
              and modern warrior culture.
            </p>
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="relative z-10 px-4 sm:px-6 py-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-[-4px]">
              WHY JOIN

              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                EARLY?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                title: "Early Access",
                color: "text-purple-400",
              },
              {
                title: "Founder Pricing",
                color: "text-blue-400",
              },
              {
                title: "Limited Drops",
                color: "text-pink-400",
              },
              {
                title: "Elite Community",
                color: "text-yellow-400",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-[35px] bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                <div className="relative rounded-[35px] border border-white/10 bg-white/[0.04] backdrop-blur-[25px] p-8 hover:-translate-y-3 transition-all duration-700 shadow-[0_0_60px_rgba(255,255,255,0.03)]">
                  <div className={`w-20 h-20 rounded-[28px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl flex items-center justify-center mb-8 ${item.color}`}>
                    <div className="w-5 h-5 rounded-full bg-current"></div>
                  </div>

                  <h3 className={`text-3xl font-black mb-4 ${item.color}`}>
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <JoinMovementCTA />
    </div>
  );
};

export default JoinWaitlist;