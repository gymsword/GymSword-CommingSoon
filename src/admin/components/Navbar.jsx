import React, {
  useState,
  useRef,
  useEffect,
} from "react";

import {
  Bell,
  Search,
  ChevronDown,
  User,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] =
    useState(false);

  const dropdownRef = useRef(null);

  // CLOSE DROPDOWN
  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {

        setDropdownOpen(false);

      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };

  }, []);

  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem("adminToken");

    navigate("/admin/login");
  };

  return (
    <header
      className="
        sticky
        top-0
        z-50
        bg-white/90
        backdrop-blur-xl
        border-b
        border-zinc-200
        px-4
        sm:px-6
        lg:px-8
        h-[80px]
        flex
        items-center
        justify-between
      "
    >

      {/* LEFT SIDE */}
      <div className="flex items-center gap-3">

        {/* MOBILE MENU */}
        <button
          className="
            lg:hidden
            w-11
            h-11
            rounded-2xl
            bg-zinc-100
            border
            border-zinc-200
            flex
            items-center
            justify-center
            hover:bg-zinc-200
            transition
          "
        >

          <Menu
            size={20}
            className="text-black"
          />

        </button>

        {/* TITLE */}
        <div>

          <h1
            className="
              text-xl
              sm:text-2xl
              lg:text-3xl
              font-bold
              text-black
              tracking-tight
            "
          >
            Dashboard
          </h1>

          <p
            className="
              hidden
              sm:block
              text-zinc-500
              text-sm
              mt-1
            "
          >
            Welcome back, Admin
          </p>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-2 sm:gap-3">

        {/* SEARCH */}
        <div
          className="
            hidden
            xl:flex
            items-center
            gap-3
            bg-zinc-100
            border
            border-zinc-200
            px-4
            py-3
            rounded-2xl
            w-[280px]
            hover:border-zinc-300
            transition
          "
        >

          <Search
            size={18}
            className="text-zinc-500"
          />

          <input
            type="text"
            placeholder="Search..."
            className="
              bg-transparent
              outline-none
              text-sm
              text-black
              w-full
              placeholder:text-zinc-400
            "
          />

        </div>

        {/* SEARCH MOBILE */}
        <button
          className="
            xl:hidden
            w-11
            h-11
            rounded-2xl
            bg-zinc-100
            border
            border-zinc-200
            flex
            items-center
            justify-center
            hover:bg-zinc-200
            transition
          "
        >

          <Search
            size={19}
            className="text-black"
          />

        </button>

        {/* NOTIFICATION */}
        <button
          className="
            relative
            w-11
            h-11
            sm:w-12
            sm:h-12
            rounded-2xl
            bg-zinc-100
            border
            border-zinc-200
            flex
            items-center
            justify-center
            hover:bg-zinc-200
            transition
          "
        >

          <Bell
            size={19}
            className="text-black"
          />

          {/* NOTIFICATION DOT */}
          <div
            className="
              absolute
              top-2.5
              right-2.5
              w-2
              h-2
              rounded-full
              bg-black
            "
          ></div>

        </button>

        {/* PROFILE */}
     {/* PROFILE */}
<div
  ref={dropdownRef}
  className="relative"
>

  <button
    onClick={() =>
      setDropdownOpen(!dropdownOpen)
    }
    className="
      flex
      items-center
      gap-2
      sm:gap-3
      bg-white
      border
      border-zinc-200
      rounded-2xl
      px-2.5
      sm:px-3
      py-2
      hover:bg-zinc-100
      transition-all
      duration-300
      shadow-sm
      min-w-fit
    "
  >

    {/* LOGO */}
    <div
      className="
        w-10
        h-10
        sm:w-11
        sm:h-11
          
                  border-zinc-200
        bg-white
        flex
        items-center
        justify-center
        shrink-0
      "
    >

      <img
        src="/logofinal1.png"
        alt="GymSword"
        className="
          w-full
          h-full
          object-cover
        "
      />

    </div>

    {/* INFO */}
    <div
      className="
        hidden
        md:flex
        flex-col
        items-start
        leading-tight
      "
    >

      <h2
        className="
          text-sm
          font-semibold
          text-black
          whitespace-nowrap
        "
      >
        GymSword
      </h2>

      <p
        className="
          text-[11px]
          text-zinc-500
          whitespace-nowrap
        "
      >
        gymsword2024@gmail.com
      </p>

    </div>

    {/* ARROW */}
    <ChevronDown
      size={17}
      className={`
        text-zinc-500
        transition-transform
        duration-300
        shrink-0
        ${
          dropdownOpen
            ? "rotate-180"
            : ""
        }
      `}
    />

  </button>

  {/* DROPDOWN */}
  {dropdownOpen && (

    <div
      className="
        absolute
        right-0
        top-[72px]
        w-[290px]
        sm:w-[320px]
        bg-white
        border-zinc-200
        rounded-[28px]
        shadow-[0_20px_60px_rgba(0,0,0,0.12)]
        overflow-hidden
        z-50
      "
    >

      {/* TOP */}
      <div
        className="
          p-5
          border-b
          border-zinc-100
          bg-zinc-50
        "
      >

        <div className="flex items-center gap-4">

          {/* LOGO */}
          <div
            className="
              w-16
              h-16
              rounded-full
              overflow-hidden
              border
              border-zinc-200
              bg-white
              shrink-0
            "
          >

            <img
              src="/logofinal1.png"
              alt="GymSword"
              className="
                w-full
                h-full
                object-cover
              "
            />

          </div>

          {/* INFO */}
          <div className="min-w-0">

            <h2
              className="
                text-black
                font-bold
                text-lg
                whitespace-nowrap
              "
            >
              GymSword
            </h2>

            <p
              className="
                text-zinc-500
                text-sm
                whitespace-nowrap
                overflow-hidden
                text-ellipsis
              "
            >
              gymsword2024@gmail.com
            </p>

            <div
              className="
                mt-2
                inline-flex
                items-center
                px-3
                py-1
                rounded-full
                bg-black
                text-white
                text-[10px]
                tracking-[2px]
                uppercase
              "
            >
              Super Admin
            </div>

          </div>

        </div>

      </div>

      {/* MENU */}
      <div className="p-3 space-y-2">

        <button
          className="
            w-full
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-2xl
            hover:bg-zinc-100
            transition-all
            duration-300
            text-black
            text-sm
            font-medium
          "
        >

          <User size={18} />

          My Profile

        </button>

        <button
          className="
            w-full
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-2xl
            hover:bg-zinc-100
            transition-all
            duration-300
            text-black
            text-sm
            font-medium
          "
        >

          <Settings size={18} />

          Account Settings

        </button>

        <button
          onClick={handleLogout}
          className="
            w-full
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-2xl
            hover:bg-black
            hover:text-white
            transition-all
            duration-300
            text-black
            text-sm
            font-medium
          "
        >

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </div>

  )}

</div>

      </div>

    </header>
  );
};

export default Navbar;