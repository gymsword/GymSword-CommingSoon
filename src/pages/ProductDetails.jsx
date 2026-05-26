import React, {
  useRef,
  useState,
  useEffect,
} from "react";

import {
  ChevronLeft,
  Heart,
  Star,
  ShoppingBag,
  Share2,
  ShieldCheck,
  Truck,
  RotateCcw,
  Plus,
  Minus,
} from "lucide-react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { useCart } from "../context/CartContext";

const ProductDetails = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const { addToCart } = useCart();

  const leftSectionRef = useRef(null);

  const [wishlist, setWishlist] =
    useState([]);

  const [product, setProduct] =
    useState(null);

  const [activeColor, setActiveColor] =
    useState(0);

  const [selectedSize, setSelectedSize] =
    useState("M");

  const [quantity, setQuantity] =
    useState(1);

  const [activeImage, setActiveImage] =
    useState(0);

  /* GET PRODUCT */
  useEffect(() => {

    const products =
      JSON.parse(
        localStorage.getItem(
          "products"
        )
      ) || [];

    const foundProduct =
      products.find(
        (item) =>
          String(item.id) ===
          String(id)
      );

    if (foundProduct) {

      const colorVariants =
        foundProduct.colors &&
        foundProduct.colors.length > 0
          ? foundProduct.colors
          : [
              {
                name:
                  foundProduct.colorName1 ||
                  "Black",

                images: [
                  foundProduct.image1,
                  foundProduct.image2,
                  foundProduct.image3,
                ],
              },

              {
                name:
                  foundProduct.colorName2 ||
                  "Grey",

                images: [
                  foundProduct.color2image1 ||
                    foundProduct.image1,

                  foundProduct.color2image2 ||
                    foundProduct.image2,

                  foundProduct.color2image3 ||
                    foundProduct.image3,
                ],
              },
            ];

      setProduct({
        ...foundProduct,
        colors: colorVariants,
      });

    }

  }, [id]);

  if (!product) {

    return (
      <div
        className="
          min-h-screen
          bg-black
          flex
          items-center
          justify-center
          text-white
          text-2xl
          font-bold
        "
      >
        Loading...
      </div>
    );
  }

  const currentImages =
    product.colors[
      activeColor
    ].images;

  const currentColorName =
    product.colors[
      activeColor
    ].name;

  /* ADD TO CART */
  const handleAddToCart =
    () => {

      addToCart({
        ...product,
        selectedSize,
        quantity,
        activeColor:
          currentColorName,
      });

    };

  /* WISHLIST */
  const toggleWishlist =
    () => {

      if (
        wishlist.includes(
          product.id
        )
      ) {

        setWishlist(
          wishlist.filter(
            (id) =>
              id !== product.id
          )
        );

      } else {

        setWishlist([
          ...wishlist,
          product.id,
        ]);

      }

    };

  return (

    <div
      className="
        min-h-screen
     
        text-white
        overflow-hidden
      "
    >

      {/* HIDE SCROLLBAR */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }

          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      {/* TOP BAR */}
    

      {/* MAIN */}
      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-[55%_45%]
          mt-12
        "
      >

     {/* ================= LEFT ================= */}
<div
  ref={leftSectionRef}
  className="
    h-[calc(100vh-40px)]
    overflow-y-auto
    hide-scrollbar
    bg-[#050505]
    border-r
    border-gray-800
    px-[2px]
  "
>

  {/* IMAGE GRID */}
  <div
    className="
      grid
      grid-cols-1
      md:grid-cols-2
      gap-[3px]
    "
  >

    {currentImages.map(
      (
        image,
        index
      ) => (

        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay:
              index * 0.1,
          }}
          className={`
            relative
            overflow-hidden
            bg-[#111]
            group
            rounded-[6px]
            ${
              index === 2
                ? "md:col-span-2"
                : ""
            }
          `}
        >

          {/* IMAGE COUNT */}
          <div
            className="
              absolute
              top-4
              left-4
              z-20
              bg-black/70
              backdrop-blur-xl
              text-white
              text-xs
              font-semibold
              px-3
              py-1.5
              rounded-full
              border
              border-white/10
            "
          >

            0{index + 1}

          </div>

          {/* ACTIVE TAG */}
          {activeImage ===
            index && (

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="
                absolute
                top-4
                right-4
                z-20
                bg-white
                text-black
                text-[10px]
                tracking-[2px]
                uppercase
                font-bold
                px-3
                py-1.5
                rounded-full
              "
            >

              Viewing

            </motion.div>

          )}

          {/* IMAGE */}
          <img
            src={image}
            alt=""
            onMouseEnter={() =>
              setActiveImage(
                index
              )
            }
            className="
              w-full
              h-[300px]
              sm:h-[420px]
              md:h-[500px]
              xl:h-[650px]
              object-cover
              transition-all
              duration-700
              ease-out
              group-hover:scale-105
            "
          />

          {/* DARK OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/50
              via-transparent
              to-transparent
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-500
            "
          />

          {/* BOTTOM SHADOW */}
          <div
            className="
              absolute
              bottom-0
              left-0
              w-full
              h-24
              bg-gradient-to-t
              from-black/70
              to-transparent
              opacity-70
            "
          />

        </motion.div>

      )
    )}

  </div>

