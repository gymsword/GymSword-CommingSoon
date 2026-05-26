import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  Dumbbell,
  Crown,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import ProductTeaser from "../components/ProductTeaser";

const ComingSoon = () => {
  const [menuOpen, setMenuOpen] = useState(false);
const navigate = useNavigate();

 const navLinks = [
  {
    name: "Products",
    link: "#products",
  },
  {
    name: "Story",
    link: "#story",
  },
  {
    name: "Launch",
    link: "#waitlist",
  },
];


  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full"></div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>

      {/* Navbar */}
    <nav className="fixed top-0 left-0 w-full z-50 px-3 sm:px-6 py-4">
      {/* NAVBAR CONTAINER */}
      <div className="relative max-w-7xl mx-auto">
        
        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-blue-500/10 blur-3xl rounded-full"></div>

        {/* MAIN NAVBAR */}
        <div className="relative flex items-center justify-between rounded-2xl lg:rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-[30px] px-4 sm:px-6 lg:px-8 py-3 lg:py-4 shadow-[0_0_60px_rgba(168,85,247,0.08)] overflow-hidden">

          {/* SHINE EFFECT */}
          <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.04),transparent)]"></div>

          {/* TOP LIGHT */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

          {/* LEFT SIDE */}
       {/* LEFT SIDE */}
<a
  href="#hero"
  className="relative z-10 flex items-center gap-3 sm:gap-4 cursor-pointer group"
>
  {/* LOGO */}
  <div className="relative flex items-center justify-center">

    {/* OUTER GLOW */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/10 to-blue-500/20 blur-2xl rounded-full"></div>

    {/* LOGO BOX */}
    <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-2xl flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.15)] group-hover:scale-105 transition-all duration-500">

      {/* INNER BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10"></div>

      {/* LOGO IMAGE */}
      <img
        src="/GymSwordlogo.png"
        alt="GYM SWORD Logo"
        className="relative z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full object-cover drop-shadow-[0_0_25px_rgba(255,255,255,0.35)]"
      />

      {/* TOP LIGHT */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
    </div>
  </div>

  {/* BRAND NAME */}
  <div className="leading-none">
    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black tracking-[2px] sm:tracking-[3px] text-white">
      GYM SWORD
    </h1>

    <p className="text-[7px] sm:text-[9px] uppercase tracking-[3px] sm:tracking-[4px] text-gray-400 mt-1 sm:mt-2">
      identity of modern warriors.
    </p>
  </div>
</a>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="group relative text-sm uppercase tracking-[3px] text-gray-300 hover:text-white transition-all duration-500"
              >
                <span className="relative z-10">
                  {item.name}
                </span>

                {/* UNDERLINE */}
                <div className="absolute left-0 -bottom-2 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-500"></div>
              </a>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="relative z-10 flex items-center gap-3">

            {/* DESKTOP BUTTON */}
        <button
  onClick={() => navigate("/joinwaitlist")}
  className="hidden sm:flex group relative overflow-hidden px-5 lg:px-7 py-2.5 lg:py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 hover:scale-105 transition-all duration-500 shadow-[0_0_50px_rgba(168,85,247,0.35)]"
>
  {/* BUTTON SHINE */}
  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-all duration-500"></div>

  <span className="relative z-10 text-sm lg:text-[15px] font-semibold tracking-[1px] text-white">
    Join Waitlist
  </span>
</button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-11 h-11 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl flex items-center justify-center text-white"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            menuOpen
              ? "max-h-[500px] opacity-100 mt-4"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-[30px] p-6 shadow-[0_0_60px_rgba(168,85,247,0.08)]">

            {/* MOBILE LINKS */}
            <div className="flex flex-col gap-6">
              {navLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm uppercase tracking-[3px] text-gray-300 hover:text-white transition-all duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* MOBILE BUTTON */}
            <button className="mt-8 w-full group relative overflow-hidden px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 transition-all duration-500 shadow-[0_0_50px_rgba(168,85,247,0.35)]">

              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-all duration-500"></div>

              <span className="relative z-10 text-sm font-semibold tracking-[1px] text-white">
                Join Waitlist
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>

      {/* Hero Section */}
   <section
  id="hero"
  className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16 mt-8 overflow-hidden"
>
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

    {/* LEFT SIDE */}
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center lg:text-left"
    >
      {/* TOP TAG */}
      <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-purple-500/20 bg-white/5 mb-8 backdrop-blur-xl">

        <Sparkles
          size={14}
          className="text-purple-400 flex-shrink-0"
        />

        <span className="text-[9px] sm:text-[11px] tracking-[3px] sm:tracking-[4px] uppercase text-gray-300 font-medium">
          Luxury Activewear Movement
        </span>
      </div>

      {/* HEADING */}
      <h1 className="text-[42px] sm:text-[65px] md:text-[80px] lg:text-[95px] font-black leading-[0.95] tracking-[-2px] sm:tracking-[-3px]">

        BUILT FOR
        <br />

        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
          MODERN
        </span>

        <br />

        WARRIORS
      </h1>

      {/* DESCRIPTION */}
      <p className="mt-8 sm:mt-10 text-gray-300 text-[15px] sm:text-lg leading-[1.9] sm:leading-[2] max-w-2xl font-light mx-auto lg:mx-0">
        GYM SWORD is more than activewear.
        <br />
        It is a premium lifestyle movement built around discipline,
        ambition, confidence, self-growth, and modern luxury culture.
        <br />
        <br />
        We are creating a generation that wears identity —
        not just clothing.
      </p>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-5 mt-10 sm:mt-12">

        <button className="w-full sm:w-auto group px-8 sm:px-9 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 hover:scale-105 transition-all duration-500 flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(168,85,247,0.35)] font-semibold tracking-wide">

          Enter The Movement

          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-all duration-300"
          />
        </button>

        <button className="w-full sm:w-auto px-8 sm:px-9 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-500">
          Explore Vision
        </button>
      </div>
    </motion.div>

    {/* RIGHT SIDE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
      className="relative"
    >

      {/* MAIN GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/10 to-blue-500/20 blur-[120px] rounded-full"></div>

      {/* FLOATING GLOW */}
      <div className="absolute -top-10 -right-10 w-40 sm:w-52 h-40 sm:h-52 bg-purple-500/20 blur-[100px] rounded-full"></div>

      <div className="absolute bottom-0 -left-10 w-40 sm:w-52 h-40 sm:h-52 bg-blue-500/20 blur-[100px] rounded-full"></div>

      {/* MAIN CARD */}
      <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 backdrop-blur-3xl rounded-[30px] sm:rounded-[45px] p-5 sm:p-8 md:p-10 shadow-[0_0_80px_rgba(168,85,247,0.12)]">

        {/* BG GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-purple-500/[0.03]"></div>

        {/* 3D CIRCLE */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-24 sm:w-40 h-24 sm:h-40 rounded-full border border-white/10 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-3xl"></div>

        {/* FLOATING CARD */}
        <div className="absolute top-6 right-6 sm:top-12 sm:right-12 rotate-12 px-3 sm:px-5 py-2 sm:py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-2xl shadow-[0_0_30px_rgba(255,255,255,0.05)]">

          <p className="text-[8px] sm:text-[10px] uppercase tracking-[3px] sm:tracking-[4px] text-gray-300">
            Elite Performance
          </p>
        </div>

        {/* BG TEXT */}
        <h1 className="absolute bottom-0 right-0 text-[90px] sm:text-[140px] md:text-[200px] font-black text-white/[0.02] leading-none tracking-[-8px] sm:tracking-[-10px] select-none">
          GS
        </h1>

        {/* CONTENT */}
        <div className="relative z-10 space-y-5 sm:space-y-8">

          {/* CARD 1 */}
          <div className="group relative overflow-hidden flex flex-col sm:flex-row items-start gap-5 p-5 sm:p-7 rounded-[28px] sm:rounded-[32px] bg-white/[0.04] border border-white/10 hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-2 shadow-[0_0_40px_rgba(168,85,247,0.08)]">

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-purple-500/10 to-transparent"></div>

            <div className="relative p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.25)] backdrop-blur-2xl">

              <div className="absolute inset-0 rounded-3xl bg-purple-500/10 blur-xl"></div>

              <Crown className="relative text-purple-400" size={30} />
            </div>

            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Modern Luxury
              </h3>

              <p className="text-gray-400 mt-3 sm:mt-4 leading-[1.8] text-[14px] sm:text-[15px]">
                Premium minimal aesthetics blended with elite
                performance identity and elevated lifestyle culture.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group relative overflow-hidden flex flex-col sm:flex-row items-start gap-5 p-5 sm:p-7 rounded-[28px] sm:rounded-[32px] bg-white/[0.04] border border-white/10 hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-2 shadow-[0_0_40px_rgba(59,130,246,0.08)]">

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-blue-500/10 to-transparent"></div>

            <div className="relative p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.25)] backdrop-blur-2xl">

              <div className="absolute inset-0 rounded-3xl bg-blue-500/10 blur-xl"></div>

              <ShieldCheck className="relative text-blue-400" size={30} />
            </div>

            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Performance & Comfort
              </h3>

              <p className="text-gray-400 mt-3 sm:mt-4 leading-[1.8] text-[14px] sm:text-[15px]">
                Sweat-wicking comfort, mobility, durability,
                confidence, and premium athletic performance.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="group relative overflow-hidden flex flex-col sm:flex-row items-start gap-5 p-5 sm:p-7 rounded-[28px] sm:rounded-[32px] bg-white/[0.04] border border-white/10 hover:border-pink-500/40 transition-all duration-500 hover:-translate-y-2 shadow-[0_0_40px_rgba(236,72,153,0.08)]">

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-pink-500/10 to-transparent"></div>

            <div className="relative p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-pink-500/20 to-pink-500/5 border border-pink-500/20 shadow-[0_0_40px_rgba(236,72,153,0.25)] backdrop-blur-2xl">

              <div className="absolute inset-0 rounded-3xl bg-pink-500/10 blur-xl"></div>

              <Dumbbell className="relative text-pink-400" size={30} />
            </div>

            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Warrior Mindset
              </h3>

              <p className="text-gray-400 mt-3 sm:mt-4 leading-[1.8] text-[14px] sm:text-[15px]">
                More than gymwear — an identity of modern warriors
                driven by ambition, discipline, and self-growth.
              </p>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* Coming Soon */}
<section className="relative z-10 px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32 mt-6 overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-[350px] sm:w-[500px] lg:w-[700px] h-[350px] sm:h-[500px] lg:h-[700px] bg-gradient-to-r from-purple-500/20 via-pink-500/10 to-blue-500/20 blur-[120px] sm:blur-[180px] rounded-full animate-pulse"></div>
  </div>

  {/* FLOATING ORBS */}
  <div className="absolute top-10 left-0 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-purple-500/20 blur-[100px] sm:blur-[140px] rounded-full animate-pulse"></div>

  <div className="absolute bottom-0 right-0 sm:right-10 w-40 sm:w-72 h-40 sm:h-72 bg-blue-500/20 blur-[100px] sm:blur-[140px] rounded-full animate-pulse"></div>

  {/* GRID */}
  <div className="absolute inset-0 opacity-[0.03]">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:80px_80px]" />
  </div>

  {/* MAIN CONTAINER */}
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    viewport={{ once: true }}
    className="max-w-7xl mx-auto relative"
  >

    {/* MAIN CARD */}
    <div className="relative overflow-hidden rounded-[30px] sm:rounded-[45px] lg:rounded-[55px] border border-white/10 bg-white/[0.05] backdrop-blur-[35px] px-5 sm:px-8 md:px-14 lg:px-16 py-16 sm:py-24 md:py-28 lg:py-32 text-center shadow-[0_0_120px_rgba(168,85,247,0.15)] hover:scale-[1.01] transition-all duration-700">

      {/* SHINE EFFECT */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.05),transparent)] translate-x-[-100%] hover:translate-x-[100%] transition-all duration-[3000ms]"></div>

      {/* TOP LIGHT */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></div>

      {/* SIDE LIGHT */}
      <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

      {/* HUGE BACKGROUND TEXT */}
      <h1 className="absolute inset-0 flex items-center justify-center text-[70px] sm:text-[120px] md:text-[180px] lg:text-[250px] font-black text-white/[0.02] tracking-[-5px] sm:tracking-[-10px] lg:tracking-[-15px] select-none">
        GYM
      </h1>

      {/* FLOATING TOP BADGE */}
      <div className="absolute top-6 sm:top-10 left-1/2 -translate-x-1/2 rotate-2 hover:rotate-0 transition-all duration-700 px-4 sm:px-7 py-2 sm:py-3 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,255,255,0.05)]">

        <p className="text-[8px] sm:text-[10px] uppercase tracking-[3px] sm:tracking-[6px] text-gray-300 whitespace-nowrap">
          Launching Worldwide Soon
        </p>
      </div>

      {/* FLOATING CIRCLES */}
      <div className="hidden sm:block absolute top-16 left-10 lg:left-16 w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 rounded-full border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-3xl shadow-[0_0_80px_rgba(168,85,247,0.15)]"></div>

      <div className="hidden sm:block absolute bottom-10 lg:bottom-16 right-10 lg:right-16 w-32 sm:w-40 lg:w-52 h-32 sm:h-40 lg:h-52 rounded-full border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-3xl shadow-[0_0_80px_rgba(59,130,246,0.15)]"></div>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* SMALL LABEL */}
        <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-purple-500/20 bg-white/[0.05] backdrop-blur-2xl mb-8 sm:mb-10 shadow-[0_0_40px_rgba(168,85,247,0.15)]">

          <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse"></div>

          <span className="text-[8px] sm:text-[11px] uppercase tracking-[2px] sm:tracking-[5px] text-gray-200 font-semibold">
            The Future Of Luxury Activewear
          </span>
        </div>

        {/* HEADING */}
        <div className="relative">

          {/* COMING */}
          <h2 className="relative text-[52px] sm:text-[90px] md:text-[140px] lg:text-[220px] font-black leading-[0.85] tracking-[-3px] sm:tracking-[-6px] lg:tracking-[-10px] text-white/[0.06]">
            COMING
          </h2>

          {/* SOON */}
          <h2 className="relative -mt-2 sm:-mt-4 md:-mt-8 lg:-mt-10 text-[52px] sm:text-[90px] md:text-[140px] lg:text-[220px] font-black leading-[0.85] tracking-[-3px] sm:tracking-[-6px] lg:tracking-[-10px]">

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow-[0_0_40px_rgba(168,85,247,0.6)]">
              SOON
            </span>

            {/* UNDER GLOW */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-2 sm:bottom-4 w-[70%] h-6 sm:h-10 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-3xl"></div>
          </h2>
        </div>

        {/* DESCRIPTION */}
        <p className="max-w-4xl mx-auto text-gray-300 text-[15px] sm:text-lg md:text-[22px] mt-10 sm:mt-12 leading-[1.9] sm:leading-[2.1] font-light px-2">
          The next generation of luxury activewear is arriving soon.
          <br />
          Built with performance, confidence, culture, discipline,
          and modern aesthetic identity.
          <br />
          <br />
          GYM SWORD is creating more than clothing —
          we are building a movement for modern warriors.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-12 sm:mt-14">

          {/* BUTTON 1 */}
          <button className="w-full sm:w-auto group relative overflow-hidden px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 hover:scale-105 transition-all duration-700 flex items-center justify-center gap-3 shadow-[0_0_60px_rgba(168,85,247,0.4)] font-semibold tracking-wide">

            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-all duration-500"></div>

            <span className="relative z-10">
              Join The Waitlist
            </span>
          </button>

          {/* BUTTON 2 */}
          <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-2xl hover:bg-white/10 hover:border-purple-500/30 transition-all duration-700 shadow-[0_0_40px_rgba(255,255,255,0.04)]">
            Explore The Vision
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-16 sm:mt-20">

          {/* STAT 1 */}
          <div className="group relative overflow-hidden rounded-[28px] sm:rounded-[35px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-6 sm:p-8 hover:-translate-y-2 hover:border-purple-500/40 transition-all duration-700 shadow-[0_0_60px_rgba(168,85,247,0.08)]">

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-purple-500/10 via-transparent to-transparent"></div>

            <h3 className="relative text-4xl sm:text-5xl font-black text-purple-400">
              Luxury
            </h3>

            <p className="relative text-gray-400 mt-4 leading-relaxed text-sm sm:text-base">
              Premium fashion identity inspired by elite culture.
            </p>
          </div>

          {/* STAT 2 */}
          <div className="group relative overflow-hidden rounded-[28px] sm:rounded-[35px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-6 sm:p-8 hover:-translate-y-2 hover:border-blue-500/40 transition-all duration-700 shadow-[0_0_60px_rgba(59,130,246,0.08)]">

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-blue-500/10 via-transparent to-transparent"></div>

            <h3 className="relative text-4xl sm:text-5xl font-black text-blue-400">
              Discipline
            </h3>

            <p className="relative text-gray-400 mt-4 leading-relaxed text-sm sm:text-base">
              Built for ambitious people chasing self-growth.
            </p>
          </div>

          {/* STAT 3 */}
          <div className="group relative overflow-hidden rounded-[28px] sm:rounded-[35px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-6 sm:p-8 hover:-translate-y-2 hover:border-pink-500/40 transition-all duration-700 shadow-[0_0_60px_rgba(236,72,153,0.08)]">

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-pink-500/10 via-transparent to-transparent"></div>

            <h3 className="relative text-4xl sm:text-5xl font-black text-pink-400">
              Legacy
            </h3>

            <p className="relative text-gray-400 mt-4 leading-relaxed text-sm sm:text-base">
              Creating a global modern fitness movement.
            </p>
          </div>

        </div>
      </div>
    </div>
  </motion.div>
</section>

      {/* Vision & Mission */}
   <section className="relative z-10 px-4 sm:px-6 pb-24 overflow-hidden">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-14 items-stretch">

    {/* ========================= */}
    {/* VISION CARD */}
    {/* ========================= */}

    <motion.div
      initial={{ opacity: 0, y: 80, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative group perspective-[2000px]"
    >

      {/* MAIN GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/10 to-purple-500/20 blur-[120px] rounded-full opacity-70 group-hover:opacity-100 transition-all duration-700"></div>

      {/* FLOATING ORBS */}
      <div className="absolute -top-10 -right-10 w-40 sm:w-60 h-40 sm:h-60 bg-purple-500/20 blur-[100px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-0 -left-10 w-40 sm:w-60 h-40 sm:h-60 bg-pink-500/20 blur-[100px] rounded-full animate-pulse"></div>

      {/* MAIN CARD */}
      <div
        id="vision"
        className="relative overflow-hidden h-full rounded-[30px] sm:rounded-[45px] border border-white/10 bg-white/[0.05] backdrop-blur-[35px] p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0_0_100px_rgba(168,85,247,0.15)] hover:scale-[1.02] hover:-translate-y-2 transition-all duration-700"
      >

        {/* SHINE EFFECT */}
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.05),transparent)] translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-[2500ms]"></div>

        {/* TOP LIGHT */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></div>

        {/* BIG BACKGROUND TEXT */}
        <h1 className="absolute top-0 right-0 text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] font-black text-white/[0.02] leading-none tracking-[-6px] sm:tracking-[-12px] select-none">
          VISION
        </h1>

        {/* FLOATING 3D CIRCLE */}
        <div className="absolute top-6 sm:top-8 right-6 sm:right-8 w-24 sm:w-32 lg:w-44 h-24 sm:h-32 lg:h-44 rounded-full border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-3xl shadow-[0_0_80px_rgba(168,85,247,0.15)]"></div>

        {/* MINI FLOATING BADGE */}
        <div className="absolute top-8 sm:top-12 right-6 sm:right-12 rotate-12 group-hover:rotate-6 transition-all duration-700 px-3 sm:px-6 py-2 sm:py-3 rounded-3xl bg-white/[0.05] border border-white/10 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,255,255,0.06)]">

          <p className="text-[8px] sm:text-[10px] uppercase tracking-[3px] sm:tracking-[5px] text-gray-300 whitespace-nowrap">
            Global Movement
          </p>
        </div>

        {/* CONTENT */}
        <div className="relative z-10">

          {/* ICON */}
          <div className="relative inline-flex p-4 sm:p-6 rounded-[24px] sm:rounded-[30px] bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/20 shadow-[0_0_60px_rgba(168,85,247,0.25)] backdrop-blur-2xl mb-8 sm:mb-10">

            <div className="absolute inset-0 rounded-[24px] sm:rounded-[30px] bg-purple-500/10 blur-2xl"></div>

            <Sparkles className="relative text-purple-400" size={36} />
          </div>

          {/* TITLE */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8 tracking-tight">

            Our

            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
              Vision
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-300 leading-[1.9] sm:leading-[2.1] text-[15px] sm:text-lg md:text-[19px] font-light">
            We believe people do not connect deeply with products alone;
            they connect with emotions, culture, mindset, identity,
            and aspiration.
            <br />
            <br />
            GYM SWORD is built for the ambitious generation who want to
            grow stronger physically and mentally while expressing their
            lifestyle through premium fashion and performance wear.
            <br />
            <br />
            Our vision is to build a powerful global community where
            luxury, fitness, confidence, and discipline become a lifestyle.
          </p>

          {/* BOTTOM BAR */}
          <div className="flex items-center justify-between mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">

            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-purple-400">
                Luxury
              </h3>

              <p className="text-gray-500 text-xs sm:text-sm mt-2">
                Modern Activewear Identity
              </p>
            </div>

            <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-60"></div>
          </div>
        </div>
      </div>
    </motion.div>

    {/* ========================= */}
    {/* MISSION CARD */}
    {/* ========================= */}

    <motion.div
      initial={{ opacity: 0, y: 80, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="relative group perspective-[2000px]"
    >

      {/* MAIN GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/10 to-blue-500/20 blur-[120px] rounded-full opacity-70 group-hover:opacity-100 transition-all duration-700"></div>

      {/* FLOATING ORBS */}
      <div className="absolute -top-10 -left-10 w-40 sm:w-60 h-40 sm:h-60 bg-blue-500/20 blur-[100px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-0 -right-10 w-40 sm:w-60 h-40 sm:h-60 bg-cyan-500/20 blur-[100px] rounded-full animate-pulse"></div>

      {/* MAIN CARD */}
      <div
        id="mission"
        className="relative overflow-hidden h-full rounded-[30px] sm:rounded-[45px] border border-white/10 bg-white/[0.05] backdrop-blur-[35px] p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0_0_100px_rgba(59,130,246,0.15)] hover:scale-[1.02] hover:-translate-y-2 transition-all duration-700"
      >

        {/* SHINE EFFECT */}
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.05),transparent)] translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-[2500ms]"></div>

        {/* TOP LIGHT */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>

        {/* BIG BACKGROUND TEXT */}
        <h1 className="absolute top-0 right-0 text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] font-black text-white/[0.02] leading-none tracking-[-6px] sm:tracking-[-12px] select-none">
          MISSION
        </h1>

        {/* FLOATING 3D CIRCLE */}
        <div className="absolute top-6 sm:top-8 right-6 sm:right-8 w-24 sm:w-32 lg:w-44 h-24 sm:h-32 lg:h-44 rounded-full border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-3xl shadow-[0_0_80px_rgba(59,130,246,0.15)]"></div>

        {/* MINI FLOATING BADGE */}
        <div className="absolute top-8 sm:top-12 right-6 sm:right-12 rotate-12 group-hover:rotate-6 transition-all duration-700 px-3 sm:px-6 py-2 sm:py-3 rounded-3xl bg-white/[0.05] border border-white/10 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,255,255,0.06)]">

          <p className="text-[8px] sm:text-[10px] uppercase tracking-[3px] sm:tracking-[5px] text-gray-300 whitespace-nowrap">
            Elite Community
          </p>
        </div>

        {/* CONTENT */}
        <div className="relative z-10">

          {/* ICON */}
          <div className="relative inline-flex p-4 sm:p-6 rounded-[24px] sm:rounded-[30px] bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/20 shadow-[0_0_60px_rgba(59,130,246,0.25)] backdrop-blur-2xl mb-8 sm:mb-10">

            <div className="absolute inset-0 rounded-[24px] sm:rounded-[30px] bg-blue-500/10 blur-2xl"></div>

            <ShieldCheck className="relative text-blue-400" size={36} />
          </div>

          {/* TITLE */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8 tracking-tight">

            Our

            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              Mission
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-300 leading-[1.9] sm:leading-[2.1] text-[15px] sm:text-lg md:text-[19px] font-light">
            Our mission is to build a global luxury activewear movement
            where performance meets lifestyle, discipline becomes identity,
            and every piece inspires confidence, ambition,
            and self-evolution.
            <br />
            <br />
            We are building more than apparel — we are building a
            community driven by strength, style, culture,
            confidence, and mindset.
            <br />
            <br />
            Every collection is designed to inspire modern warriors
            to rise beyond limits and express their identity.
          </p>

          {/* BOTTOM BAR */}
          <div className="flex items-center justify-between mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">

            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-blue-400">
                Performance
              </h3>

              <p className="text-gray-500 text-xs sm:text-sm mt-2">
                Strength • Style • Identity
              </p>
            </div>

            <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-2xl opacity-60"></div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* Brand Values */}
  <section className="relative z-10 px-6 py-32 overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0">

    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 blur-[140px] rounded-full"></div>

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-fuchsia-500/10 blur-[180px] rounded-full"></div>
  </div>

  {/* GRID BACKGROUND */}
  <div className="absolute inset-0 opacity-[0.03]">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />
  </div>

  <div className="max-w-7xl mx-auto relative">

    {/* TOP HEADING */}
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center mb-24"
    >

      {/* BADGE */}
      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-400/20 bg-white/[0.05] backdrop-blur-2xl shadow-[0_0_40px_rgba(34,211,238,0.15)] mb-8">

        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 animate-pulse"></div>

        <span className="text-[11px] uppercase tracking-[5px] text-gray-200 font-semibold">
          Premium Lifestyle Identity
        </span>
      </div>

      {/* MAIN TITLE */}
      <h2 className="relative text-5xl md:text-7xl lg:text-8xl font-black tracking-[-5px]">

        <span className="text-white">
          WHAT WE
        </span>

        <br />

        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-400 drop-shadow-[0_0_40px_rgba(34,211,238,0.4)]">

          STAND FOR

          {/* UNDER GLOW */}
          <div className="absolute left-0 bottom-2 w-full h-6 bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-violet-500/20 blur-3xl"></div>
        </span>
      </h2>

      {/* DESCRIPTION */}
      <p className="max-w-3xl mx-auto text-gray-400 text-lg md:text-[20px] mt-10 leading-[2.1] font-light">
        Every piece we create is designed around ambition,
        discipline, confidence, luxury aesthetics, and elite
        performance culture.
      </p>
    </motion.div>

    {/* CARDS */}
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

      {[
        {
          title: "Discipline",
          color: "cyan",
          desc: "Built for ambitious people chasing consistency, growth, and self-evolution.",
        },
        {
          title: "Luxury",
          color: "fuchsia",
          desc: "Modern luxury aesthetics inspired by premium lifestyle and elite culture.",
        },
        {
          title: "Confidence",
          color: "violet",
          desc: "Designed to make every athlete feel powerful, confident, and elevated.",
        },
        {
          title: "Performance",
          color: "blue",
          desc: "Engineered for comfort, movement, durability, and premium athletic identity.",
        },
      ].map((item, index) => (

       <motion.div
  key={index}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: index * 0.15 }}
  viewport={{ once: true }}
  className="group relative"
>

  {/* CARD GLOW */}
  <div
    className={`
      absolute inset-0 rounded-[42px] opacity-0 group-hover:opacity-100
      transition-all duration-700 blur-[70px]

      ${item.color === "cyan" && "bg-cyan-500/15"}
      ${item.color === "fuchsia" && "bg-fuchsia-500/15"}
      ${item.color === "violet" && "bg-violet-500/15"}
      ${item.color === "blue" && "bg-blue-500/15"}
    `}
  ></div>

  {/* MAIN CARD */}
  <div
    className={`
      relative h-full overflow-hidden rounded-[40px]
      border border-white/10
      bg-white/[0.04]
      backdrop-blur-[25px]
      p-8 md:p-10
      hover:-translate-y-4
      transition-all duration-700
      shadow-[0_0_60px_rgba(255,255,255,0.04)]

      ${item.color === "cyan" && "hover:border-cyan-400/40"}
      ${item.color === "fuchsia" && "hover:border-fuchsia-400/40"}
      ${item.color === "violet" && "hover:border-violet-400/40"}
      ${item.color === "blue" && "hover:border-blue-400/40"}
    `}
  >

    {/* SHINE EFFECT */}
    <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.05),transparent)] translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-[2500ms]"></div>

    {/* TOP LIGHT */}
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

    {/* BACKGROUND TEXT */}
    <h1 className="absolute bottom-4 right-4 text-[90px] font-black text-white/[0.02] tracking-[-8px] leading-none select-none">
      {item.title.slice(0, 1)}
    </h1>

    {/* CONTENT */}
    <div className="relative z-10">

      {/* ICON BOX */}
      <div
        className={`
          relative w-[88px] h-[88px]
          rounded-[28px]
          flex items-center justify-center
          mb-10
          border border-white/10
          backdrop-blur-2xl
          shadow-[0_0_50px_rgba(255,255,255,0.05)]

          ${item.color === "cyan" && "bg-cyan-500/10"}
          ${item.color === "fuchsia" && "bg-fuchsia-500/10"}
          ${item.color === "violet" && "bg-violet-500/10"}
          ${item.color === "blue" && "bg-blue-500/10"}
        `}
      >

        {/* Discipline Icon */}
        {item.title === "Discipline" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="w-11 h-11 text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}

        {/* Luxury Icon */}
        {item.title === "Luxury" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="w-11 h-11 text-fuchsia-400 drop-shadow-[0_0_20px_rgba(217,70,239,0.5)]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 17l3-8 3 4 3-4 3 8H6z"
            />
          </svg>
        )}

        {/* Confidence Icon */}
        {item.title === "Confidence" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="w-11 h-11 text-violet-400 drop-shadow-[0_0_20px_rgba(167,139,250,0.5)]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"
            />
          </svg>
        )}

        {/* Performance Icon */}
        {item.title === "Performance" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="w-11 h-11 text-blue-400 drop-shadow-[0_0_20px_rgba(96,165,250,0.5)]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 2L4 14h6v8l10-12h-7V2z"
            />
          </svg>
        )}
      </div>

      {/* TITLE */}
      <h3
        className={`
          text-3xl md:text-[34px]
          font-black
          tracking-tight
          mb-6

          ${item.color === "cyan" && "text-cyan-400"}
          ${item.color === "fuchsia" && "text-fuchsia-400"}
          ${item.color === "violet" && "text-violet-400"}
          ${item.color === "blue" && "text-blue-400"}
        `}
      >
        {item.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-400 leading-[2] text-[15px]">
        {item.desc}
      </p>

      {/* BOTTOM BAR */}
      <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10">

        <span className="text-[11px] uppercase tracking-[4px] text-gray-500">
          Gym Sword
        </span>

        <div
          className={`
            w-3 h-3 rounded-full

            ${item.color === "cyan" && "bg-cyan-400"}
            ${item.color === "fuchsia" && "bg-fuchsia-400"}
            ${item.color === "violet" && "bg-violet-400"}
            ${item.color === "blue" && "bg-blue-400"}
          `}
        ></div>
      </div>
    </div>
  </div>
</motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Founder Story */}
<section
  id="story"
  className="relative z-10 px-4 sm:px-6 py-20 sm:py-24 lg:py-32 overflow-hidden"
