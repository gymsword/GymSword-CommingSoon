import React from "react";

const RecentOrders = () => {

  const orders = [
    {
      id: "#1024",
      customer: "Rahul Sharma",
      amount: "₹2499",
      status: "Paid",
    },

    {
      id: "#1025",
      customer: "Aman Singh",
      amount: "₹1899",
      status: "Pending",
    },

    {
      id: "#1026",
      customer: "Rohit Patel",
      amount: "₹3299",
      status: "Paid",
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
          Recent Orders
        </h2>

        <p className="text-zinc-500 mt-2">
          Latest customer purchases
        </p>

      </div>

      <div className="space-y-4">

        {orders.map((order, index) => (

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
            "
          >

            <div>

              <h3
                className="
                  font-semibold
                  text-black
                "
              >
                {order.customer}
              </h3>

              <p
                className="
                  text-zinc-500
                  text-sm
                  mt-1
                "
              >
                {order.id}
              </p>

            </div>

            <div className="text-right">

              <h3
                className="
                  font-bold
                  text-black
                "
              >
                {order.amount}
              </h3>

              <div
                className={`
                  mt-1
                  text-xs
                  px-3
                  py-1
                  rounded-full
                  inline-block

                  ${
                    order.status === "Paid"
                      ? `
                        bg-black
                        text-white
                      `
                      : `
                        bg-zinc-200
                        text-zinc-700
                      `
                  }
                `}
              >
                {order.status}
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default RecentOrders;