"use client";

import React from "react";

export default function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 border-b bg-white dark:bg-gray-900">
      {/* Logo 與平台名稱 */}
      <div className="flex items-center gap-2">
        <img src="/globe.svg" alt="Logo" className="w-8 h-8" />
        <span className="font-bold text-lg tracking-wide">數位基礎建設應用平台</span>
      </div>
      {/* 主選單 */}
      <ul className="hidden md:flex gap-6 text-base font-medium">
        <li className="hover:text-blue-600 cursor-pointer">最新消息</li>
        <li className="hover:text-blue-600 cursor-pointer">政府資源</li>
        <li className="hover:text-blue-600 cursor-pointer">業者地圖</li>
        <li className="hover:text-blue-600 cursor-pointer">實證案例</li>
      </ul>
      {/* 右側功能區 */}
      <div className="flex items-center gap-3">
        {/* 外部平台按鈕 */}
        <button title="AI" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
          <img src="/window.svg" alt="AI" className="w-5 h-5" />
        </button>
        <button title="GitHub" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
          <img src="/globe.svg" alt="GitHub" className="w-5 h-5" />
        </button>
        <button title="HuggingFace" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
          <img src="/vercel.svg" alt="HuggingFace" className="w-5 h-5" />
        </button>
        {/* 語言切換 */}
        <button className="ml-2 px-2 py-1 border rounded text-sm">中/EN</button>
        {/* 主題切換（僅佔位） */}
        <button className="ml-2 px-2 py-1 border rounded text-sm">☀️/🌙</button>
      </div>
    </nav>
  );
} 