>

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0">

    <div className="absolute top-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-purple-500/10 blur-[120px] sm:blur-[160px] rounded-full"></div>

    <div className="absolute bottom-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-500/10 blur-[120px] sm:blur-[160px] rounded-full"></div>

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-pink-500/10 blur-[140px] sm:blur-[200px] rounded-full"></div>
  </div>

  {/* GRID */}
  <div className="absolute inset-0 opacity-[0.03]">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:80px_80px]" />
  </div>

  {/* MAIN CONTAINER */}
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    viewport={{ once: true }}
    className="max-w-7xl mx-auto relative"
  >

    {/* MAIN CARD */}
    <div className="relative overflow-hidden rounded-[30px] sm:rounded-[45px] lg:rounded-[55px] border border-white/10 bg-white/[0.05] backdrop-blur-[35px] shadow-[0_0_120px_rgba(168,85,247,0.12)]">

      {/* SHINE EFFECT */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.05),transparent)] translate-x-[-100%] hover:translate-x-[100%] transition-all duration-[3000ms]"></div>

      {/* TOP LIGHT */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></div>

      {/* SIDE LIGHT */}
      <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

      {/* HUGE BACKGROUND TEXT */}
      <h1 className="absolute bottom-0 right-0 text-[70px] sm:text-[140px] md:text-[220px] lg:text-[260px] font-black text-white/[0.02] tracking-[-6px] sm:tracking-[-15px] leading-none select-none">
        STORY
      </h1>

      {/* FLOATING ORBS */}
      <div className="absolute top-6 sm:top-10 right-6 sm:right-10 w-28 sm:w-52 h-28 sm:h-52 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-3xl shadow-[0_0_80px_rgba(168,85,247,0.15)]"></div>

      <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 w-24 sm:w-40 h-24 sm:h-40 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 backdrop-blur-3xl shadow-[0_0_80px_rgba(59,130,246,0.15)]"></div>

      {/* FLOATING BADGE */}
      <div className="absolute top-6 sm:top-10 right-6 sm:right-10 rotate-12 hover:rotate-6 transition-all duration-700 px-3 sm:px-6 py-2 sm:py-3 rounded-3xl bg-white/[0.05] border border-white/10 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,255,255,0.05)]">

        <p className="text-[8px] sm:text-[10px] uppercase tracking-[3px] sm:tracking-[5px] text-gray-300 whitespace-nowrap">
          Founder Story
        </p>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center p-6 sm:p-10 md:p-14 lg:p-20">

        {/* LEFT SIDE */}
        <div>

          {/* LOGO */}
          <div className="relative inline-flex items-center justify-center mb-10 sm:mb-12">

            {/* OUTER GLOW */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-blue-500/30 blur-[60px] rounded-full animate-pulse"></div>

            {/* MAIN LOGO CONTAINER */}
            <div className="relative w-[100px] sm:w-[130px] h-[100px] sm:h-[130px] rounded-[28px] sm:rounded-[35px] border border-white/10 bg-white/[0.06] backdrop-blur-[30px] shadow-[0_0_80px_rgba(168,85,247,0.2)] flex items-center justify-center overflow-hidden hover:scale-105 hover:rotate-[2deg] transition-all duration-700">

              {/* TOP LIGHT */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

              {/* INNER GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.08] via-transparent to-blue-500/[0.08]"></div>

              {/* FLOATING BLUR */}
              <div className="absolute w-20 sm:w-24 h-20 sm:h-24 bg-purple-500/20 blur-3xl rounded-full"></div>

              {/* LOGO IMAGE */}
              <img
                src="/GymSwordlogo.png"
                alt="GYM SWORD Logo"
                className="relative z-10 w-[60px] sm:w-[80px] md:w-[90px] object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.35)]"
              />
            </div>

            {/* FLOATING MINI BADGE */}
            <div className="absolute -bottom-3 sm:-bottom-4 -right-2 sm:-right-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,255,255,0.05)]">

              <p className="text-[7px] sm:text-[9px] uppercase tracking-[2px] sm:tracking-[4px] text-gray-300 whitespace-nowrap">
                Luxury Activewear
              </p>
            </div>
          </div>

          {/* HEADING */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-2px] sm:tracking-[-5px] leading-[0.95]">

            The Story

            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow-[0_0_40px_rgba(168,85,247,0.5)]">
              Behind
            </span>

            <span className="block text-white">
              GYM SWORD
            </span>
          </h2>

          {/* SUBTEXT */}
          <p className="text-gray-400 text-[15px] sm:text-lg leading-[1.9] sm:leading-[2] mt-8 sm:mt-10 max-w-xl">
            Built from real fitness culture, ambition,
            discipline, and the vision to create
            a premium activewear movement for
            the modern generation.
          </p>

          {/* MINI STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 sm:mt-12">

            <div className="group relative overflow-hidden rounded-[24px] sm:rounded-[30px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-5 sm:p-6 hover:-translate-y-2 hover:border-purple-500/40 transition-all duration-700">

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-purple-500/10 via-transparent to-transparent"></div>

              <h3 className="relative text-3xl sm:text-4xl font-black text-purple-400">
                Vision
              </h3>

              <p className="relative text-gray-400 mt-3 text-sm leading-relaxed">
                Creating a global luxury fitness identity.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-[24px] sm:rounded-[30px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-5 sm:p-6 hover:-translate-y-2 hover:border-blue-500/40 transition-all duration-700">

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-blue-500/10 via-transparent to-transparent"></div>

              <h3 className="relative text-3xl sm:text-4xl font-black text-blue-400">
                Culture
              </h3>

              <p className="relative text-gray-400 mt-3 text-sm leading-relaxed">
                Strength • Style • Confidence • Discipline
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          {/* MAIN STORY CARD */}
          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[40px] border border-white/10 bg-white/[0.05] backdrop-blur-[30px] p-6 sm:p-8 md:p-10 shadow-[0_0_80px_rgba(168,85,247,0.08)]">

            {/* INNER GLOW */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.03] via-transparent to-blue-500/[0.03]"></div>

            {/* STORY CONTENT */}
            <div className="relative z-10">

              {/* TOP LABEL */}
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-2xl mb-6 sm:mb-8">

                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse"></div>

                <span className="text-[8px] sm:text-[10px] uppercase tracking-[3px] sm:tracking-[5px] text-gray-300">
                  Brand Origin
                </span>
              </div>

              {/* TEXT */}
              <p className="text-gray-300 text-[15px] sm:text-[17px] md:text-[18px] leading-[2] sm:leading-[2.2] font-light">

                GYM SWORD was founded by Shivam Singh during his journey as a
                professional coach in India.
                <br />
                <br />
                He closely experienced the mindset, struggles, and ambitions
                of people dedicated to fitness and self-improvement.
                <br />
                <br />
                He noticed a major gap in the fitness industry —
                premium international gymwear brands offered style and quality,
                but their prices were out of reach for many young athletes.
                Meanwhile, affordable products lacked comfort, durability,
                performance, and identity.
                <br />
                <br />
                Most brands were simply selling gym clothes —
                not the culture, confidence, and mindset that truly drive people.
                <br />
                <br />
                This inspired the creation of GYM SWORD —
                a brand combining energy, luxury, aesthetics,
                yoga lifestyle vibes, and performance credibility
                into one powerful identity.
              </p>

              {/* BOTTOM BAR */}
              <div className="flex items-center justify-between mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    GYM SWORD
                  </h3>

                  <p className="text-gray-500 text-xs sm:text-sm mt-2">
                    Luxury • Discipline • Identity
                  </p>
                </div>

                <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-2xl opacity-70"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </motion.div>
</section>

<section
  id="products"
  className="relative z-10 px-4 sm:px-6 py-28 overflow-hidden"
></section>
<ProductTeaser/>
      {/* Waitlist */}
   <section
  id="waitlist"
  className="relative z-10 px-4 sm:px-6 py-24 md:py-32 overflow-hidden"
>

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0">

    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full"></div>

    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pink-500/10 blur-[180px] rounded-full"></div>
  </div>

  {/* GRID */}
  <div className="absolute inset-0 opacity-[0.03]">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
  </div>

  {/* MAIN CONTAINER */}
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    viewport={{ once: true }}
    className="max-w-6xl mx-auto relative"
  >

    {/* MAIN CARD */}
    <div className="relative overflow-hidden rounded-[40px] md:rounded-[55px] border border-white/10 bg-white/[0.05] backdrop-blur-[35px] shadow-[0_0_120px_rgba(168,85,247,0.12)] px-6 sm:px-10 md:px-16 py-14 md:py-24">

      {/* SHINE EFFECT */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.05),transparent)] translate-x-[-100%] hover:translate-x-[100%] transition-all duration-[3000ms]"></div>

      {/* TOP LIGHT */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></div>

      {/* BACKGROUND TEXT */}
      <h1 className="absolute inset-0 flex items-center justify-center text-[90px] sm:text-[140px] md:text-[220px] font-black text-white/[0.02] tracking-[-12px] select-none">
        JOIN
      </h1>

      {/* FLOATING ORBS */}
      <div className="absolute top-8 right-8 w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-3xl shadow-[0_0_80px_rgba(168,85,247,0.15)]"></div>

      <div className="absolute bottom-8 left-8 w-28 h-28 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 backdrop-blur-3xl shadow-[0_0_80px_rgba(59,130,246,0.15)]"></div>

      {/* FLOATING BADGE */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10 rotate-12 hover:rotate-6 transition-all duration-700 px-4 md:px-6 py-2 md:py-3 rounded-3xl bg-white/[0.05] border border-white/10 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,255,255,0.05)]">

        <p className="text-[9px] md:text-[10px] uppercase tracking-[4px] md:tracking-[5px] text-gray-300">
          Early Access
        </p>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center">

        {/* TOP BADGE */}
        <div className="inline-flex items-center gap-3 px-5 md:px-6 py-2 md:py-3 rounded-full border border-purple-500/20 bg-white/[0.05] backdrop-blur-2xl shadow-[0_0_40px_rgba(168,85,247,0.15)] mb-8">

          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse"></div>

          <span className="text-[10px] md:text-[11px] uppercase tracking-[4px] md:tracking-[5px] text-gray-200 font-semibold">
            Exclusive Launch Access
          </span>
        </div>

        {/* HEADING */}
        <h2 className="relative text-5xl sm:text-6xl md:text-8xl font-black tracking-[-4px] md:tracking-[-6px] leading-[0.95]">

          JOIN THE

          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow-[0_0_40px_rgba(168,85,247,0.5)]">

            WAITLIST

            {/* UNDER GLOW */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[70%] h-8 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-3xl"></div>
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="max-w-3xl mx-auto text-gray-300 text-[16px] sm:text-lg md:text-[22px] mt-10 leading-[2.1] font-light px-2">
          Be the first to access exclusive drops,
          launch offers, premium collections,
          limited releases, and elite community access.
          <br className="hidden md:block" />
          Join the next generation of luxury activewear culture.
        </p>

        {/* EMAIL FORM */}
        <div className="relative mt-14 max-w-3xl mx-auto">

          {/* FORM CONTAINER */}
          <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.05] backdrop-blur-[30px] p-3 sm:p-4 shadow-[0_0_80px_rgba(168,85,247,0.08)]">

            {/* INNER GLOW */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/[0.03] via-transparent to-blue-500/[0.03]"></div>

            {/* FORM */}
            <div className="relative z-10 flex flex-col md:flex-row gap-4">

              {/* INPUT */}
              <div className="relative flex-1">

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-[64px] px-6 rounded-[22px] bg-black/30 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-purple-500 transition-all duration-500 backdrop-blur-2xl"
                />

                {/* INPUT GLOW */}
                <div className="absolute inset-0 rounded-[22px] border border-purple-500/0 focus-within:border-purple-500/30 pointer-events-none"></div>
              </div>

              {/* BUTTON */}
              <button className="group relative overflow-hidden h-[64px] px-8 md:px-10 rounded-[22px] bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 hover:scale-[1.03] transition-all duration-700 shadow-[0_0_60px_rgba(168,85,247,0.4)] font-semibold tracking-wide text-white">

                {/* BUTTON SHINE */}
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-all duration-500"></div>

                <span className="relative z-10">
                  Join Now
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16">

          {/* FEATURE 1 */}
          <div className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-6 hover:-translate-y-2 hover:border-purple-500/40 transition-all duration-700">

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-purple-500/10 via-transparent to-transparent"></div>

            <h3 className="relative text-3xl font-black text-purple-400">
              Early Access
            </h3>

            <p className="relative text-gray-400 mt-3 text-sm leading-relaxed">
              Get exclusive access before the official launch.
            </p>
          </div>

          {/* FEATURE 2 */}
          <div className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-6 hover:-translate-y-2 hover:border-blue-500/40 transition-all duration-700">

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-blue-500/10 via-transparent to-transparent"></div>

            <h3 className="relative text-3xl font-black text-blue-400">
              Premium Drops
            </h3>

            <p className="relative text-gray-400 mt-3 text-sm leading-relaxed">
              Limited collections inspired by modern luxury culture.
            </p>
          </div>

          {/* FEATURE 3 */}
          <div className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-6 hover:-translate-y-2 hover:border-pink-500/40 transition-all duration-700">

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-pink-500/10 via-transparent to-transparent"></div>

            <h3 className="relative text-3xl font-black text-pink-400">
              Elite Community
            </h3>

            <p className="relative text-gray-400 mt-3 text-sm leading-relaxed">
              Become part of the GYM SWORD movement.
            </p>
          </div>

        </div>
      </div>
    </div>
  </motion.div>
</section>

      {/* Footer */}
    <footer className="relative z-10 px-6 pt-24 pb-10 overflow-hidden border-t border-white/10">

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0">

    <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-500/10 blur-[140px] rounded-full"></div>

    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full"></div>

    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 blur-[180px] rounded-full"></div>
  </div>

  {/* GRID */}
  <div className="absolute inset-0 opacity-[0.03]">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />
  </div>

  <div className="max-w-7xl mx-auto relative">

    {/* TOP SECTION */}
    <div className="grid lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">

      {/* BRAND */}
      <div className="lg:col-span-2">

        {/* LOGO */}
        <div className="flex items-center gap-5">

          <div className="relative w-20 h-20 rounded-[28px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.15)]">

            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>

            <img
              src="/GymSwordlogo.png"
              alt="GYM SWORD"
              className="relative z-10 w-12 object-contain"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-[4px] text-white">
              GYM SWORD
            </h2>

            <p className="text-gray-400 mt-2 tracking-[3px] uppercase text-sm">
 identity of modern warriors.
            </p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-400 leading-[2] text-[16px] mt-10 max-w-2xl">
          GYM SWORD is more than a clothing brand —
          it is a modern luxury fitness movement built around
          discipline, confidence, ambition, aesthetics,
          and elite performance culture.
          <br />
          <br />
          We are building an identity for the next generation
          of modern warriors who want to grow stronger physically,
          mentally, and stylistically.
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-4 mt-10">

          {[
            "Discipline",
            "Luxury",
            "Performance",
            "Confidence",
            "Identity",
          ].map((tag, index) => (

            <div
              key={index}
              className="px-5 py-3 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl text-sm tracking-[2px] uppercase text-gray-300 hover:border-purple-500/30 hover:text-white transition-all duration-500"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      {/* QUICK LINKS */}
      <div>

        <h3 className="text-2xl font-black text-white mb-8">
          Quick Links
        </h3>

        <div className="flex flex-col gap-5">

          {[
            {
              name: "Our Vision",
              link: "#vision",
            },
            {
              name: "Our Mission",
              link: "#mission",
            },
            {
              name: "Brand Story",
              link: "#story",
            },
            {
              name: "Join Waitlist",
              link: "#waitlist",
            },
          ].map((item, index) => (

            <a
              key={index}
              href={item.link}
              className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-500"
            >

              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-70 group-hover:scale-150 transition-all duration-500"></div>

              <span className="tracking-[2px] uppercase text-sm">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* SOCIAL MEDIA */}
      <div>

        <h3 className="text-2xl font-black text-white mb-8">
          Social Media
        </h3>

        <div className="flex flex-col gap-5">

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/gym_swordofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 text-gray-400 hover:text-pink-400 transition-all duration-500"
          >

            <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl flex items-center justify-center group-hover:border-pink-500/40 transition-all duration-500">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm6-1.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
              </svg>
            </div>

            <div>
              <h4 className="font-semibold">
                Instagram
              </h4>

              <p className="text-sm text-gray-500">
                Premium brand visuals & reels
              </p>
            </div>
          </a>

          {/* YOUTUBE */}
          <a
            href="https://youtube.com/@yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 text-gray-400 hover:text-red-400 transition-all duration-500"
          >

            <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl flex items-center justify-center group-hover:border-red-500/40 transition-all duration-500">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M21.8 8s-.2-1.5-.8-2.2c-.8-.9-1.7-.9-2.1-1C15.9 4.5 12 4.5 12 4.5h0s-3.9 0-6.9.3c-.4.1-1.3.1-2.1 1C2.4 6.5 2.2 8 2.2 8S2 9.8 2 11.5v1c0 1.7.2 3.5.2 3.5s.2 1.5.8 2.2c.8.9 1.9.9 2.4 1 1.7.2 6.6.3 6.6.3s3.9 0 6.9-.3c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.2.8-2.2s.2-1.8.2-3.5v-1C22 9.8 21.8 8 21.8 8zM10 15V9l5 3-5 3z" />
              </svg>
            </div>

            <div>
              <h4 className="font-semibold">
                YouTube
              </h4>

              <p className="text-sm text-gray-500">
                Campaigns, cinematic trailers & stories
              </p>
            </div>
          </a>

          {/* COMMUNITY */}
          <a
            href="https://discord.gg/yourcommunity"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 text-gray-400 hover:text-cyan-400 transition-all duration-500"
          >

            <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl flex items-center justify-center group-hover:border-cyan-500/40 transition-all duration-500">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M20 4a16.4 16.4 0 00-4.1-1.3l-.2.5a15.3 15.3 0 013.6 1.7 12.7 12.7 0 00-3.2-1.5 13.5 13.5 0 00-8.2 0A12.7 12.7 0 004.7 4.9a15.3 15.3 0 013.6-1.7l-.2-.5A16.4 16.4 0 004 4c-2.5 3.7-3.2 7.3-2.9 10.8a16.8 16.8 0 005.1 2.6l1.1-1.8c-.6-.2-1.2-.5-1.7-.8.1-.1.3-.2.4-.3 3.3 1.5 6.9 1.5 10.2 0 .1.1.3.2.4.3-.5.3-1.1.6-1.7.8l1.1 1.8a16.8 16.8 0 005.1-2.6C23.2 11.3 22.5 7.7 20 4z" />
              </svg>
            </div>

            <div>
              <h4 className="font-semibold">
                Community
              </h4>

              <p className="text-sm text-gray-500">
                Join the modern warrior movement
              </p>
            </div>
          </a>

        </div>
      </div>
    </div>

    {/* BOTTOM BAR */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10">

      <p className="text-gray-500 text-sm tracking-[2px] uppercase text-center md:text-left">
        © 2026 GYM SWORD. All Rights Reserved.
      </p>

      <div className="flex items-center gap-6">

        <a
          href="#"
          className="text-gray-500 hover:text-purple-400 transition-all duration-500 text-sm uppercase tracking-[2px]"
        >
          Privacy Policy
        </a>

        <a
          href="#"
          className="text-gray-500 hover:text-purple-400 transition-all duration-500 text-sm uppercase tracking-[2px]"
        >
          Terms
        </a>

        <a
          href="#"
          className="text-gray-500 hover:text-purple-400 transition-all duration-500 text-sm uppercase tracking-[2px]"
        >
          Contact
        </a>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
};

export default ComingSoon;