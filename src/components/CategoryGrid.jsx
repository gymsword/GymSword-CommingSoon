import React, {
  useState,
  useCallback,
  memo,
} from "react";

import { useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";

import {
  Heart,
  ShoppingBag,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

import CartSidebar from "./CartSidebar";

/* IMPORT PRODUCTS */
import { products } from "../data/data";

/* PRODUCT CARD */
const ProductCard = memo(
  ({
    item,
    handleAdd,
    toggleWishlist,
    wishlist,
    activeId,
    navigate,
  }) => {

    const [selectedSize, setSelectedSize] =
      useState(
        item.selectedSize || "M"
      );

    return (

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        whileHover={{
          y: -10,
        }}
        transition={{
          duration: 0.5,
        }}
        onClick={() =>
          navigate(
            `/product/${item.id}`
          )
        }
        className="
          group
          relative
          overflow-hidden
          rounded-[30px]
          bg-[#111]
          border
          border-white/10
          shadow-[0_20px_80px_rgba(0,0,0,0.3)]
          w-full
          cursor-pointer
        "
      >

        {/* BACKGROUND BLUR */}
        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
            scale-125
            blur-[70px]
            opacity-40
          "
          style={{
            backgroundImage: `url(${item.image1})`,
          }}
        />

        {/* IMAGE SECTION */}
        <div
          className="
            relative
            overflow-hidden
            h-[420px]
          "
        >

          {/* WISHLIST */}
          <motion.button
            whileHover={{
              scale: 1.15,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={(e) => {

              e.stopPropagation();

              toggleWishlist(
                item.id
              );

            }}
            className="
              absolute
              top-4
              right-4
              z-40
              w-10
              h-10
              rounded-full
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              flex
              items-center
              justify-center
            "
          >

            <Heart
              size={18}
              className={`transition duration-300 ${
                wishlist.includes(
                  item.id
                )
                  ? "fill-white text-white"
                  : "text-white"
              }`}
            />

          </motion.button>

          {/* COMING SOON */}
          <div
            className="
              absolute
              top-4
              left-4
              z-40
            "
          >

            <span
              className="
                px-4
                py-2
                rounded-full
                bg-white/10
                backdrop-blur-xl
                border
                border-white/10
                text-white
                text-[10px]
                uppercase
                tracking-[4px]
              "
            >

              Coming Soon

            </span>

          </div>

          {/* IMAGES */}
        {/* IMAGES */}
<div
  className="
    relative
    w-full
    h-full
    overflow-hidden
  "
>

  {/* MAIN IMAGE */}
  <motion.img
    src={
      item.image1 ||
      item.image ||
      "/placeholder.png"
    }
    loading="lazy"
    alt={item.title}
    className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
      transition-all
      duration-700
      group-hover:scale-110
    "
  />

  {/* SECOND IMAGE */}
  {item.image2 && (

    <motion.img
      src={item.image2}
      loading="lazy"
      alt={item.title}
      className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-700
      "
    />

  )}

  {/* THIRD IMAGE */}
  {item.image3 && (

    <motion.img
      src={item.image3}
      loading="lazy"
      alt={item.title}
      className="
        hidden
      "
    />

  )}

  {/* BLUR OVERLAY */}
  <div
    className="
      absolute
      inset-0
      bg-black/35
      backdrop-blur-[1px]
    "
  />

</div>

          {/* OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/90
              via-black/20
              to-transparent
            "
          />

          {/* CENTER LOGO */}
          <div
            className="
              absolute
              inset-0
              flex
              flex-col
              items-center
              justify-center
              z-30
              pointer-events-none
              backdrop-blur-[3px]
            "
          >

            <motion.img
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              src="/GymSwordlogo.png"
              alt="logo"
              className="
                w-20
                sm:w-24
                md:w-28
                opacity-95
                object-contain
                drop-shadow-[0_0_40px_rgba(255,255,255,0.35)]
              "
            />

            <p
              className="
                mt-4
                text-[11px]
                tracking-[6px]
                uppercase
                text-white
                font-semibold
                bg-white/10
                border
                border-white/10
                px-5
                py-2
                rounded-full
                backdrop-blur-xl
              "
            >

              Premium Collection

            </p>

          </div>

          {/* QUICK ADD */}
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            onClick={(e) => {

              e.stopPropagation();

              handleAdd({
                ...item,
                selectedSize,
              });

            }}
            className={`
              absolute
              bottom-5
              left-1/2
              -translate-x-1/2
              z-40
              px-5
              sm:px-7
              py-3
              rounded-full
              text-[10px]
              sm:text-[11px]
              uppercase
              tracking-[3px]
              font-bold
              transition-all
              duration-500
              flex
              items-center
              gap-2
              opacity-0
              translate-y-8
              group-hover:opacity-100
              group-hover:translate-y-0
              ${
                activeId === item.id
                  ? "bg-green-500 text-white"
                  : "bg-white text-black hover:bg-black hover:text-white border border-white/20"
              }
            `}
          >

            {activeId === item.id ? (
              "Added ✓"
            ) : (
              <>
                Add To Cart

                <ArrowUpRight
                  size={14}
                />
              </>
            )}

          </motion.button>

        </div>

        {/* CONTENT */}
        <div
          className="
            relative
            z-30
            p-5
            sm:p-6
          "
        >

          {/* CATEGORY */}
          <div
            className="
              flex
              items-center
              gap-2
              mb-3
            "
          >

            <div
              className="
                w-2
                h-2
                rounded-full
                bg-white
                animate-pulse
              "
            />

            <p
              className="
                text-[10px]
                tracking-[4px]
                uppercase
                text-white/50
              "
            >

              {item.collection}

            </p>

          </div>

          {/* TITLE */}
          <h3
            className="
              text-xl
              sm:text-2xl
              font-black
              tracking-[-1px]
              text-white
              leading-tight
            "
          >

            {item.title}

          </h3>

          {/* SIZE */}
          <div className="mt-5">

            <p
              className="
                text-[10px]
                uppercase
                tracking-[3px]
                text-white/50
                mb-3
              "
            >

              Available Sizes

            </p>

            <div
              className="
                flex
                items-center
                gap-2
                flex-wrap
              "
            >

              {(
                item.sizes || [
                  "S",
                  "M",
                  "L",
                  "XL",
                ]
              ).map((size) => (

                <button
                  key={size}
                  onClick={(e) => {

                    e.stopPropagation();

                    setSelectedSize(
                      size
                    );

                  }}
                  className={`
                    min-w-[42px]
                    h-10
                    px-3
                    rounded-full
                    text-[11px]
                    border
                    transition-all
                    duration-300
                    ${
                      selectedSize ===
                      size
                        ? "bg-white text-black border-white"
                        : "bg-white/5 text-white border-white/20 hover:bg-white hover:text-black"
                    }
                  `}
                >

                  {size}

                </button>

              ))}

            </div>

          </div>

          {/* DESCRIPTION */}
          <p
            className="
              text-sm
              text-white/50
              mt-5
              leading-relaxed
              line-clamp-2
            "
          >

            {item.description}

          </p>

        </div>

      </motion.div>

    );
  }
);

export default function CategoryGrid() {

  const navigate =
    useNavigate();

  const {
    addToCart,
    cart,
  } = useCart();

  const [activeId, setActiveId] =
    useState(null);

  const [wishlist, setWishlist] =
    useState([]);

  const [openCart, setOpenCart] =
    useState(false);

  /* ADD TO CART */
  const handleAdd = useCallback(
    (item) => {

      addToCart(item);

      setActiveId(item.id);

      setOpenCart(true);

      setTimeout(() => {

        setActiveId(null);

      }, 700);

    },
    [addToCart]
  );

  /* WISHLIST */
  const toggleWishlist =
    useCallback((id) => {

      setWishlist((prev) =>

        prev.includes(id)

          ? prev.filter(
              (i) => i !== id
            )

          : [...prev, id]
      );

    }, []);

  return (

    <div
      className="
        bg-[#0a0a0a]
        text-white
        px-4
        sm:px-5
        md:px-10
        py-16
        overflow-hidden
        relative
      "
    >

      {/* TOP GLOW */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[250px]
          bg-white/5
          blur-[120px]
          rounded-full
        "
      />

      {/* HEADER */}
      <div
        className="
          relative
          z-20
          flex
          flex-col
          lg:flex-row
          lg:items-end
          lg:justify-between
          gap-8
          mb-14
        "
      >

        {/* LEFT */}
        <div>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            className="
              uppercase
              tracking-[7px]
              text-[11px]
              text-white/50
              mb-4
            "
          >

            Future Luxury

          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            className="
              text-4xl
              md:text-6xl
              font-black
              leading-[0.95]
            "
          >

            GymSword

            <span className="block text-white/60">

              COLLECTION

            </span>

          </motion.h2>

        </div>

        {/* RIGHT */}
        <div
          className="
            flex
            items-center
            gap-6
          "
        >

          <p
            className="
              text-sm
              text-white/50
              max-w-xs
              leading-relaxed
              hidden
              sm:block
            "
          >

            Crafted for modern athletes and luxury streetwear culture.

          </p>

          {/* CART */}
          <motion.button
            whileHover={{
              scale: 1.08,
              rotate: 3,
            }}
            onClick={() =>
              setOpenCart(true)
            }
            className="
              relative
              w-14
              h-14
              rounded-full
              bg-white
              text-black
              flex
              items-center
              justify-center
              shadow-2xl
            "
          >

            <ShoppingBag
              size={24}
            />

            {cart.length > 0 && (

              <span
                className="
                  absolute
                  -top-1
                  -right-1
                  bg-black
                  text-white
                  text-[10px]
                  w-5
                  h-5
                  rounded-full
                  flex
                  items-center
                  justify-center
                  border
                  border-white
                "
              >

                {cart.length}

              </span>

            )}

          </motion.button>

        </div>

      </div>

      {/* PRODUCT GRID */}
      <div
        className="
          relative
          z-20
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-8
        "
      >

        {products.map((item) => (

          <ProductCard
            key={item.id}
            item={item}
            handleAdd={handleAdd}
            toggleWishlist={
              toggleWishlist
            }
            wishlist={wishlist}
            activeId={activeId}
            navigate={navigate}
          />

        ))}

      </div>

      {/* CART SIDEBAR */}
      <CartSidebar
        isOpen={openCart}
        setIsOpen={setOpenCart}
      />

    </div>

  );
}