</div>
     {/* ================= RIGHT ================= */}
<div
  className="
    h-screen
    overflow-y-auto
    hide-scrollbar
    border-l
    border-gray-200
  "
>

  <div
    className="
      max-w-[650px]
      mx-auto
      px-5
      sm:px-8
      xl:px-14
      py-12
    "
  >

    {/* BRAND */}
    <p
      className="
        uppercase
        tracking-[5px]
        text-gray-500
        text-xs
        mb-5
        font-semibold
      "
    >
      THEGRIND-CLUB
    </p>

    {/* TITLE */}
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
        duration: 0.5,
      }}
      className="
        text-4xl
        sm:text-6xl
        font-black
        leading-[0.95]
        uppercase
        text-[#111]
      "
    >

      {product.title}

    </motion.h1>

    {/* DESC */}
    <p
      className="
        mt-8
        text-gray-500
        leading-[2]
        text-[17px]
      "
    >
      Premium Luxury Fabric |
      4-Way Stretch |
      Sweat-Wicking |
      Breathable Material |
      Relaxed Fit |
      Ultra Soft Feel
    </p>

    {/* PRICE */}
    <div
      className="
        flex
        items-center
        gap-5
        mt-10
        flex-wrap
      "
    >

      <span
        className="
          text-gray-400
          line-through
          text-2xl
        "
      >
        ₹1,999
      </span>

      <span
        className="
          text-4xl
          font-black
          text-[#111]
        "
      >
        ₹{product.price}
      </span>

      <div
        className="
          px-4
          py-1.5
          rounded-full
          bg-white
          border
          border-gray-300
          text-sm
          text-gray-600
        "
      >
        Sale
      </div>

    </div>

    {/* OFFER */}
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      className="
        mt-10
        bg-white
        border
        border-gray-200
        py-5
        px-6
        rounded-3xl
        text-[#111]
        font-bold
        text-lg
        shadow-sm
      "
    >

      Get 10% Extra Off On
      Your Prepaid Orders

    </motion.div>

    {/* SIZE */}
    <div className="mt-14">

      <h3
        className="
          text-lg
          font-semibold
          mb-5
          text-[#111]
        "
      >
        Select Size
      </h3>

      <div className="flex gap-4 flex-wrap">

        {[
          "S",
          "M",
          "L",
          "XL",
          "2XL",
        ].map((size) => (

          <button
            key={size}
            onClick={() =>
              setSelectedSize(size)
            }
            className={`
              min-w-[78px]
              h-[58px]
              rounded-full
              border
              transition-all
              duration-300
              font-semibold
              ${
                selectedSize === size
                  ? `
                    bg-[#111]
                    text-white
                    border-[#111]
                    scale-105
                  `
                  : `
                    bg-white
                    border-gray-300
                    text-gray-600
                    hover:bg-[#111]
                    hover:text-white
                  `
              }
            `}
          >

            {size}

          </button>

        ))}

      </div>

    </div>

    {/* COLORS */}
    <div className="mt-12">

      <h3
        className="
          text-lg
          font-semibold
          mb-5
          text-[#111]
        "
      >

        Color :
        <span className="text-gray-500 ml-2">

          {currentColorName}

        </span>

      </h3>

      <div className="flex gap-4">

        {product.colors.map(
          (
            color,
            index
          ) => (

            <button
              key={index}
              onClick={() =>
                setActiveColor(index)
              }
              className={`
                w-16
                h-16
                rounded-full
                overflow-hidden
                border-2
                transition-all
                duration-300
                ${
                  activeColor === index
                    ? `
                      border-[#111]
                      scale-110
                    `
                    : `
                      border-gray-300
                    `
                }
              `}
            >

              <img
                src={
                  color.images[0]
                }
                alt=""
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

            </button>

          )
        )}

      </div>

    </div>

    {/* REVIEW */}
    <div
      className="
        flex
        items-center
        gap-4
        mt-12
        flex-wrap
      "
    >

      <div
        className="
          flex
          items-center
          gap-2
          bg-white
          border
          border-gray-200
          px-5
          py-3
          rounded-full
        "
      >

        <Star
          size={16}
          className="
            fill-[#111]
            text-[#111]
          "
        />

        <span
          className="
            font-semibold
            text-[#111]
          "
        >

          4.9

        </span>

        <span className="text-gray-500">

          (248)

        </span>

      </div>

      <button
        onClick={toggleWishlist}
        className="
          w-14
          h-14
          rounded-full
          border
          border-gray-200
          bg-white
          flex
          items-center
          justify-center
          text-[#111]
          hover:bg-[#111]
          hover:text-white
          transition-all
        "
      >

        <Heart
          className={
            wishlist.includes(
              product.id
            )
              ? "fill-[#111]"
              : ""
          }
        />

      </button>

      <button
        className="
          w-14
          h-14
          rounded-full
          border
          border-gray-200
          bg-white
          flex
          items-center
          justify-center
          text-[#111]
          hover:bg-[#111]
          hover:text-white
          transition-all
        "
      >

        <Share2 />

      </button>

    </div>

    {/* QUANTITY */}
    <div className="mt-14">

      <h3
        className="
          text-lg
          font-semibold
          mb-5
          text-[#111]
        "
      >
        Quantity
      </h3>

      <div
        className="
          w-[190px]
          h-[68px]
          border
          border-gray-200
          bg-white
          rounded-2xl
          flex
          items-center
          justify-between
          px-6
        "
      >

        <button
          onClick={() =>
            setQuantity(
              quantity > 1
                ? quantity - 1
                : 1
            )
          }
          className="
            text-[#111]
            hover:text-gray-500
            transition-all
          "
        >

          <Minus />

        </button>

        <span
          className="
            text-xl
            font-bold
            text-[#111]
          "
        >

          {quantity}

        </span>

        <button
          onClick={() =>
            setQuantity(
              quantity + 1
            )
          }
          className="
            text-[#111]
            hover:text-gray-500
            transition-all
          "
        >

          <Plus />

        </button>

      </div>

    </div>

    {/* BUTTONS */}
    <div className="mt-14 space-y-5">

      <motion.button
        whileHover={{
          scale: 1.01,
        }}
        whileTap={{
          scale: 0.98,
        }}
        onClick={handleAddToCart}
        className="
          w-full
          h-[78px]
          bg-[#111]
          text-white
          text-xl
          font-bold
          rounded-3xl
          hover:bg-gray-800
          transition-all
          duration-300
          flex
          items-center
          justify-center
          gap-3
        "
      >

        <ShoppingBag />

        Add To Cart

      </motion.button>

      <motion.button
        whileHover={{
          scale: 1.01,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="
          w-full
          h-[78px]
          bg-white
          border
          border-gray-300
          text-[#111]
          text-xl
          font-bold
          rounded-3xl
          hover:bg-gray-100
          transition-all
          duration-300
        "
      >

        Buy It Now

      </motion.button>

    </div>

  </div>

</div>

      </div>

    </div>
  );
};

export default ProductDetails;