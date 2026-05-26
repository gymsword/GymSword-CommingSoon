import React from "react";

const TopProducts = () => {

  const products = [
    {
      name: "Oversized T-Shirt",
      sales: "1,240 Sales",
      price: "₹1499",
    },

    {
      name: "Premium Hoodie",
      sales: "980 Sales",
      price: "₹2499",
    },

    {
      name: "Gym Joggers",
      sales: "760 Sales",
      price: "₹1899",
    },

    {
      name: "Sports Tank",
      sales: "620 Sales",
      price: "₹999",
    },
  ];

  return (
    <div
      className="
        bg-white
        border
        border-zinc-200
        rounded-[30px]
        p-6
        shadow-sm
      "
    >

      {/* HEADER */}
      <div className="mb-8">

        <h2
          className="
            text-2xl
            font-bold
            text-black
          "
        >
          Top Products
        </h2>

        <p
          className="
            text-zinc-500
            mt-2
            text-sm
          "
        >
          Best selling products
        </p>

      </div>

      {/* PRODUCTS */}
      <div className="space-y-5">

        {products.map((product, index) => (

          <div
            key={index}
            className="
              flex
              items-center
              justify-between
              bg-zinc-50
              border
              border-zinc-100
              rounded-2xl
              p-4
              hover:bg-zinc-100
              transition-all
              duration-300
            "
          >

            {/* LEFT */}
            <div className="flex items-center gap-4">

              {/* IMAGE */}
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-zinc-200
                  overflow-hidden
                "
              >

                <img
                  src="/product1.jpg"
                  alt={product.name}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

              </div>

              {/* INFO */}
              <div>

                <h3
                  className="
                    font-semibold
                    text-black
                  "
                >
                  {product.name}
                </h3>

                <p
                  className="
                    text-zinc-500
                    text-sm
                    mt-1
                  "
                >
                  {product.sales}
                </p>

              </div>

            </div>

            {/* RIGHT */}
            <div className="text-right">

              {/* <h3
                className="
                  text-black
                  font-bold
                "
              >
                {product.price}
              </h3> */}

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
                Top Seller
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default TopProducts;