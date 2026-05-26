import React, { useState, useEffect } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  User,
  Heart,
  ShoppingBag,
  Search,
  ChevronDown,
  Globe,
  Menu,
  X,
} from "lucide-react";

import { products } from "../data/data";

import { useCart } from "../context/CartContext";

export default function Navbar() {

  const [search, setSearch] =
    useState("");

  const [openMenu, setOpenMenu] =
    useState(false);

  const [mobileMenu,
    setMobileMenu] =
    useState(false);

  const [user, setUser] =
    useState(null);

  const [openUserMenu,
    setOpenUserMenu] =
    useState(false);

  const navigate = useNavigate();

  const {
    cart = [],
    wishlist = [],
    addToCart,
  } = useCart();

  // USER
  useEffect(() => {

    const loadUser = () => {

      const savedUser =
        localStorage.getItem(
          "user"
        );

      if (savedUser) {

        setUser(
          JSON.parse(savedUser)
        );

      } else {

        setUser(null);

      }
    };

    loadUser();

    window.addEventListener(
      "storage",
      loadUser
    );

    return () => {

      window.removeEventListener(
        "storage",
        loadUser
      );

    };

  }, []);

  // AUTO CLOSE USER MENU
  useEffect(() => {

    let timer;

    if (openUserMenu) {

      timer = setTimeout(() => {

        setOpenUserMenu(false);

      }, 3000);

    }

    return () => {

      clearTimeout(timer);

    };

  }, [openUserMenu]);

  // AUTO CLOSE COLLECTION MENU
  useEffect(() => {

    let timer;

    if (openMenu) {

      timer = setTimeout(() => {

        setOpenMenu(false);

      }, 3000);

    }

    return () => {

      clearTimeout(timer);

    };

  }, [openMenu]);

  // AUTO CLOSE MOBILE MENU
  useEffect(() => {

    let timer;

    if (mobileMenu) {

      timer = setTimeout(() => {

        setMobileMenu(false);

      }, 2000);

    }

    return () => {

      clearTimeout(timer);

    };

  }, [mobileMenu]);

  // SEARCH
  const filteredProducts =
    products.filter((item) =>

      (item.title ||
        item.name)
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  // MOBILE MENU CLOSE
  const handleMobileClose = () => {

    setMobileMenu(false);

  };

  // PRODUCT PAGE NAVIGATION
  const handleProductPage = (id) => {

    navigate(`/product/${id}`);

    setSearch("");

  };

  return (

    <div className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">

      {/* TOP HELP BAR */}
    <div className="hidden md:flex justify-center items-center text-[12px] border-b border-gray-100 py-2 bg-[#f8f8f8] text-gray-700">

  <p>
    Need help? Chat with us on{" "}

    <a
      href="https://wa.me/918799756074"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold underline cursor-pointer hover:opacity-70"
    >
      WhatsApp
    </a>
  </p>

</div>

      {/* TOP RIGHT BAR */}
      <div className="hidden xl:flex justify-end items-center gap-8 2xl:gap-10 px-8 2xl:px-14 py-3 text-[13px] border-b border-gray-100 text-gray-800 font-medium">

        <Link
          to="/"
          className="cursor-pointer hover:text-black transition"
        >
          Track Order & Return
        </Link>

        <Link
          to="/register"
          className="cursor-pointer hover:text-black transition"
        >
          Email Signup
        </Link>

        <Link
          to="/f"
          className="cursor-pointer hover:text-black transition"
        >
          Stores
        </Link>

        <div className="flex items-center gap-2 cursor-pointer">

          <Globe size={16} />

          <span>India (INR)</span>

        </div>

      </div>

      {/* MAIN NAVBAR */}
      <div className="w-full px-3 sm:px-5 lg:px-8 2xl:px-12">

        <div className="h-[68px] sm:h-[72px] md:h-[76px] flex items-center justify-between gap-3 transition-all duration-500">

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() =>
              setMobileMenu(
                !mobileMenu
              )
            }
            className="lg:hidden flex-shrink-0 transition-all duration-300 hover:scale-110"
          >

            {mobileMenu ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}

          </button>

          {/* LEFT MENU */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7 2xl:gap-8 text-[12px] xl:text-[13px] 2xl:text-[14px] font-semibold tracking-wide text-black flex-shrink-0">

            <Link
              to="/women"
              className="hover:opacity-60 transition-all duration-300 whitespace-nowrap"
            >
              WOMEN
            </Link>

            <Link
              to="/menswear"
              className="hover:opacity-60 transition-all duration-300 whitespace-nowrap"
            >
              MEN
            </Link>

 <div className="flex flex-col leading-none">

                <h1 className="text-[19px] sm:text-[24px] xl:text-[34px] 2xl:text-[40px] font-black tracking-[-1px] text-black whitespace-nowrap">

Warrior Spirit                </h1>

                <span className="text-[7px] sm:text-[9px] uppercase tracking-[4px] text-gray-400 mt-1">

                  Coming Soon

                </span>

              </div>
            {/* COLLECTION */}
            {/* <div className="relative">

              <div
                onClick={() =>
                  setOpenMenu(!openMenu)
                }
                className="flex items-center gap-1 cursor-pointer hover:opacity-60 transition-all duration-300 whitespace-nowrap"
              >

                ACCESSORIES

                <ChevronDown
                  size={14}
                  className={`transition duration-300 ${
                    openMenu
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </div>

              {openMenu && (

                <div className="absolute top-9 left-0 w-60 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-5 space-y-4 z-50">

                  <p className="hover:text-black text-gray-600 cursor-pointer transition-all duration-300">
                    Premium T-Shirts
                  </p>

                  <p className="hover:text-black text-gray-600 cursor-pointer transition-all duration-300">
                    Gym Hoodies
                  </p>

                  <p className="hover:text-black text-gray-600 cursor-pointer transition-all duration-300">
                    Shoes Collection
                  </p>

                  <p className="hover:text-black text-gray-600 cursor-pointer transition-all duration-300">
                    Watches & Lifestyle
                  </p>

                  <p className="hover:text-black text-gray-600 cursor-pointer transition-all duration-300">
                    Bags & Accessories
                  </p>

                </div>
              )}

            </div> */}

          </div>

          {/* CENTER LOGO */}
          <div className="flex items-center justify-center flex-1 min-w-0">

            <Link
              to="/"
              className="flex items-center gap-2 hover:opacity-85 transition-all duration-300"
            >

              {/* LOGO */}
              <div className="relative flex-shrink-0">

                <div className="absolute inset-0 bg-black/10 blur-2xl rounded-full scale-[2]"></div>

                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-100 blur-xl rounded-full scale-[2.2] opacity-70"></div>

                <img
                  src="/logofinal1.png"
                  alt="GymSword Logo"
                  className="relative z-10 w-9 h-9 sm:w-10 sm:h-10 xl:w-11 xl:h-11 object-cover rounded-full"
                />

              </div>

              {/* BRAND NAME */}
              <div className="flex flex-col leading-none">

                <h1 className="text-[19px] sm:text-[24px] xl:text-[34px] 2xl:text-[40px] font-black tracking-[-1px] text-black whitespace-nowrap">

                  GymSword

                </h1>

                <span className="text-[7px] sm:text-[9px] uppercase tracking-[4px] text-gray-400 mt-1">

                  Coming Soon

                </span>

              </div>

            </Link>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center justify-end gap-2 sm:gap-4 xl:gap-5 flex-shrink-0">

            {/* SEARCH */}
            <div className="hidden md:flex relative items-center border border-gray-200 rounded-full px-4 h-[42px] lg:h-[46px] w-[170px] lg:w-[220px] xl:w-[270px] 2xl:w-[340px] bg-[#fafafa] transition-all duration-300 focus-within:shadow-lg">

              <Search
                size={16}
                className="text-gray-500 flex-shrink-0"
              />

              <input
                type="text"
                placeholder="Search..."
                className="w-full outline-none bg-transparent px-3 text-[13px]"
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
              />

            </div>

            {/* USER */}
            <div className="relative flex items-center gap-2">

              <User
                size={22}
                onClick={() =>
                  setOpenUserMenu(
                    !openUserMenu
                  )
                }
                className="cursor-pointer hover:scale-110 transition-all duration-300"
              />

              {!user && (

                <span className="hidden 2xl:block text-[13px] font-medium whitespace-nowrap">

                  Sign In

                </span>

              )}

              {openUserMenu && (

                <div className="absolute right-0 top-12 bg-white/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-200 rounded-[24px] p-4 w-56 z-50">

                  {!user ? (

                    <>
                      <Link
                        to="/login"
                        className="block text-sm mb-3 hover:text-black font-medium transition-all duration-300"
                      >
                        Login
                      </Link>

                      <Link
                        to="/register"
                        className="block text-sm hover:text-black font-medium transition-all duration-300"
                      >
                        Register
                      </Link>
                    </>

                  ) : (

                    <>
                      <p className="text-sm font-semibold mb-3 border-b pb-3">

                        {user.name ||
                          user.email}

                      </p>

                      <button
                        onClick={() => {

                          navigate(
                            "/account"
                          );

                          setOpenUserMenu(false);

                        }}
                        className="block text-sm mb-3 hover:text-black transition-all duration-300"
                      >
                        My Account
                      </button>

                      <button
                        onClick={() => {

                          navigate(
                            "/orders"
                          );

                          setOpenUserMenu(false);

                        }}
                        className="block text-sm mb-3 hover:text-black transition-all duration-300"
                      >
                        My Orders
                      </button>

                      <button
                        onClick={() => {

                          localStorage.removeItem(
                            "user"
                          );

                          setUser(null);

                          window.dispatchEvent(
                            new Event("storage")
                          );

                          setOpenUserMenu(false);

                          navigate("/login");

                        }}
                        className="text-red-500 text-sm hover:opacity-70 transition-all duration-300"
                      >
                        Logout
                      </button>

                    </>
                  )}

                </div>
              )}

            </div>

            {/* WISHLIST */}
            <Link
              to="/wishlist"
              className="relative"
            >

              <Heart className="w-5 h-5 xl:w-6 xl:h-6 cursor-pointer hover:scale-110 transition-all duration-300" />

              {wishlist.length > 0 && (

                <span className="absolute -top-2 -right-2 bg-black text-white text-[9px] px-1.5 py-[1px] rounded-full">

                  {wishlist.length}

                </span>
              )}

            </Link>

            {/* CART */}
            <Link
              to="/cart"
              className="relative"
            >

              <ShoppingBag className="w-5 h-5 xl:w-6 xl:h-6 cursor-pointer hover:scale-110 transition-all duration-300" />

              {cart.length > 0 && (

                <span className="absolute -top-2 -right-2 bg-black text-white text-[9px] px-1.5 py-[1px] rounded-full">

                  {cart.length}

                </span>
              )}

            </Link>

          </div>

        </div>

      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (

        <div className="lg:hidden border-t bg-white px-5 py-5 space-y-5 text-sm font-semibold shadow-2xl">

          {/* MOBILE SEARCH */}
          <div className="flex items-center border border-gray-300 rounded-full px-4 h-[46px] bg-[#fafafa]">

            <Search
              size={16}
              className="text-gray-500"
            />

            <input
              type="text"
              placeholder="Search..."
              className="w-full outline-none bg-transparent px-3 text-sm"
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
            />

          </div>

          <Link
            to="/women"
            onClick={handleMobileClose}
            className="block"
          >
            WOMEN
          </Link>

          <Link
            to="/menswear"
            onClick={handleMobileClose}
            className="block"
          >
            MEN
          </Link>

          <Link
            to="/wishlist"
            onClick={handleMobileClose}
            className="block"
          >
            WISHLIST
          </Link>

          <Link
            to="/cart"
            onClick={handleMobileClose}
            className="block"
          >
            CART
          </Link>

          <Link
            to="/track-order"
            onClick={handleMobileClose}
            className="block"
          >
            TRACK ORDER & RETURN
          </Link>

          <Link
            to="/email-signup"
            onClick={handleMobileClose}
            className="block"
          >
            EMAIL SIGNUP
          </Link>

        </div>
      )}

      {/* SEARCH RESULTS */}
      {search && (

   <div className="absolute right-2 sm:right-6 lg:right-10 top-[75px] md:top-[120px] w-[95%] sm:w-[430px] bg-white/90 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.12)] border border-gray-200 max-h-[520px] overflow-y-auto z-50 rounded-[32px] overflow-hidden">

  {/* HEADER */}
  <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-gray-100 px-5 py-4">

    <p className="uppercase tracking-[4px] text-[10px] font-bold text-gray-500">

      GymSword Search

    </p>

  </div>

  {filteredProducts.length > 0 ? (

    filteredProducts.map((item) => (

      <div
        key={item.id}
        className="relative border-b border-gray-100 overflow-hidden"
      >

        {/* BLUR BACKGROUND */}
        <div
          className="absolute inset-0 scale-[1.5] blur-[120px] opacity-30"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[22px]"></div>

        {/* CONTENT */}
        <div className="relative z-20 p-5">

          {/* TOP */}
          <div className="flex flex-col sm:flex-row items-start gap-5">

            {/* LEFT CONTENT */}
            <div className="flex-1 w-full">

              {/* BRAND */}
              <p className="uppercase tracking-[4px] text-[9px] text-gray-400 font-bold mb-2">

                GymSword Premium

              </p>

              {/* TITLE */}
              <h3 className="text-lg font-black leading-tight text-black">

                {item.title || item.name}

              </h3>

              {/* DESCRIPTION */}
              <p className="text-xs text-gray-500 mt-3 leading-relaxed">

                Premium oversized luxury streetwear designed for modern gym culture,
                elite comfort and everyday lifestyle styling.

              </p>

              {/* PRICE */}
              <div className="flex items-center gap-3 mt-4 flex-wrap">

                {/* <p className="text-lg font-black text-black">

                  ₹{item.price}

                </p> */}

                <span className="px-3 py-1 rounded-full bg-black text-white text-[8px] uppercase tracking-[3px] font-bold">

                  Coming Soon

                </span>

              </div>

              {/* SIZE */}
              <div className="flex gap-2 mt-5 flex-wrap">

                {["S", "M", "L", "XL"].map((size) => (

                  <button
                    key={size}
                    className="
                      w-9
                      h-9
                      rounded-full
                      border
                      border-gray-300
                      text-[10px]
                      font-bold
                      hover:bg-black
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >

                    {size}

                  </button>

                ))}

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full sm:w-28 h-[170px] sm:h-28 rounded-[24px] overflow-hidden flex-shrink-0">

              {/* EXTRA BLUR */}
              <div
                className="absolute inset-0 scale-[1.4] blur-[80px] opacity-80"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* PRODUCT IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="
                  relative
                  z-10
                  w-full
                  h-full
                  object-cover
                  blur-[20px]
                  brightness-[0.3]
                  contrast-150
                  saturate-0
                  scale-[1.3]
                "
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/45 backdrop-blur-[8px]"></div>

              {/* CENTER LOGO */}
              <div className="absolute inset-0 flex items-center justify-center z-20">

                <img
                  src="/GymSwordlogo.png"
                  alt="logo"
                  className="w-12 sm:w-14 object-contain opacity-95"
                />

              </div>

            </div>

          </div>

          {/* FEATURES */}
          <div className="mt-5 grid grid-cols-2 gap-3">

            <div className="rounded-2xl bg-[#f7f7f7] border border-gray-200 p-3">

              <p className="text-[8px] uppercase tracking-[3px] text-gray-400 font-bold">

                Fabric

              </p>

              <p className="mt-2 text-xs font-semibold">
                Heavy Premium Cotton
              </p>

            </div>

            <div className="rounded-2xl bg-[#f7f7f7] border border-gray-200 p-3">

              <p className="text-[8px] uppercase tracking-[3px] text-gray-400 font-bold">

                Fit

              </p>

              <p className="mt-2 text-xs font-semibold">
                Oversized Luxury Fit
              </p>

            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">

            <button
              onClick={() =>
                handleProductPage(item.id)
              }
              className="
                flex-1
                h-[46px]
                rounded-full
                border
                border-black
                text-black
                text-[10px]
                uppercase
                tracking-[3px]
                font-bold
                hover:bg-black
                hover:text-white
                transition-all
                duration-300
              "
            >

              View Product

            </button>

            <button
              onClick={() =>
                addToCart({
                  ...item,
                  selectedSize: "M",
                })
              }
              className="
                flex-1
                h-[46px]
                rounded-full
                bg-black
                text-white
                text-[10px]
                uppercase
                tracking-[3px]
                font-bold
                hover:opacity-90
                transition-all
                duration-300
              "
            >

              Add To Cart

            </button>

          </div>

        </div>

      </div>

    ))

  ) : (

    <div className="p-10 text-center">

      <div className="relative flex items-center justify-center mb-6">

        <div className="absolute w-24 h-24 bg-black/10 blur-[50px] rounded-full"></div>

        <img
          src="/GymSwordlogo.png"
          alt="logo"
          className="relative z-10 w-16 opacity-90"
        />

      </div>

      <p className="text-lg font-bold">
        No products found
      </p>

      <p className="text-sm text-gray-500 mt-2">
        Try searching luxury collections
      </p>

    </div>

  )}

</div>
      )}

    </div>
  );
}