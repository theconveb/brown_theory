"use client";

import { useState } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const SERVICES = [
  "Microblading",
  "Powder Brows",
  "Lip Blush",
  "Permanent Eyeliner",
  "Lash Enhancement",
  "Nano Brows",
];

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const TIMES = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

const inputClass =
  "w-full bg-transparent border-0 border-b border-[#1a1a1a]/30 focus:border-[#1a1a1a] focus:outline-none py-2 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a] transition-colors duration-200";

const selectClass =
  "w-full bg-transparent border-0 border-b border-[#1a1a1a]/30 focus:border-[#1a1a1a] focus:outline-none py-2 text-sm text-[#1a1a1a] transition-colors duration-200 cursor-pointer appearance-none";

const labelClass = "block text-sm text-[#1a1a1a] mb-2";

export default function ContactForm() {
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
    <section className=" w-full  flex items-center justify-center px-6 ">
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
              placeholder=""
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
              placeholder=""
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
              placeholder=""
              className={inputClass}
            />
          </div>

          {/* Desired Theory — service dropdown */}
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
            {/* Custom arrow */}
            <span className="absolute right-0 bottom-3 text-[#1a1a1a]/50 text-xs pointer-events-none">
              ↓
            </span>
          </div>

          {/* Preferred Day & Time — two selects side by side */}
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
                <span className="absolute right-0 bottom-3 text-[#1a1a1a]/50 text-xs pointer-events-none">
                  ↓
                </span>
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
                <span className="absolute right-0 bottom-3 text-[#1a1a1a]/50 text-xs pointer-events-none">
                  ↓
                </span>
              </div>
            </div>
          </div>

          {/* Previous PMU — Yes / No toggle */}
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
    </section>
  );
}