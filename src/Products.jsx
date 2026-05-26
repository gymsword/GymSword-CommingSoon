import React, {
  useState,
  useEffect,
} from "react";

import {
  Heart,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";

import { motion } from "framer-motion";

const Products = () => {

  /* GET PRODUCTS FROM ADMIN PANEL */
  const [products, setProducts] =
    useState([]);

  /* SINGLE PRODUCT PAGE */
  const [selectedProduct, setSelectedProduct] =
    useState(null);

  /* ACTIVE IMAGE */
  const [activeImage, setActiveImage] =
    useState("");

  /* SIZE */
  const [selectedSize, setSelectedSize] =
    useState("M");

  useEffect(() => {

    const savedProducts =
      JSON.parse(
        localStorage.getItem(
          "products"
        )
      ) || [];

    setProducts(savedProducts);

  }, []);

  /* OPEN PRODUCT */
  const handleOpenProduct = (
    product
  ) => {

    setSelectedProduct(product);

    setActiveImage(
      product.image1
    );

    setSelectedSize(
      product.selectedSize ||
        "M"
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  /* BACK */
  const handleBack = () => {

    setSelectedProduct(null);

  };

  /* PRODUCT DETAILS PAGE */
  if (selectedProduct) {

    const images = [
      selectedProduct.image1,
      selectedProduct.image2,
      selectedProduct.image3,
    ].filter(Boolean);

    return (
      <div className="min-h-screen bg-[#f5f1e9]">

        {/* BACK BUTTON */}
        <div className="px-4 sm:px-6 lg:px-10 pt-6">

          <button
            onClick={handleBack}
            className="
              flex
              items-center
              gap-2
              text-black
              font-medium
              hover:opacity-70
              transition
            "
          >

            <ChevronLeft size={20} />

            Back

          </button>

        </div>

        {/* MAIN */}
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-10
            px-4
            sm:px-6
            lg:px-10
            py-6
          "
        >

          {/* LEFT SIDE */}
          <div>

            {/* LARGE IMAGE */}
            <motion.div
              key={activeImage}
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                rounded-[30px]
                overflow-hidden
                bg-[#ebe4d9]
                h-[450px]
                sm:h-[600px]
                lg:h-[750px]
              "
            >

              <img
                src={activeImage}
                alt=""
                className="
                  w-full
                  h-full
                  object-cover
                  hover:scale-105
                  transition-all
                  duration-700
                "
              />

            </motion.div>

            {/* THUMBNAILS */}
            <div
              className="
                flex
                gap-4
                mt-5
                overflow-x-auto
                pb-2
              "
            >

              {images.map(
                (
                  img,
                  index
                ) => (

                  <button
                    key={index}
                    onClick={() =>
                      setActiveImage(
                        img
                      )
                    }
                    className={`
                      min-w-[90px]
                      h-[110px]
                      rounded-2xl
                      overflow-hidden
                      border-2
                      transition-all
                      ${
                        activeImage ===
                        img
                          ? "border-black scale-105"
                          : "border-transparent"
                      }
                    `}
                  >

                    <img
                      src={img}
                      alt=""
                      className="
                        w-full
                        h-full
                        object-cover
                        hover:scale-110
                        transition-all
                        duration-500
                      "
                    />

                  </button>

                )
              )}

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div
            className="
              flex
              flex-col
              justify-center
              xl:pl-10
            "
          >

            {/* COLLECTION */}
            <p
              className="
                uppercase
                tracking-[4px]
                text-sm
                text-gray-500
              "
            >

              {selectedProduct.collection ||
                "Luxury Activewear"}

            </p>

            {/* TITLE */}
            <h1
              className="
                text-3xl
                sm:text-5xl
                font-black
                mt-3
                leading-tight
              "
            >

              {selectedProduct.title}

            </h1>

            {/* CATEGORY */}
            <p
              className="
                text-lg
                text-gray-500
                mt-3
              "
            >

              {selectedProduct.category}

            </p>

            {/* PRICE */}
            <div
              className="
                flex
                items-center
                gap-4
                mt-6
                flex-wrap
              "
            >

              <h2
                className="
                  text-4xl
                  font-black
                "
              >

                ₹
                {
                  selectedProduct.price
                }

              </h2>

              {selectedProduct.oldPrice && (

                <p
                  className="
                    text-2xl
                    text-gray-400
                    line-through
                  "
                >

                  ₹
                  {
                    selectedProduct.oldPrice
                  }

                </p>

              )}

            </div>

            {/* RATING */}
            <div
              className="
                flex
                items-center
                gap-3
                mt-6
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-1
                  bg-white
                  px-4
                  py-2
                  rounded-full
                "
              >

                <Star
                  size={16}
                  className="fill-black"
                />

                <span className="font-semibold">
                  4.9
                </span>

              </div>

              <button
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                "
              >

                <Heart size={20} />

              </button>

            </div>

            {/* DESCRIPTION */}
            <p
              className="
                text-gray-600
                leading-relaxed
                mt-8
                text-base
                sm:text-lg
              "
            >

              {
                selectedProduct.description
              }

            </p>

            {/* SIZE */}
            <div className="mt-10">

              <div
                className="
                  flex
                  items-center
                  justify-between
                  mb-5
                "
              >

                <p
                  className="
                    text-lg
                    font-semibold
                  "
                >

                  Select Size

                </p>

                <button
                  className="
                    text-sm
                    underline
                    font-medium
                  "
                >

                  Size Guide

                </button>

              </div>

              <div
                className="
                  border
                  border-gray-300
                  rounded-3xl
                  p-5
                  flex
                  flex-wrap
                  gap-4
                "
              >

                {(
                  selectedProduct.sizes || [
                    "S",
                    "M",
                    "L",
                    "XL",
                  ]
                ).map(
                  (size) => (

                    <button
                      key={size}
                      onClick={() =>
                        setSelectedSize(
                          size
                        )
                      }
                      className={`
                        w-14
                        h-14
                        rounded-full
                        font-semibold
                        transition-all
                        ${
                          selectedSize ===
                          size
                            ? "bg-black text-white"
                            : "bg-white hover:bg-black hover:text-white"
                        }
                      `}
                    >

                      {size}

                    </button>

                  )
                )}

              </div>

              <p
                className="
                  mt-4
                  text-gray-600
                  font-medium
                "
              >

                Selected Size:
                <span className="ml-2 text-black">

                  {selectedSize}

                </span>

              </p>

            </div>

            {/* BUTTONS */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                gap-4
                mt-10
              "
            >

              <button
                className="
                  flex-1
                  bg-black
                  text-white
                  py-5
                  rounded-full
                  font-bold
                  text-lg
                  hover:scale-[1.02]
                  transition-all
                "
              >

                ADD TO BAG

              </button>

              <button
                className="
                  w-full
                  sm:w-[70px]
                  h-[70px]
                  rounded-full
                  border
                  border-black
                  flex
                  items-center
                  justify-center
                  hover:bg-black
                  hover:text-white
                  transition-all
                "
              >

                <ShoppingBag
                  size={24}
                />

              </button>

            </div>

          </div>

        </div>

      </div>
    );
  }

  /* PRODUCT GRID */
  return (
    <div
      className="
        min-h-screen
        bg-black
        text-white
        px-4
        sm:px-6
        lg:px-10
        py-16
      "
    >

      {/* HEADER */}
      <div
        className="
          flex
          flex-col
          lg:flex-row
          lg:items-end
          lg:justify-between
          gap-8
          mb-16
        "
      >

        <div>

          <p
            className="
              uppercase
              tracking-[6px]
              text-sm
              text-white/50
              mb-4
            "
          >

            Premium Collection

          </p>

          <h1
            className="
              text-4xl
              sm:text-6xl
              font-black
              leading-none
            "
          >

            GymSword

            <span className="block text-white/50">

              Activewear

            </span>

          </h1>

        </div>

        <p
          className="
            max-w-xl
            text-white/60
            leading-relaxed
          "
        >

          Luxury performance apparel crafted for modern athletes and premium streetwear culture.

        </p>

      </div>

      {/* GRID */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-8
        "
      >

        {products.map(
          (
            item,
            index
          ) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                group
                bg-[#111]
                rounded-[30px]
                overflow-hidden
                cursor-pointer
                border
                border-white/10
              "
              onClick={() =>
                handleOpenProduct(
                  item
                )
              }
            >

              {/* IMAGE */}
              <div
                className="
                  relative
                  h-[450px]
                  overflow-hidden
                "
              >

                <img
                  src={item.image1}
                  alt=""
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition-all
                    duration-700
                  "
                />

                {/* HOVER SECOND IMAGE */}
                {item.image2 && (

                  <img
                    src={item.image2}
                    alt=""
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

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/10
                    to-transparent
                  "
                />

              </div>

              {/* CONTENT */}
              <div className="p-6">

                <p
                  className="
                    uppercase
                    tracking-[4px]
                    text-xs
                    text-white/50
                  "
                >

                  {item.collection ||
                    "Luxury Activewear"}

                </p>

                <h2
                  className="
                    text-2xl
                    font-black
                    mt-3
                  "
                >

                  {item.title}

                </h2>

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    mt-5
                  "
                >

                  <div>

                    <p
                      className="
                        text-2xl
                        font-bold
                      "
                    >

                      ₹{item.price}

                    </p>

                    <p
                      className="
                        text-sm
                        text-white/50
                        mt-1
                      "
                    >

                      {item.category}

                    </p>

                  </div>

                  <button
                    className="
                      w-14
                      h-14
                      rounded-full
                      bg-white
                      text-black
                      flex
                      items-center
                      justify-center
                      group-hover:rotate-45
                      transition-all
                    "
                  >

                    <ChevronRight
                      size={22}
                    />

                  </button>

                </div>

              </div>

            </motion.div>

          )
        )}

      </div>

    </div>
  );
};

export default Products;