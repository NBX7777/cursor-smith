"use client";
import { useState } from "react";
// import Image from "next/image";
import { supabase } from "@/lib/supabaseClient"; // 1. 引入 supabase client

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // 2. handleSubmit 改為 async
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 呼叫 supabase insert
    const { error } = await supabase
      .from("TestForm")
      .insert([
        {
          name: form.name,
          email: form.email,
          phone: form.phone
        }
      ]);

    if (error) {
      alert("儲存失敗：" + error.message);
    } else {
      alert(`已成功儲存！\n名字：${form.name}\nEmail：${form.email}\n電話：${form.phone}`);
      setForm({ name: "", email: "", phone: "" });
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'inline-block',
          textAlign: 'left',
          fontSize: '1.2rem',
          background: '#fff',
          padding: '2rem 2.5rem',
          borderRadius: '12px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
          color: '#222',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.2rem' }}>
          <label htmlFor="name" style={{ width: 70, fontWeight: 500, color: '#222' }}>名字：</label>
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="請輸入名字"
            style={{ flex: 1, fontSize: '1.1rem', padding: '0.4rem 0.7rem', borderRadius: 6, border: '1px solid #ccc', color: '#222' }}
            required
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.2rem' }}>
          <label htmlFor="email" style={{ width: 70, fontWeight: 500, color: '#222' }}>Email：</label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="請輸入Email"
            style={{ flex: 1, fontSize: '1.1rem', padding: '0.4rem 0.7rem', borderRadius: 6, border: '1px solid #ccc', color: '#222' }}
            required
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.2rem' }}>
          <label htmlFor="phone" style={{ width: 70, fontWeight: 500, color: '#222' }}>電話：</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="請輸入電話"
            style={{ flex: 1, fontSize: '1.1rem', padding: '0.4rem 0.7rem', borderRadius: 6, border: '1px solid #ccc', color: '#222' }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            fontSize: '1.2rem',
            width: '100%',
            padding: '0.6rem 0',
            borderRadius: 6,
            background: '#0070f3',
            color: '#fff',
            border: 'none',
            fontWeight: 600,
            letterSpacing: 1,
            cursor: 'pointer',
            marginTop: '0.5rem',
            boxShadow: '0 1px 4px rgba(0,0,0,0.06)'
          }}
        >
          提交
        </button>
      </form>
    </div>
  );
}
