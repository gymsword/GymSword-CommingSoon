import React from "react";

import {
  Plus,
  ShoppingBag,
  Users,
  CreditCard,
} from "lucide-react";

const QuickActions = () => {

  const actions = [
    {
      title: "Add Product",
      icon: <Plus size={22} />,
    },

    {
      title: "Orders",
      icon: <ShoppingBag size={22} />,
    },

    {
      title: "Customers",
      icon: <Users size={22} />,
    },

    {
      title: "Payments",
      icon: <CreditCard size={22} />,
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

      <div className="mb-8">

        <h2
          className="
            text-2xl
            font-bold
            text-black
          "
        >
          Quick Actions
        </h2>

        <p className="text-zinc-500 mt-2">
          Manage your store quickly
        </p>

      </div>

      <div
        className="
          grid
          grid-cols-2
          gap-4
        "
      >

        {actions.map((action, index) => (

          <button
            key={index}
            className="
              bg-zinc-100
              hover:bg-black
              hover:text-white
              border
              border-zinc-200
              rounded-2xl
              p-5
              transition-all
              duration-300
              flex
              flex-col
              items-center
              justify-center
              gap-3
            "
          >

            {action.icon}

            <span className="font-medium">
              {action.title}
            </span>

          </button>

        ))}

      </div>

    </div>
  );
};

export default QuickActions;    