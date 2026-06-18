"use client";

import { HeartHandshake, Pill, UtensilsCrossed, IndianRupee, House, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

const icons = [HeartHandshake, Pill, UtensilsCrossed, IndianRupee, House, Heart];

export default function Services() {
  const { t } = useLang();
  const s = t.services;

  return (
    <section className="py-24 bg-[#FDF8F2]" id="services">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center">
          <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full">{s.badge}</span>
          <h2 className="heading-font mt-6 text-5xl font-bold">
            {s.heading1}<span className="text-orange-600"> {s.heading2}</span>
          </h2>
          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">{s.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {s.list.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={i} whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center">
                  <Icon className="text-orange-600" size={30} />
                </div>
                <h3 className="mt-6 text-2xl font-bold">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}