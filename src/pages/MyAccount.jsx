import React, { useState } from "react";

import {
  User,
  Mail,
  Phone,
  MapPin,
  Shield,
  LogOut,
  Package,
  Heart,
  CreditCard,
  Bell,
  Lock,
  Pencil,
  Download,
  Camera,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function MyAccount() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  // ✅ STATES
  const [name, setName] = useState(
    user?.name || "Pratham"
  );

  const [email, setEmail] = useState(
    user?.email || "example@gmail.com"
  );

  const [phone, setPhone] = useState(
    "+91 9876543210"
  );

  const [address, setAddress] = useState(
    "Gurgaon, Haryana, India"
  );

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-28 px-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-black to-zinc-900 rounded-3xl p-10 text-white shadow-xl">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* USER */}
            <div className="flex items-center gap-6">

              {/* PROFILE IMAGE */}
              <div className="relative">

                <div className="w-28 h-28 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <User size={46} />
                </div>

                {/* CAMERA */}
                <button className="absolute bottom-0 right-0 bg-white text-black p-2 rounded-full shadow-lg">
                  <Camera size={16} />
                </button>

              </div>

              {/* USER INFO */}
              <div>

                <h1 className="text-4xl font-bold">
                  {name}
                </h1>

                <p className="text-gray-300 mt-2">
                  Premium GymSword Member
                </p>

                <div className="flex gap-3 mt-4">

                  <button className="bg-white text-black px-5 py-2 rounded-xl flex items-center gap-2 hover:opacity-90 transition">
                    <Pencil size={16} />
                    Edit Profile
                  </button>

                  <button className="border border-white/20 px-5 py-2 rounded-xl hover:bg-white/10 transition">
                    Upload Photo
                  </button>

                </div>

              </div>
            </div>

            {/* LOGOUT */}
            <button
              onClick={() => {
                localStorage.removeItem("user");
                navigate("/login");
              }}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl transition"
            >
              <LogOut size={18} />
              Logout
            </button>

          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-8">

            {/* PERSONAL INFO */}
            <div className="bg-white rounded-3xl shadow-sm p-8 border">

              <div className="flex items-center justify-between mb-8">

                <h2 className="text-2xl font-bold">
                  Personal Information
                </h2>

                <button className="text-sm bg-black text-white px-4 py-2 rounded-xl">
                  Save Changes
                </button>

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                {/* NAME */}
                <div>

                  <label className="text-sm text-gray-500">
                    Full Name
                  </label>

                  <div className="flex items-center gap-3 border rounded-2xl px-4 py-3 mt-2">

                    <User size={18} />

                    <input
                      type="text"
                      value={name}
                      onChange={(e) =>
                        setName(e.target.value)
                      }
                      className="w-full outline-none"
                    />

                  </div>
                </div>

                {/* EMAIL */}
                <div>

                  <label className="text-sm text-gray-500">
                    Email Address
                  </label>

                  <div className="flex items-center gap-3 border rounded-2xl px-4 py-3 mt-2">

                    <Mail size={18} />

                    <input
                      type="email"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                      className="w-full outline-none"
                    />

                  </div>
                </div>

                {/* PHONE */}
                <div>

                  <label className="text-sm text-gray-500">
                    Phone Number
                  </label>

                  <div className="flex items-center gap-3 border rounded-2xl px-4 py-3 mt-2">

                    <Phone size={18} />

                    <input
                      type="text"
                      value={phone}
                      onChange={(e) =>
                        setPhone(e.target.value)
                      }
                      className="w-full outline-none"
                    />

                  </div>
                </div>

                {/* ADDRESS */}
                <div>

                  <label className="text-sm text-gray-500">
                    Shipping Address
                  </label>

                  <div className="flex items-center gap-3 border rounded-2xl px-4 py-3 mt-2">

                    <MapPin size={18} />

                    <input
                      type="text"
                      value={address}
                      onChange={(e) =>
                        setAddress(e.target.value)
                      }
                      className="w-full outline-none"
                    />

                  </div>
                </div>

              </div>
            </div>

            {/* SECURITY */}
            <div className="bg-white rounded-3xl shadow-sm p-8 border">

              <div className="flex items-center gap-3 mb-8">

                <Lock />

                <h2 className="text-2xl font-bold">
                  Security Settings
                </h2>

              </div>

              <div className="space-y-5">

                <div className="border rounded-2xl p-5 flex items-center justify-between">

                  <div>

                    <h3 className="font-semibold">
                      Change Password
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Update your account password regularly.
                    </p>

                  </div>

                  <button className="bg-black text-white px-5 py-2 rounded-xl">
                    Update
                  </button>

                </div>

                <div className="border rounded-2xl p-5 flex items-center justify-between">

                  <div>

                    <h3 className="font-semibold">
                      Two Factor Authentication
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Extra security for your account.
                    </p>

                  </div>

                  <button className="border px-5 py-2 rounded-xl">
                    Enable
                  </button>

                </div>

              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">

            {/* MEMBERSHIP */}
            <div className="bg-white rounded-3xl shadow-sm border p-8">

              <div className="flex items-center gap-3 mb-5">

                <Shield className="text-black" />

                <h2 className="text-xl font-bold">
                  Membership
                </h2>

              </div>

              <div className="bg-black text-white rounded-2xl p-5">

                <p className="text-gray-300 text-sm">
                  Current Plan
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  Premium Gold
                </h3>

                <p className="text-sm mt-3 text-gray-300">
                  Access premium products and fast delivery.
                </p>

              </div>
            </div>

            {/* PAYMENT METHODS */}
            <div className="bg-white rounded-3xl shadow-sm border p-8">

              <div className="flex items-center gap-3 mb-5">

                <CreditCard />

                <h2 className="text-xl font-bold">
                  Payment Methods
                </h2>

              </div>

              <div className="border rounded-2xl p-5">

                <p className="font-semibold">
                  Visa ending in 4589
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Default payment method
                </p>

              </div>

            </div>

            {/* NOTIFICATIONS */}
            <div className="bg-white rounded-3xl shadow-sm border p-8">

              <div className="flex items-center gap-3 mb-5">

                <Bell />

                <h2 className="text-xl font-bold">
                  Notifications
                </h2>

              </div>

              <div className="space-y-4">

                <div className="flex items-center justify-between">
                  <span>Email Notifications</span>

                  <input type="checkbox" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <span>Order Updates</span>

                  <input type="checkbox" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <span>Promotional Offers</span>

                  <input type="checkbox" />
                </div>

              </div>

            </div>

            {/* QUICK ACTIONS */}
            <div className="bg-white rounded-3xl shadow-sm border p-8">

              <h2 className="text-xl font-bold mb-5">
                Quick Actions
              </h2>

              <div className="space-y-4">

                <button
                  onClick={() => navigate("/orders")}
                  className="w-full flex items-center justify-between border rounded-2xl p-4 hover:bg-gray-50 transition"
                >

                  <div className="flex items-center gap-3">
                    <Package size={20} />
                    <span>Order History</span>
                  </div>

                  <span>→</span>

                </button>

                <button
                  onClick={() => navigate("/wishlist")}
                  className="w-full flex items-center justify-between border rounded-2xl p-4 hover:bg-gray-50 transition"
                >

                  <div className="flex items-center gap-3">
                    <Heart size={20} />
                    <span>Wishlist</span>
                  </div>

                  <span>→</span>

                </button>

                <button className="w-full flex items-center justify-between border rounded-2xl p-4 hover:bg-gray-50 transition">

                  <div className="flex items-center gap-3">
                    <Download size={20} />
                    <span>Download Invoice</span>
                  </div>

                  <span>↓</span>

                </button>
 
              </div>
            </div>
 
          </div>
 
        </div>
      </div>
    </div>
  );
}