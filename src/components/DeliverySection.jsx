import { motion } from "framer-motion";

{/* ================= PREMIUM DELIVERY (ULTRA CLEAN) ================= */}
<div className="py-28 bg-black text-white">

  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="max-w-5xl mx-auto px-6 text-center"
  >

    {/* TITLE */}
    <h2 className="text-4xl md:text-5xl font-semibold tracking-wide">
      Lightning Fast Delivery
    </h2>

    {/* SUBTEXT */}
    <p className="text-gray-400 mt-4 mb-16 max-w-2xl mx-auto">
      Get your orders delivered at lightning speed with real-time tracking,
      secure packaging, and guaranteed on-time delivery.
    </p>

    {/* BOX */}
    <div className="border border-white/10 rounded-2xl p-10 bg-white/[0.02] backdrop-blur-sm">

      {/* ROAD AREA */}
      <div className="relative h-24 flex items-center overflow-hidden">

        {/* base road line */}
        <div className="absolute bottom-6 w-full h-[1px] bg-white/20"></div>

        {/* moving trail line (follows truck) */}
        <motion.div
          className="absolute bottom-6 h-[1px] bg-white"
          initial={{ width: "0%", left: "0%" }}
          animate={{
            width: ["0%", "40%", "0%"],
            left: ["0%", "60%", "100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        />

        {/* MOVING TRUCK SVG */}
        <motion.div
          animate={{ x: ["-20%", "120%"] }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "linear",
          }}
          className="absolute bottom-2"
        >
          <svg
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          >
            <path d="M3 7h13v10H3z" />
            <path d="M16 10h3l2 3v4h-5z" />
            <circle cx="7.5" cy="18" r="1.5" />
            <circle cx="17.5" cy="18" r="1.5" />
          </svg>
        </motion.div>
      </div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">

        {[
          {
            title: "Fast Dispatch",
            desc: "Orders shipped within 24 hours.",
          },
          {
            title: "Live Tracking",
            desc: "Track your order in real-time.",
          },
          {
            title: "Safe Delivery",
            desc: "Secure packaging guaranteed.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-4 border border-white/10 rounded-xl hover:bg-white/[0.04] transition"
          >
            <h4 className="font-medium">{item.title}</h4>
            <p className="text-gray-400 text-sm mt-1">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </div>
    </div>

  </motion.div>
</div>