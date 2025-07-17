import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
// import { useState } from "react";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <Hero />
        {/* 預留區塊：政府資源、業者地圖、數位實證案例 */}
        <section className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
          <div className="rounded-lg border p-6 text-center opacity-60">政府資源入口（預留）</div>
          <div className="rounded-lg border p-6 text-center opacity-60">業者資源地圖（預留）</div>
          <div className="rounded-lg border p-6 text-center opacity-60">數位實證案例（預留）</div>
        </section>
      </main>
    </div>
  );
}
