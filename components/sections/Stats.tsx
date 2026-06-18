"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useLang } from "@/lib/LanguageContext";

type Stat = { id: number; label: string; value: string };

const fallback = [
  { id: 1, value: "5000+", label: "Patients Served" },
  { id: 2, value: "10000+", label: "Medicines Distributed" },
  { id: 3, value: "200+", label: "Volunteers" },
  { id: 4, value: "₹50L+", label: "Aid Provided" },
];

export default function Stats() {
  const { t } = useLang();
  const [stats, setStats] = useState<Stat[]>(fallback);

  useEffect(() => {
    supabase.from("stats").select("*").order("id")
      .then(({ data }) => { if (data && data.length > 0) setStats(data); });
  }, []);

  // translate labels when language changes
  const translated = stats.map((s, i) => ({
    ...s,
    label: t.stats.fallback[i]?.label ?? s.label,
  }));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {translated.map((item, i) => (
            <motion.div key={item.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }}
              className="bg-orange-50 rounded-3xl p-8 text-center shadow-sm">
              <h3 className="text-4xl font-bold text-orange-600">{item.value}</h3>
              <p className="mt-3 text-gray-600">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}