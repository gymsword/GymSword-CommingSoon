import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();

export const useCart = () =>
  useContext(CartContext);

export default function CartProvider({
  children,
}) {

  // =========================
  // CART
  // =========================
  const [cart, setCart] = useState(() => {

    const saved =
      localStorage.getItem("cart");

    return saved
      ? JSON.parse(saved)
      : [];

  });

  // =========================
  // WISHLIST
  // =========================
  const [wishlist, setWishlist] =
    useState(() => {

      const saved =
        localStorage.getItem(
          "wishlist"
        );

      return saved
        ? JSON.parse(saved)
        : [];

    });

  // =========================
  // SAVE CART
  // =========================
  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);

  // =========================
  // SAVE WISHLIST
  // =========================
  useEffect(() => {

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

  }, [wishlist]);

  // ===================================================
  // ADD TO CART
  // ===================================================
  const addToCart = (product) => {

    if (!product) return;

    const uniqueId =
      `${product.category}-${product.id || product.cartId}-${product.selectedSize || "M"}`;

    setCart((prevCart) => {

      const existingProduct =
        prevCart.find(
          (item) =>
            item.cartId === uniqueId
        );

      // IF EXISTS
      if (existingProduct) {

        return prevCart.map((item) =>

          item.cartId === uniqueId

            ? {
                ...item,
                qty: item.qty + 1,
              }

            : item
        );
      }

      // NEW PRODUCT
      return [
        ...prevCart,

        {
          ...product,
          cartId: uniqueId,
          qty: 1,
        },
      ];
    });
  };

  // ===================================================
  // REMOVE FROM CART
  // ===================================================
  const removeFromCart = (
    cartId
  ) => {

    setCart((prev) =>

      prev.filter(
        (item) =>
          item.cartId !== cartId
      )
    );
  };

  // ===================================================
  // INCREASE QTY
  // ===================================================
  const increaseQty = (
    cartId
  ) => {

    setCart((prev) =>

      prev.map((item) =>

        item.cartId === cartId

          ? {
              ...item,
              qty: item.qty + 1,
            }

          : item
      )
    );
  };

  // ===================================================
  // DECREASE QTY
  // ===================================================
  const decreaseQty = (
    cartId
  ) => {

    setCart((prev) =>

      prev
        .map((item) =>

          item.cartId === cartId

            ? {
                ...item,
                qty: item.qty - 1,
              }

            : item
        )

        .filter(
          (item) => item.qty > 0
        )
    );
  };

  // ===================================================
  // TOGGLE WISHLIST
  // ===================================================
  const toggleWishlist = (
    product
  ) => {

    if (!product) return;

    const uniqueId =
      `${product.category}-${product.id || product.cartId}-${product.selectedSize || "M"}`;

    const exists =
      wishlist.find(
        (item) =>
          item.cartId === uniqueId
      );

    if (exists) {

      setWishlist((prev) =>

        prev.filter(
          (item) =>
            item.cartId !== uniqueId
        )
      );

    } else {

      setWishlist((prev) => [

        ...prev,

        {
          ...product,
          cartId: uniqueId,
        },
      ]);
    }
  };

  // ===================================================
  // REMOVE FROM WISHLIST
  // ===================================================
  const removeFromWishlist = (
    cartId
  ) => {

    setWishlist((prev) =>

      prev.filter(
        (item) =>
          item.cartId !== cartId
      )
    );
  };

  // ===================================================
  // CHECK WISHLIST
  // ===================================================
  const isInWishlist = (
    cartId
  ) => {

    return wishlist.some(
      (item) =>
        item.cartId === cartId
    );
  };

  // ===================================================
  // PROVIDER
  // ===================================================
  return (
    <CartContext.Provider
      value={{

        // CART
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,

        // WISHLIST
        wishlist,
        toggleWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >

      {children}

    </CartContext.Provider>
  );
}