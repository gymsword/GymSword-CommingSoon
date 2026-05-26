import React from "react";

import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  CreditCard,
  BarChart3,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <LayoutDashboard size={20} />,
    },

    {
      name: "Products",
      path: "/admin/products",
      icon: <Package size={20} />,
    },

    {
      name: "Orders",
      path: "/admin/orders",
      icon: <ShoppingBag size={20} />,
    },

    {
      name: "Users",
      path: "/admin/users",
      icon: <Users size={20} />,
    },

    {
      name: "Payments",
      path: "/admin/payments",
      icon: <CreditCard size={20} />,
    },

    {
      name: "Analytics",
      path: "/admin/analytics",
      icon: <BarChart3 size={20} />,
    },

    {
      name: "Settings",
      path: "/admin/settings",
      icon: <Settings size={20} />,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <aside
      className={`
        h-screen
        bg-white
        border-r
        border-zinc-200
        flex
        flex-col
        justify-between
        shadow-sm
        transition-all
        duration-300
        ease-in-out
        overflow-hidden
        sticky
        top-0
        z-50
        ${collapsed ? "w-[90px]" : "w-[280px]"}
      `}
    >
      {/* TOP */}
      <div className="flex flex-col h-full">
        <div className="px-4 py-5">
          {/* HEADER */}
          <div
            className={`
              flex
              items-center
              ${collapsed ? "justify-center" : "justify-between"}
              mb-8
            `}
          >
            {/* LOGO + TITLE */}
            <div
              className={`
                flex
                items-center
                overflow-hidden
                transition-all
                duration-300
                ${collapsed ? "justify-center" : "gap-3"}
              `}
            >
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  overflow-hidden
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <img
                  src="/logofinal1.png"
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </div>

              {!collapsed && (
                <div className="min-w-0">
                  <h1
                    className="
                      text-black
                      text-2xl
                      font-bold
                      tracking-[2px]
                      whitespace-nowrap
                      leading-none
                    "
                  >
                    GYMSWORD
                  </h1>

                  <p
                    className="
                      text-zinc-500
                      text-[11px]
                      tracking-[3px]
                      uppercase
                      mt-1
                    "
                  >
                    Admin Dashboard
                  </p>
                </div>
              )}
            </div>

            {/* COLLAPSE BUTTON */}
            {!collapsed && (
              <button
                onClick={() => setCollapsed(true)}
                className="
                  w-10
                  h-10
                  rounded-xl
                  border
                  border-zinc-200
                  flex
                  items-center
                  justify-center
                  hover:bg-zinc-100
                  transition-all
                  duration-300
                  shrink-0
                "
              >
                <ChevronLeft size={18} />
              </button>
            )}
          </div>

          {/* COLLAPSED BUTTON */}
          {collapsed && (
            <div className="flex justify-center mb-8">
              <button
                onClick={() => setCollapsed(false)}
                className="
                  w-10
                  h-10
                  rounded-xl
                  border
                  border-zinc-200
                  flex
                  items-center
                  justify-center
                  hover:bg-zinc-100
                  transition-all
                  duration-300
                "
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}

          {/* MENU */}
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `
                    group
                    relative
                    flex
                    items-center
                    ${
                      collapsed
                        ? "justify-center px-0"
                        : "gap-4 px-4"
                    }
                    py-4
                    rounded-2xl
                    transition-all
                    duration-300
                    border
                    font-medium

                    ${
                      isActive
                        ? `
                          bg-black
                          text-white
                          border-black
                          shadow-md
                        `
                        : `
                          bg-white
                          text-zinc-600
                          border-zinc-200
                          hover:bg-zinc-100
                          hover:text-black
                        `
                    }
                  `
                }
              >
                <div className="shrink-0">
                  {item.icon}
                </div>

                {!collapsed && (
                  <span className="tracking-wide whitespace-nowrap">
                    {item.name}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* BOTTOM */}
        <div className="mt-auto px-4 pb-5">
          {!collapsed && (
            <div
              className="
                bg-zinc-100
                border
                border-zinc-200
                rounded-3xl
                p-4
                mb-4
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    overflow-hidden
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <img
                    src="/logofinal1.png"
                    alt="admin"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="overflow-hidden">
                  <h2
                    className="
                      text-black
                      font-semibold
                      whitespace-nowrap
                    "
                  >
                    GymSword Admin
                  </h2>

                  <p
                    className="
                      text-zinc-500
                      text-sm
                      whitespace-nowrap
                    "
                  >
                    Super Admin
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="
              w-full
              flex
              items-center
              justify-center
              gap-3
              bg-black
              hover:bg-zinc-800
              text-white
              py-4
              rounded-2xl
              font-semibold
              transition-all
              duration-300
            "
          >
            <LogOut size={20} />

            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;