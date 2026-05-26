import React, { useState } from "react";
import { motion } from "framer-motion";

const JoinMovementCTA = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    const name = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const country = document.getElementById("country").value;

    if (!name || !email || !phone || !country) {
      alert("Please fill all details.");
      return;
    }

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <>
      <section className="relative z-10 px-4 sm:px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto relative"
        >
          {/* MAIN CARD */}
          <div className="relative overflow-hidden rounded-[45px] border border-white/10 bg-white/[0.05] backdrop-blur-[35px] px-6 sm:px-10 md:px-16 py-16 md:py-24 shadow-[0_0_120px_rgba(168,85,247,0.12)]">

            {/* BG TEXT */}
            <h1 className="absolute inset-0 flex items-center justify-center text-[80px] md:text-[180px] font-black text-white/[0.02] tracking-[-10px] pointer-events-none">
              NOW
            </h1>

            {/* GLOW */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

            {/* CONTENT */}
            <div className="relative z-10">

              {/* HEADING */}
              <div className="text-center">
                <h2 className="text-5xl md:text-7xl font-black tracking-[-4px]">
                  THE MOVEMENT

                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                    STARTS NOW
                  </span>
                </h2>

                <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-[22px] leading-[2] mt-10">
                  Join the next generation of luxury activewear culture.
                  Become an early member of GYM SWORD and get exclusive
                  launch access, premium founder benefits, limited drops,
                  and insider updates before the public launch.
                </p>
              </div>

              {/* FORM */}
              <div className="mt-16">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  {/* FULL NAME */}
                  <div>
                    <label className="text-sm text-gray-400 mb-3 block uppercase tracking-[2px]">
                      Full Name
                    </label>

                    <input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full h-[60px] px-6 rounded-[20px] bg-white/[0.05] border border-white/10 outline-none text-white placeholder:text-gray-500 focus:border-purple-500/40 transition-all duration-500"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="text-sm text-gray-400 mb-3 block uppercase tracking-[2px]">
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full h-[60px] px-6 rounded-[20px] bg-white/[0.05] border border-white/10 outline-none text-white placeholder:text-gray-500 focus:border-purple-500/40 transition-all duration-500"
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="text-sm text-gray-400 mb-3 block uppercase tracking-[2px]">
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      placeholder="Enter your number"
                      className="w-full h-[60px] px-6 rounded-[20px] bg-white/[0.05] border border-white/10 outline-none text-white placeholder:text-gray-500 focus:border-purple-500/40 transition-all duration-500"
                    />
                  </div>

                  {/* COUNTRY */}
                  <div>
                    <label className="text-sm text-gray-400 mb-3 block uppercase tracking-[2px]">
                      Country
                    </label>

                    <input
                      id="country"
                      type="text"
                      placeholder="Your country"
                      className="w-full h-[60px] px-6 rounded-[20px] bg-white/[0.05] border border-white/10 outline-none text-white placeholder:text-gray-500 focus:border-purple-500/40 transition-all duration-500"
                    />
                  </div>

                  {/* FITNESS TYPE */}
               {/* INTEREST TYPE */}
<div className="md:col-span-2">
  <label className="text-sm text-gray-400 mb-3 block uppercase tracking-[2px]">
    Your Fashion Interest
  </label>

  <select
    className="w-full h-[60px] px-6 rounded-[20px] bg-black border border-white/10 outline-none text-white focus:border-purple-500/40 transition-all duration-500"
  >
    <option>Luxury Streetwear</option>

    <option>Oversized Fashion</option>

    <option>Minimal Fashion</option>

    <option>Premium Activewear</option>

    <option>Sneakers & Footwear</option>

    <option>Luxury Accessories</option>

    <option>Designer Fashion</option>

    <option>Fashion Content Creator</option>

    <option>Model / Influencer</option>

    <option>Modern Lifestyle Fashion</option>

    <option>Casual Wear</option>

    <option>Limited Edition Drops</option>

    <option>Luxury Gym Wear</option>

    <option>Fashion Enthusiast</option>
  </select>
</div>

                  {/* MESSAGE */}
                  <div className="md:col-span-2">
                    <label className="text-sm text-gray-400 mb-3 block uppercase tracking-[2px]">
                      Why Do You Want To Join?
                    </label>

                    <textarea
                      rows="5"
                      placeholder="Tell us about your mindset, fitness journey, or why you want to join GYM SWORD..."
                      className="w-full px-6 py-5 rounded-[25px] bg-white/[0.05] border border-white/10 outline-none text-white placeholder:text-gray-500 resize-none focus:border-purple-500/40 transition-all duration-500"
                    ></textarea>
                  </div>
                </div>

                {/* CHECKBOX */}
                <div className="flex items-start gap-3 mt-8">
                  <input
                    type="checkbox"
                    className="mt-1 accent-purple-500"
                  />

                  <p className="text-gray-400 text-sm leading-[1.8]">
                    I agree to receive launch updates, exclusive offers,
                    premium drop notifications, and future GYM SWORD news.
                  </p>
                </div>

                {/* BUTTON */}
                <button
                  onClick={handleSubmit}
                  className="group relative overflow-hidden mt-10 w-full h-[65px] rounded-[22px] bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 hover:scale-[1.01] transition-all duration-700 shadow-[0_0_60px_rgba(168,85,247,0.35)] font-semibold tracking-[1px] text-white text-lg"
                >
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-all duration-500"></div>

                  <span className="relative z-10">
                    JOIN THE WAITLIST
                  </span>
                </button>

              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">

          <div className="relative max-w-md w-full rounded-[35px] border border-white/10 bg-black p-8 text-center overflow-hidden">

            <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-purple-500/20 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-blue-500/20 blur-[120px] rounded-full"></div>

            <div className="relative z-10">

              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-4xl shadow-[0_0_50px_rgba(168,85,247,0.45)]">
                ✓
              </div>

              <h2 className="text-3xl font-black mt-8">
                Thank You!
              </h2>

              <p className="text-gray-300 mt-4 leading-[2]">
                Your details have been submitted successfully.
                Welcome to the GYM SWORD movement.
              </p>

              <button
                onClick={() => setShowPopup(false)}
                className="mt-8 h-[55px] px-8 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JoinMovementCTA;