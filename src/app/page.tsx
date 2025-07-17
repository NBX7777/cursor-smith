"use client";
import { useState } from "react";
// import Image from "next/image";

export default function Home() {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(input);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20vh', fontSize: '2rem' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="請輸入內容..."
          style={{ fontSize: '1.5rem', padding: '0.5rem', width: '60%' }}
        />
        <button type="submit" style={{ fontSize: '1.5rem', marginLeft: '1rem' }}>
          提交
        </button>
      </form>
      {submitted && (
        <div style={{ marginTop: '2rem', color: '#0070f3' }}>
          你輸入的內容：{submitted}
        </div>
      )}
    </div>
  );
}
