'use client';

import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { useState } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const SERVICES = [
  "Microblading", "Powder Brows", "Lip Blush",
  "Permanent Eyeliner", "Lash Enhancement", "Nano Brows",
];

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const TIMES = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

const inputClass =
  "w-full bg-transparent border-0 border-b border-[#1a1a1a]/30 focus:border-[#1a1a1a] focus:outline-none py-2 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a] transition-colors duration-200";

const selectClass =
  "w-full bg-transparent border-0 border-b border-[#1a1a1a]/30 focus:border-[#1a1a1a] focus:outline-none py-2 text-sm text-[#1a1a1a] transition-colors duration-200 cursor-pointer appearance-none";

export default function ContactPage() {
  // ✅ Correctly reading the .className property here
  const labelClass = `${playfair.className} block text-[20px] text-[#1a1a1a] mb-2`;

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    day: "",
    time: "",
    previousPmu: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="bg-[#F5F0E8]">
      {/* ── HERO ── */}
      <div className="w-full min-h-screen relative overflow-hidden flex flex-col justify-center">
        {/* BG SVG */}
        <div className="absolute top-20 z-0">
          <img src="/svgs/contactbg.svg" alt="" className="w-full h-full" />
        </div>

        {/* Image + CONTACT overlay */}
        <div className="relative z-10 flex justify-center px-6 md:px-0">
          <div className="relative w-full max-w-[640px] md:max-w-[700px] h-[220px] md:h-[300px]">
            <Image
              src="/images/contact.jpg"
              alt="Contact"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className={`${playfair.className} text-white text-6xl md:text-8xl lg:text-9xl font-normal tracking-widest`}>
                CONTACT
              </h1>
            </div>
          </div>
        </div>

        {/* Body text */}
        <div className="relative z-10 px-8 md:px-16 mt-10 max-w-xl">
          <p className="text-[#1a1a1a] text-xs md:text-sm leading-relaxed">
            Your features are entirely unique. Your appointment should be too. At
            BROWN THEORY, we operate strictly by appointment to ensure every
            client receives undivided focus, absolute precision, and an unhurried,
            luxurious experience.
          </p>
        </div>
      </div>

      {/* ── FORM ── */}
      <div className="relative -top-20 w-full flex items-center justify-center px-6 ">
        <div className="w-full max-w-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* Full Name */}
            <div>
              <label className={labelClass}>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div>
              <label className={labelClass}>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Phone */}
            <div>
              <label className={labelClass}>Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Desired Theory */}
            <div className="relative">
              <label className={labelClass}>Desired Theory</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="" disabled></option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <span className="absolute right-0 bottom-3 text-[#1a1a1a]/50 text-xs pointer-events-none">↓</span>
            </div>

            {/* Day & Time */}
            <div>
              <label className={labelClass}>Preferred Days & Time</label>
              <div className="flex gap-6">
                <div className="relative flex-1">
                  <select
                    name="day"
                    value={form.day}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="" disabled>Day</option>
                    {DAYS.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                  <span className="absolute right-0 bottom-3 text-[#1a1a1a]/50 text-xs pointer-events-none">↓</span>
                </div>
                <div className="relative flex-1">
                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="" disabled>Time</option>
                    {TIMES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <span className="absolute right-0 bottom-3 text-[#1a1a1a]/50 text-xs pointer-events-none">↓</span>
                </div>
              </div>
            </div>

            {/* Previous PMU */}
            <div>
              <label className={labelClass}>Previous PMU?</label>
              <div className="flex gap-4 py-2 border-b border-[#1a1a1a]/30">
                {["Yes", "No"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setForm({ ...form, previousPmu: option })}
                    className={`px-6 py-1.5 text-sm border transition-all duration-200 ${
                      form.previousPmu === option
                        ? "bg-[#1a1a1a] text-[#F5F0E8] border-[#1a1a1a]"
                        : "bg-transparent text-[#1a1a1a] border-[#1a1a1a]/30 hover:border-[#1a1a1a]"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-end mt-2">
              <button
                type="submit"
                className="bg-[#1a1a1a] text-[#F5F0E8] text-sm px-8 py-3 hover:bg-[#2d2d2d] transition-colors duration-200"
              >
                Send it
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}