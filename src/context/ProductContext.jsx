import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ProductContext =
  createContext();

export const ProductProvider = ({
  children,
}) => {

  const [products, setProducts] =
    useState(() => {

      const saved =
        localStorage.getItem(
          "products"
        );

      return saved
        ? JSON.parse(saved)
        : [];

    });

  // SAVE PRODUCTS
  useEffect(() => {

    localStorage.setItem(
      "products",
      JSON.stringify(products)
    );

  }, [products]);

  // ADD PRODUCT
  const addProduct = (product) => {

    setProducts((prev) => [
      ...prev,
      {
        ...product,
        id: Date.now(),
      },
    ]);

  };

  // DELETE PRODUCT
  const deleteProduct = (id) => {

    setProducts((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );

  };

  // UPDATE PRODUCT
  const updateProduct = (
    id,
    updatedProduct
  ) => {

    setProducts((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              ...updatedProduct,
            }
          : item
      )
    );

  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () =>
  useContext(ProductContext);