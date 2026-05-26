import React from "react";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 7000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 9000 },
  { month: "May", sales: 12000 },
  { month: "Jun", sales: 15000 },
];

const RevenueChart = () => {

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
          Revenue Analytics
        </h2>

        <p className="text-zinc-500 mt-2">
          Monthly sales performance
        </p>

      </div>

      <div className="h-[320px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart data={data}>

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
  );
};

export default RevenueChart;