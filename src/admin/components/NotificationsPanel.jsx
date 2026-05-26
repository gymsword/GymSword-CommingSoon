import React from "react";

import {
  Bell,
  ShoppingBag,
  CreditCard,
  Users,
  AlertTriangle,
} from "lucide-react";

const NotificationsPanel = () => {

  const notifications = [
    {
      icon: <ShoppingBag size={18} />,
      title: "New Order Received",
      desc: "Order #1024 has been placed",
    },

    {
      icon: <CreditCard size={18} />,
      title: "Payment Successful",
      desc: "₹2,499 payment completed",
    },

    {
      icon: <Users size={18} />,
      title: "New User Registered",
      desc: "A new customer joined",
    },

    {
      icon: <AlertTriangle size={18} />,
      title: "Low Stock Alert",
      desc: "Tank Tops stock is low",
    },
  ];

  return (
    <div
      className="
        bg-black
        text-white
        rounded-[30px]
        p-6
        shadow-lg
      "
    >

      {/* HEADER */}
      <div
        className="
          flex
          items-center
          justify-between
          mb-8
        "
      >

        <div>

          <h2
            className="
              text-2xl
              font-bold
            "
          >
            Notifications
          </h2>

          <p
            className="
              text-zinc-400
              text-sm
              mt-2
            "
          >
            Latest store activities
          </p>

        </div>

        {/* ICON */}
        <div
          className="
            w-12
            h-12
            rounded-2xl
            bg-white/10
            flex
            items-center
            justify-center
          "
        >

          <Bell size={22} />

        </div>

      </div>

      {/* LIST */}
      <div className="space-y-4">

        {notifications.map((item, index) => (

          <div
            key={index}
            className="
              flex
              items-start
              gap-4
              bg-white/10
              hover:bg-white/15
              rounded-2xl
              p-4
              transition-all
              duration-300
            "
          >

            {/* ICON */}
            <div
              className="
                w-11
                h-11
                rounded-xl
                bg-white
                text-black
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              {item.icon}
            </div>

            {/* TEXT */}
            <div>

              <h3
                className="
                  font-semibold
                  text-white
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  text-zinc-400
                  text-sm
                  mt-1
                "
              >
                {item.desc}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default NotificationsPanel;