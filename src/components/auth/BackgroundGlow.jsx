import React from "react";

export default function BackgroundGlow() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.18),transparent_28%)]"></div>

      <div className="absolute top-[-180px] left-[-120px] w-[420px] h-[420px] rounded-full bg-purple-600/20 blur-[140px]"></div>

      <div className="absolute bottom-[-180px] right-[-120px] w-[420px] h-[420px] rounded-full bg-indigo-600/20 blur-[140px]"></div>
    </>
  );
}