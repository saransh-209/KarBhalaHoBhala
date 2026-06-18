"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useLang } from "@/lib/LanguageContext";

type Testimonial = { id: number; name: string; role: string; story: string; image_url: string };

const fallback: Testimonial[] = [
  { id: 1, name: "Harjit Singh", role: "Kidney Treatment Patient", image_url: "/images/testimonial-1.png", story: "When we arrived in Chandigarh, we had nowhere to stay. Kar Bhala Ho Bhala arranged accommodation and medicines during a very difficult time." },
  { id: 2, name: "Sunita Devi", role: "Cancer Patient Attendant", image_url: "/images/testimonial-2.png", story: "The volunteers supported us with meals and guidance every day. Their kindness gave us strength and hope." },
  { id: 3, name: "Ramesh Kumar", role: "Heart Surgery Patient", image_url: "/images/testimonial-3.png", story: "Financial assistance from the trust helped me continue my treatment without interruption." },
];

export default function Testimonials() {
  const { t } = useLang();
  const tb = t.testimonials;
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallback);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const load = () =>
      supabase.from("testimonials").select("*").order("created_at", { ascending: false })
        .then(({ data }) => { if (data) setTestimonials(data.length > 0 ? data : fallback); });

    load();

    const channel = supabase
      .channel("testimonials-changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "testimonials" }, load)
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  useEffect(() => {
    if (paused || testimonials.length === 0) return;
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(timer);
  }, [paused, testimonials.length]);

  const prev = () => { setPaused(true); setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length); };
  const next = () => { setPaused(true); setCurrent((p) => (p + 1) % testimonials.length); };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center">
          <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">{tb.badge}</span>
          <h2 className="heading-font text-5xl font-bold mt-6">
            {tb.heading1}<span className="text-orange-600"> {tb.heading2}</span>
          </h2>
        </div>

        <div className="mt-16 relative">
          <AnimatePresence mode="wait">
            <motion.div key={current} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -60 }} transition={{ duration: 0.45 }}
              className="bg-[#FDF8F2] rounded-3xl overflow-hidden shadow-sm max-w-3xl mx-auto">
              <img src={testimonials[current].image_url} alt={testimonials[current].name} className="w-full h-64 object-cover" />
              <div className="p-8 md:p-10">
                <Quote size={32} className="text-orange-300" />
                <p className="text-gray-700 mt-4 text-lg leading-8">{testimonials[current].story}</p>
                <div className="mt-6">
                  <h3 className="text-xl font-bold">{testimonials[current].name}</h3>
                  <p className="text-orange-600 font-medium mt-1">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border border-gray-200 shadow-md p-3 rounded-full hover:bg-orange-50 transition hidden md:flex"><ChevronLeft size={20} /></button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border border-gray-200 shadow-md p-3 rounded-full hover:bg-orange-50 transition hidden md:flex"><ChevronRight size={20} /></button>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => { setPaused(true); setCurrent(i); }}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-orange-600 w-8" : "bg-gray-300 w-2"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}