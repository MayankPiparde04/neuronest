"use client";
import React from "react";
import "./globals.css";
import Home from "./Home/page";
import Header from "@/components/Header";
// import Canvas from "@/components/Canvas";
import CanvasNeuron from "@/components/CanvasNeuron";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* <Canvas /> */}
      <CanvasNeuron />
      <Header />

      <main className="flex-1 w-full">
        <div className="max-w-screen-3xl w-full">
          <Home />
        </div>
      </main>
    </div>
  );
}
