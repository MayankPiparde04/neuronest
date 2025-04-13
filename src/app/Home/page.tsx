import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0f0f11] text-white px-4">
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight drop-shadow-lg text-cyan-400 mb-4">
        NeuroNest
      </h1>
      <p className="text-lg md:text-xl text-gray-300 text-center max-w-xl leading-relaxed">
        Where intelligent agents hatch <br className="hidden md:block" />
        collaborative solutions.
      </p>
    </div>
  );
}
