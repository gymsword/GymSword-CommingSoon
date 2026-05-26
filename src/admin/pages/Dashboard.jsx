import React from "react";

import {
  ShoppingBag,
  Users,
  CreditCard,
  Package,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

/* LAYOUT */
import AdminLayout from "../layouts/AdminLayout";

/* COMPONENTS */
import DashboardCard from "../components/DashboardCard";
import RevenueChart from "../components/RevenueChart";
import RecentOrders from "../components/RecentOrders";
import QuickActions from "../components/QuickActions";
import InventoryStatus from "../components/InventoryStatus";
import TopProducts from "../components/TopProducts";
import NotificationsPanel from "../components/NotificationsPanel";

const salesData = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 7000 },
  { name: "May", sales: 6500 },
  { name: "Jun", sales: 9000 },
];

const ordersData = [
  { name: "Mon", orders: 40 },
  { name: "Tue", orders: 70 },
  { name: "Wed", orders: 55 },
  { name: "Thu", orders: 90 },
  { name: "Fri", orders: 120 },
  { name: "Sat", orders: 150 },
];

const Dashboard = () => {

  return (
    <AdminLayout>

      {/* HEADER */}
      <div
        className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-5
          mb-8
        "
      >

        <div>

          <p
            className="
              text-zinc-500
              uppercase
              tracking-[4px]
              text-xs
              sm:text-sm
            "
          >
            GymSword Admin
          </p>

          <h1
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              text-black
              mt-3
              leading-tight
            "
          >
            Dashboard Overview
          </h1>

          <p
            className="
              text-zinc-500
              mt-3
              text-sm
              sm:text-base
            "
          >
            Monitor sales, orders, products and analytics.
          </p>

        </div>

        {/* LIVE STATUS */}
        <div
          className="
            bg-white
            border
            border-zinc-200
            rounded-3xl
            px-5
            py-4
            shadow-sm
            w-full
            sm:w-fit
          "
        >

          <div className="flex items-center gap-3">

            <div
              className="
                w-3
                h-3
                rounded-full
                bg-green-500
                animate-pulse
              "
            ></div>

            <p className="text-black font-medium">
              Website Running Live
            </p>

          </div>

        </div>

      </div>

      {/* DASHBOARD CARDS */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-5
          mb-8
        "
      >

        <DashboardCard
          title="Total Sales"
          value="₹2,40,000"
          icon={<CreditCard size={26} />}
        />

        <DashboardCard
          title="Orders"
          value="420"
          icon={<ShoppingBag size={26} />}
        />

        <DashboardCard
          title="Users"
          value="2100"
          icon={<Users size={26} />}
        />

        <DashboardCard
          title="Products"
          value="130"
          icon={<Package size={26} />}
        />

      </div>

      {/* EXTRA PREMIUM SECTION */}
      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-3
          gap-6
          mb-8
        "
      >

        {/* REVENUE */}
        <div className="xl:col-span-2">

          <RevenueChart />

        </div>

        {/* QUICK ACTIONS */}
        <QuickActions />

      </div>

      {/* CHART GRID */}
      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-3
          gap-6
          mb-8
        "
      >

        {/* SALES CHART */}
        <div
          className="
            xl:col-span-2
            bg-white
            border
            border-zinc-200
            rounded-[30px]
            p-6
            shadow-sm
          "
        >

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
                  text-black
                "
              >
                Revenue Analytics
              </h2>

              <p
                className="
                  text-zinc-500
                  text-sm
                  mt-2
                "
              >
                Monthly sales performance
              </p>

            </div>

            <div
              className="
                flex
                items-center
                gap-2
                text-green-600
                font-semibold
              "
            >

              <ArrowUpRight size={20} />

              +18.2%

            </div>

          </div>

          <div className="h-[320px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <LineChart data={salesData}>

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#000"
                  strokeWidth={4}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* GROWTH */}
          <div
            className="
              bg-black
              rounded-[30px]
              p-6
              text-white
              shadow-lg
            "
          >

            <div
              className="
                flex
                items-center
                justify-between
              "
            >

              <div>

                <p className="text-zinc-400">
                  Growth Rate
                </p>

                <h1
                  className="
                    text-5xl
                    font-bold
                    mt-4
                  "
                >
                  28%
                </h1>

              </div>

              <TrendingUp size={40} />

            </div>

            <div
              className="
                mt-6
                flex
                items-center
                gap-2
                text-green-400
              "
            >

              <ArrowUpRight size={18} />

              +12% this month

            </div>

          </div>

          {/* CUSTOMERS */}
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

            <p className="text-zinc-500">
              New Customers
            </p>

            <h1
              className="
                text-4xl
                font-bold
                text-black
                mt-4
              "
            >
              1,248
            </h1>

            <div
              className="
                mt-5
                flex
                items-center
                gap-2
                text-red-500
              "
            >

              <ArrowDownRight size={18} />

              -3% from last week

            </div>

          </div>

          {/* INVENTORY */}
          <InventoryStatus />

        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-6
        "
      >

        {/* ORDERS CHART */}
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
              Weekly Orders
            </h2>

            <p
              className="
                text-zinc-500
                mt-2
                text-sm
              "
            >
              Orders received this week
            </p>

          </div>

          <div className="h-[300px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart data={ordersData}>

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="orders"
                  fill="#000"
                  radius={[10, 10, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* RECENT ORDERS */}
        <RecentOrders />

      </div>

      {/* LAST SECTION */}
      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-6
          mt-8
        "
      >

        <TopProducts />

        <NotificationsPanel />

      </div>

    </AdminLayout>
  );
};

export default Dashboard;