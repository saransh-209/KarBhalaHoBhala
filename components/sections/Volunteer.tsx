"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Users, HeartHandshake, Truck, Stethoscope } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const icons = [Stethoscope, Truck, HeartHandshake, Users];

export default function Volunteer() {
  const { t } = useLang();
  const v = t.volunteer;

  const [form, setForm] = useState({ fullName: "", email: "", phone: "", role: "", motivation: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async () => {
    if (!form.fullName || !form.phone || !form.role) { setError(v.form.error); return; }
    setError(""); setLoading(true);
    const res = await fetch("/api/volunteer", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    const data = await res.json();
    setLoading(false);
    if (data.success) { setSubmitted(true); setForm({ fullName: "", email: "", phone: "", role: "", motivation: "" }); setTimeout(() => setSubmitted(false), 5000); }
    else setError(v.form.errorServer);
  };

  return (
    <section id="volunteer" className="py-24 bg-[#FDF8F2]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center">
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">{v.badge}</span>
          <h2 className="heading-font text-5xl font-bold mt-6">
            {v.heading1}<span className="text-orange-600"> {v.heading2}</span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">{v.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {v.roles.map((role, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={i} whileHover={{ y: -8 }} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                <Icon size={36} className="text-orange-600" />
                <h3 className="mt-5 text-xl font-bold">{role.title}</h3>
                <p className="mt-3 text-gray-600">{role.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <div className="text-center">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">{v.form.badge}</span>
            <h3 className="heading-font text-4xl font-bold mt-6">{v.form.heading}</h3>
          </div>
          <div className="mt-10 space-y-5">
            <input type="text" placeholder={v.form.fullName} value={form.fullName} onChange={(e) => update("fullName", e.target.value)} className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-300 transition bg-white" />
            <input type="email" placeholder={v.form.email} value={form.email} onChange={(e) => update("email", e.target.value)} className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-300 transition bg-white" />
            <input type="tel" placeholder={v.form.phone} value={form.phone} onChange={(e) => update("phone", e.target.value)} className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-300 transition bg-white" />
            <select value={form.role} onChange={(e) => update("role", e.target.value)} className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-300 transition bg-white text-gray-700">
              <option value="">{v.form.role}</option>
              {v.roles.map((r, i) => <option key={i}>{r.title}</option>)}
            </select>
            <textarea rows={5} placeholder={v.form.motivation} value={form.motivation} onChange={(e) => update("motivation", e.target.value)} className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-300 transition bg-white resize-none" />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button onClick={handleSubmit} disabled={loading}
              className="w-full bg-orange-600 text-white py-4 rounded-xl font-semibold hover:bg-orange-700 hover:scale-[1.02] transition-all duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? v.form.submitting : submitted ? v.form.submitted : v.form.submit}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}