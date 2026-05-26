import React from "react";

import {
  Package,
  Truck,
  CheckCircle,
  XCircle,
  RotateCcw,
  Download,
} from "lucide-react";

import { useCart } from "../context/CartContext";

export default function Orders() {
  // ✅ CONTEXT DATA
  const {
    orders = [],
    cancelOrder,
    returnOrder,
  } = useCart();

  // ✅ DUMMY DATA (SHOWS IF NO REAL ORDERS)
  const dummyOrders = [
    {
      id: "#ORD-1001",
      product: "Premium Oversized Hoodie",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
      price: 2499,
      status: "Delivered",
      date: "10 May 2026",
    },
    {
      id: "#ORD-1002",
      product: "Gym Compression Wear",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
      price: 1799,
      status: "Shipped",
      date: "08 May 2026",
    },
    {
      id: "#ORD-1003",
      product: "Black Streetwear Jacket",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
      price: 3299,
      status: "Cancelled",
      date: "05 May 2026",
    },
  ];

  // ✅ USE REAL ORDERS OR DUMMY
  const allOrders =
    orders.length > 0 ? orders : dummyOrders;

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold">
              My Orders
            </h1>

            <p className="text-gray-500 mt-2">
              Track and manage all your orders.
            </p>
          </div>

          <div className="bg-black text-white px-5 py-3 rounded-2xl">
            {allOrders.length} Orders
          </div>
        </div>

        {/* ORDERS LIST */}
        <div className="space-y-6">

          {allOrders.map((order, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-6 border shadow-sm hover:shadow-lg transition"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">

                {/* LEFT */}
                <div className="flex items-center gap-5">

                  <img
                    src={order.image}
                    alt={order.product}
                    className="w-28 h-28 object-cover rounded-2xl"
                  />

                  <div>
                    <h2 className="text-2xl font-bold">
                      {order.product}
                    </h2>

                    <p className="text-gray-500 mt-1">
                      Order ID: {order.id}
                    </p>

                    <p className="text-gray-500">
                      Date: {order.date}
                    </p>
{/* 
                    <h3 className="text-xl font-semibold mt-2">
                      ₹{order.price}
                    </h3> */}
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col items-end gap-4">

                  {/* STATUS */}
                  <div
                    className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2
                    ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.status === "Delivered" && (
                      <CheckCircle size={18} />
                    )}

                    {order.status === "Shipped" && (
                      <Truck size={18} />
                    )}

                    {order.status === "Cancelled" && (
                      <XCircle size={18} />
                    )}

                    {order.status}
                  </div>

                  {/* ACTIONS */}
                  <div className="flex gap-3 flex-wrap">

                    <button className="px-4 py-2 rounded-xl border hover:bg-gray-100 transition flex items-center gap-2">
                      <Download size={18} />
                      Invoice
                    </button>

                    {order.status !== "Cancelled" && (
                      <button className="px-4 py-2 rounded-xl border hover:bg-red-50 text-red-600 transition flex items-center gap-2">
                        <XCircle size={18} />
                        Cancel
                      </button>
                    )}

                    {order.status === "Delivered" && (
                      <button className="px-4 py-2 rounded-xl border hover:bg-gray-100 transition flex items-center gap-2">
                        <RotateCcw size={18} />
                        Return
                      </button>
                    )}
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}