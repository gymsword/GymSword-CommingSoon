import { Link } from "react-router-dom";
import React from "react";

import { Heart } from "lucide-react";

import { useCart } from "../context/CartContext";

export default function ProductCard({
  product,
}) {

  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
  } = useCart();

  // ✅ UNIQUE ID
  const cartId =
    `${product.category}-${product.id}`;

  return (
    <div className="border p-4 relative rounded-xl hover:shadow-xl transition">

      {/* ❤️ */}
      <button
        onClick={() =>
          toggleWishlist(product)
        }
        className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md z-10"
      >
        <Heart
          size={20}
          className={`${
            isInWishlist(cartId)
              ? "fill-red-500 text-red-500"
              : "text-black"
          }`}
        />
      </button>

      {/* IMAGE */}
      <img
        src={product.image}
        className="h-60 w-full object-cover rounded-lg"
        alt={
          product.title || product.name
        }
      />

      {/* TITLE */}
      <h2 className="mt-4 font-semibold">
        {product.title || product.name}
      </h2>

      {/* PRICE */}
      {/* <p className="mt-1 text-gray-600">
        <p>₹{product.price}</p>
      </p> */}

      {/* BUTTONS */}
      <div className="flex gap-3 mt-4">

        <Link
          to={`/product/${product.id}`}
          className="flex-1"
        >
          <button className="bg-black text-white px-4 py-2 w-full rounded-lg">
            View
          </button>
        </Link>

        <button
          onClick={() =>
            addToCart(product)
          }
          className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          Cart
        </button>

      </div>
    </div>
  );
}