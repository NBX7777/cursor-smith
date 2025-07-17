import React from "react";

export default function Hero() {
  return (
    <section className="text-center py-12">
      <h1 className="text-3xl md:text-5xl font-extrabold mb-4">強化台灣數位產業核心競爭力</h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
        促進公私部門合作，推動數位基礎建設應用
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
        <div className="flex-1 bg-blue-50 dark:bg-blue-900 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">算力</h2>
          <p className="text-gray-700 dark:text-gray-200">高效運算資源，驅動產業升級</p>
        </div>
        <div className="flex-1 bg-green-50 dark:bg-green-900 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">數據</h2>
          <p className="text-gray-700 dark:text-gray-200">數據整合應用，釋放產業潛能</p>
        </div>
        <div className="flex-1 bg-yellow-50 dark:bg-yellow-900 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">程式碼</h2>
          <p className="text-gray-700 dark:text-gray-200">開源協作創新，加速數位轉型</p>
        </div>
      </div>
    </section>
  );
} 