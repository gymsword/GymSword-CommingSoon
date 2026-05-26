import React from "react";

const DashboardCard = ({
  title,
  value,
  icon,
  progress = "70%",
}) => {
  return (
    <div
      className="
        bg-white
        border
        border-zinc-200
        rounded-[30px]
        p-5
        sm:p-6
        shadow-sm
        hover:shadow-xl
        transition-all
        duration-300
        hover:-translate-y-1
      "
    >

      {/* TOP */}
      <div className="flex items-start justify-between gap-4">

        {/* LEFT */}
        <div>

          <p
            className="
              text-zinc-500
              text-xs
              uppercase
              tracking-[3px]
            "
          >
            {title}
          </p>

          <h1
            className="
              text-black
              text-3xl
              sm:text-4xl
              font-bold
              mt-4
            "
          >
            {value}
          </h1>

        </div>

        {/* ICON */}
        <div
          className="
            w-14
            h-14
            rounded-2xl
            bg-zinc-100
            border
            border-zinc-200
            flex
            items-center
            justify-center
            text-black
            shrink-0
          "
        >
          {icon}
        </div>

      </div>

      {/* PROGRESS */}
      <div className="mt-6">

        <div
          className="
            h-[7px]
            bg-zinc-100
            rounded-full
            overflow-hidden
          "
        >

          <div
            className="
              h-full
              bg-black
              rounded-full
              transition-all
              duration-500
            "
            style={{
              width: progress,
            }}
          />

        </div>

      </div>

    </div>
  );
};

export default DashboardCard;