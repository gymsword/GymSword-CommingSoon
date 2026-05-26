import React from "react";

const InventoryStatus = () => {

  const items = [
    {
      name: "Oversized Tees",
      stock: 90,
    },

    {
      name: "Premium Hoodies",
      stock: 70,
    },

    {
      name: "Gym Joggers",
      stock: 50,
    },

    {
      name: "Tank Tops",
      stock: 25,
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
          Inventory Status
        </h2>

        <p
          className="
            text-zinc-500
            mt-2
            text-sm
          "
        >
          Product stock availability
        </p>

      </div>

      {/* ITEMS */}
      <div className="space-y-6">

        {items.map((item, index) => (

          <div key={index}>

            <div
              className="
                flex
                items-center
                justify-between
                mb-3
              "
            >

              <h3
                className="
                  text-black
                  font-medium
                "
              >
                {item.name}
              </h3>

              <p
                className="
                  text-zinc-500
                  text-sm
                "
              >
                {item.stock}%
              </p>

            </div>

            {/* BAR */}
            <div
              className="
                w-full
                h-3
                bg-zinc-100
                rounded-full
                overflow-hidden
              "
            >

              <div
                style={{
                  width: `${item.stock}%`,
                }}
                className="
                  h-full
                  bg-black
                  rounded-full
                  transition-all
                  duration-500
                "
              ></div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default InventoryStatus;