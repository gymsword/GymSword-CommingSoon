import React, { useState } from "react";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      formData.email === "gymsword2024@gmail.com" &&
      formData.password === "#Sword@2024"
    ) {

      localStorage.setItem(
        "adminToken",
        "admin-token"
      );

      navigate("/admin/dashboard");

    } else {

      setError("Invalid Email or Password");

    }
  };

  return (
    <div
      className="
        min-h-screen
        bg-[#f5f5f5]
        flex
        items-center
        justify-center
        px-4
        relative
        overflow-hidden
      "
    >

      {/* BACKGROUND */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="
          absolute
          w-[350px]
          h-[350px]
          bg-zinc-300
          rounded-full
          blur-3xl
          opacity-30
        "
      ></motion.div>

      {/* CARD */}
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
        whileHover={{
          y: -5,
        }}
        className="
          relative
          w-full
          max-w-[380px]
          bg-white
          border
          border-zinc-200
          rounded-[28px]
          shadow-xl
          p-6
          sm:p-7
        "
      >

        {/* LOGO */}
        <div className="text-center mb-8">

          <motion.div
            whileHover={{
              scale: 1.05,
              rotate: 3,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            className="
              w-20
              h-20
              mx-auto
              rounded-full
              border
              border-zinc-200
              bg-white
              overflow-hidden
              flex
              items-center
              justify-center
              shadow-md
              mb-4
            "
          >

            <img
              src="/logofinal1.png"
              alt="GYMSWORD Logo"
              className="
                w-full
                h-full
                object-cover
              "
            />

          </motion.div>

          <motion.h1
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
            }}
            className="
              text-black
              text-2xl
              sm:text-3xl
              font-bold
              tracking-[4px]
            "
          >
            GYMSWORD
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
            }}
            className="
              text-zinc-500
              mt-2
              text-xs
              tracking-[3px]
              uppercase
            "
          >
            Identity to modern warriors
          </motion.p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* EMAIL */}
          <div>

            <label
              className="
                text-zinc-600
                text-xs
                mb-2
                block
                uppercase
                tracking-[2px]
              "
            >
              Email Address
            </label>

            <motion.input
              whileFocus={{
                scale: 1.01,
              }}
              whileHover={{
                scale: 1.01,
              }}
              type="email"
              name="email"
              placeholder="Enter admin email"
              value={formData.email}
              onChange={handleChange}
              className="
                w-full
                bg-zinc-100
                border
                border-zinc-200
                focus:border-black
                text-black
                px-4
                py-3
                rounded-2xl
                outline-none
                transition-all
                duration-300
                text-sm
                placeholder:text-zinc-400
              "
            />

          </div>

          {/* PASSWORD */}
          <div>

            <label
              className="
                text-zinc-600
                text-xs
                mb-2
                block
                uppercase
                tracking-[2px]
              "
            >
              Password
            </label>

            <motion.input
              whileFocus={{
                scale: 1.01,
              }}
              whileHover={{
                scale: 1.01,
              }}
              type="password"
              name="password"
              placeholder="Enter admin password"
              value={formData.password}
              onChange={handleChange}
              className="
                w-full
                bg-zinc-100
                border
                border-zinc-200
                focus:border-black
                text-black
                px-4
                py-3
                rounded-2xl
                outline-none
                transition-all
                duration-300
                text-sm
                placeholder:text-zinc-400
              "
            />

          </div>

          {/* ERROR */}
          {error && (

            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                bg-zinc-100
                border
                border-zinc-200
                text-zinc-700
                text-sm
                rounded-2xl
                py-3
                px-4
                text-center
              "
            >
              {error}
            </motion.div>

          )}

          {/* BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            type="submit"
            className="
              w-full
              bg-black
              hover:bg-zinc-800
              text-white
              font-semibold
              py-3.5
              rounded-2xl
              transition-all
              duration-300
              tracking-[2px]
              uppercase
              text-sm
              shadow-lg
            "
          >
            Login
          </motion.button>

        </form>

        {/* FOOTER */}
        <div className="mt-8 text-center">

          <div
            className="
              w-full
              h-[1px]
              bg-zinc-200
              mb-4
            "
          ></div>

          <p
            className="
              text-zinc-400
              text-[11px]
              tracking-[3px]
              uppercase
            "
          >
            © 2026 Gymsword Admin
          </p>

        </div>

      </motion.div>

    </div>
  );
}