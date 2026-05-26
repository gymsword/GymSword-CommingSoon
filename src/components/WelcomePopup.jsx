import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const WelcomePopup = () => {

  const [showPopup, setShowPopup] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
    });

  // ====================================
  // SHOW POPUP
  // ====================================
  useEffect(() => {

    const alreadyClosed =
      sessionStorage.getItem(
        "gymsword-popup-closed"
      );

    if (!alreadyClosed) {

      const timer = setTimeout(() => {

        setShowPopup(true);

      }, 1500);

      return () =>
        clearTimeout(timer);
    }

  }, []);

  // ====================================
  // CLOSE POPUP
  // ====================================
  const closePopup = () => {

    setShowPopup(false);

    sessionStorage.setItem(
      "gymsword-popup-closed",
      "true"
    );
  };

  // ====================================
  // HANDLE CHANGE
  // ====================================
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // ====================================
  // SUBMIT
  // ====================================
  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone
    ) {

      toast.error(
        "Please fill all details"
      );

      return;
    }

    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      logo:
        "https://i.ibb.co/p6WN3c2f/logo1.jpg",
      website_link:
        "https://yourwebsite.com",
      to_email: formData.email,
    };

    try {

      await emailjs.send(
        "service_6jp5onb",
        "template_xjspmg1",
        templateParams,
        "h9_RDuAm4JbnT1SKO"
      );

      await emailjs.send(
        "service_6jp5onb",
        "template_svzorvd",
        {
          from_name:
            formData.name,
          from_email:
            formData.email,
          phone:
            formData.phone,
          logo:
            "https://i.ibb.co/p6WN3c2f/logo1.jpg",
          to_email:
            "gymsword2024@gmail.com",
        },
        "h9_RDuAm4JbnT1SKO"
      );

      toast.success(
        "Welcome to GymSword 🔥"
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
      });

      setTimeout(() => {

        closePopup();

      }, 2000);

    } catch (error) {

      console.log(error);

      toast.error(
        "Something went wrong"
      );

    } finally {

      setLoading(false);

    }
  };

  if (!showPopup) return null;

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
      />

      {/* OVERLAY */}
      <div
        className="
          fixed inset-0 z-[999999]
          flex items-center justify-center
          bg-black/85
          backdrop-blur-md
          p-2 sm:p-4 md:p-6
          overflow-y-auto
        "
      >

        {/* POPUP */}
        <div
          className="
            relative
            w-full
            max-w-[98vw]
            sm:max-w-2xl
            md:max-w-4xl
            lg:max-w-5xl
            xl:max-w-6xl

            max-h-[95vh]
            overflow-y-auto

            rounded-[18px]
            sm:rounded-[24px]
            md:rounded-[30px]
            lg:rounded-[36px]

            border border-white/10
            bg-black

            shadow-[0_0_60px_rgba(255,255,255,0.08)]
          "
        >

          {/* CLOSE BUTTON */}
          <button
            onClick={closePopup}
            className="
              absolute
              top-2 right-2
              sm:top-4 sm:right-4
              md:top-5 md:right-5

              z-[9999]

              flex items-center justify-center

              h-10 w-10
              sm:h-11 sm:w-11

              rounded-full

              bg-white
              text-black

              border border-zinc-200
              shadow-xl

              transition-all
              duration-300

              hover:scale-110
              hover:bg-black
              hover:text-white
            "
          >

            <X
              size={20}
              strokeWidth={2.5}
            />

          </button>

          {/* GRID */}
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
            "
          >

            {/* LEFT */}
            <div
              className="
                flex flex-col justify-center

                p-5
                sm:p-7
                md:p-10
                lg:p-14

                text-white
              "
            >

              {/* LOGO */}
              <div
                className="
                  mb-6
                  flex items-center gap-3
                  sm:gap-4
                "
              >

                <img
                  src="/Logofinal.jpeg"
                  alt="GymSword"
                  className="
                    h-12 w-12
                    sm:h-14 sm:w-14
                    md:h-16 md:w-16

                    rounded-full
                    object-cover

                    border border-white/20
                  "
                />

                <div>

                  <h1
                    className="
                      text-2xl
                      sm:text-3xl
                      md:text-4xl

                      font-black
                      uppercase
                      tracking-wide
                    "
                  >
                    GymSword
                  </h1>

                  <p
                    className="
                      mt-1

                      text-[9px]
                      sm:text-[11px]

                      uppercase
                      tracking-[3px]
                      sm:tracking-[4px]

                      text-zinc-400
                    "
                  >
                    Luxury Performance
                  </p>

                </div>

              </div>

              {/* HEADING */}
              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl

                  font-black
                  leading-tight
                "
              >
                Unlock Your

                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-white
                    to-zinc-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  Elite Identity
                </span>

              </h2>

              {/* DESC */}
              <p
                className="
                  mt-5

                  text-sm
                  sm:text-base
                  lg:text-lg

                  leading-6
                  sm:leading-7

                  text-zinc-300
                  max-w-xl
                "
              >
                Premium activewear for
                athletes, creators,
                entrepreneurs and
                disciplined individuals
                who believe fitness is a
                lifestyle.
              </p>

              {/* TAGS */}
              <div
                className="
                  mt-6
                  flex flex-wrap
                  gap-2 sm:gap-3
                "
              >

                {[
                  "Premium Quality",
                  "Anti-Odour Fabric",
                  "Luxury Streetwear",
                ].map((tag) => (

                  <div
                    key={tag}
                    className="
                      rounded-full
                      border border-white/10
                      bg-white/5

                      px-4 py-2
                      sm:px-5 sm:py-2.5

                      text-[10px]
                      sm:text-xs

                      text-zinc-300
                      whitespace-nowrap
                    "
                  >
                    {tag}
                  </div>

                ))}

              </div>

            </div>

            {/* RIGHT */}
            <div
              className="
                bg-white

                p-5
                sm:p-7
                md:p-10
                lg:p-14
              "
            >

              {/* TOP */}
              <div className="mb-6 sm:mb-8">

                <h3
                  className="
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl

                    font-black
                    text-black
                    leading-tight
                  "
                >
                  Join GymSword
                </h3>

                <p
                  className="
                    mt-2

                    text-sm
                    sm:text-base

                    text-zinc-600
                  "
                >
                  Get launch updates,
                  exclusive drops and
                  early access.
                </p>

              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="
                  space-y-4
                  sm:space-y-5
                "
              >

                {/* NAME */}
                <div>

                  <label
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-zinc-700
                    "
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="
                      h-12
                      sm:h-14

                      w-full

                      rounded-xl
                      sm:rounded-2xl

                      border
                      border-zinc-300

                      bg-zinc-100

                      px-4 sm:px-5

                      text-sm

                      outline-none

                      transition-all

                      focus:border-black
                      focus:bg-white
                    "
                  />

                </div>

                {/* EMAIL */}
                <div>

                  <label
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-zinc-700
                    "
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="
                      h-12
                      sm:h-14

                      w-full

                      rounded-xl
                      sm:rounded-2xl

                      border
                      border-zinc-300

                      bg-zinc-100

                      px-4 sm:px-5

                      text-sm

                      outline-none

                      transition-all

                      focus:border-black
                      focus:bg-white
                    "
                  />

                </div>

                {/* PHONE */}
                <div>

                  <label
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-zinc-700
                    "
                  >
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="
                      h-12
                      sm:h-14

                      w-full

                      rounded-xl
                      sm:rounded-2xl

                      border
                      border-zinc-300

                      bg-zinc-100

                      px-4 sm:px-5

                      text-sm

                      outline-none

                      transition-all

                      focus:border-black
                      focus:bg-white
                    "
                  />

                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    h-12
                    sm:h-14

                    w-full

                    rounded-xl
                    sm:rounded-2xl

                    bg-black

                    px-6

                    text-xs
                    sm:text-sm

                    font-bold
                    uppercase

                    tracking-[2px]
                    sm:tracking-[3px]

                    text-white

                    transition-all
                    duration-300

                    hover:scale-[1.01]
                    hover:bg-zinc-800
                  "
                >
                  {loading
                    ? "Please Wait..."
                    : "Join The Movement"}
                </button>

              </form>

              {/* FOOTER */}
              <p
                className="
                  mt-5

                  text-center

                  text-[10px]
                  sm:text-[11px]

                  leading-5

                  text-zinc-500
                "
              >
                By continuing you agree
                to receive updates,
                launches and exclusive
                GymSword offers.
              </p>

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default WelcomePopup;