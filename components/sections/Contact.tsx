"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const g = t.getHelp;

  const [form, setForm] = useState({ patientName: "", guardianName: "", phone: "", wardNumber: "", helpNeeded: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async () => {
    if (!form.patientName || !form.phone || !form.helpNeeded) { setError(g.error); return; }
    setError(""); setLoading(true);
    const res = await fetch("/api/help-request", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    const data = await res.json();
    setLoading(false);
    if (data.success) {
      setSubmitted(true);
      setForm({ patientName: "", guardianName: "", phone: "", wardNumber: "", helpNeeded: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } else setError(g.errorServer);
  };

  return (
    <section id="contact" className="py-24 bg-[#FDF8F2]">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center">
          <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">{c.badge}</span>
          <h2 className="heading-font text-5xl font-bold mt-6">{c.heading}</h2>
        </div>

        {/* Contact Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <Phone className="text-orange-600" />
            <h3 className="font-bold mt-4">{c.call}</h3>
            <p className="mt-2">+91 9473093492</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <Mail className="text-orange-600" />
            <h3 className="font-bold mt-4">{c.email}</h3>
            <p className="mt-2">s2009.saransh@gmail.com</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <MapPin className="text-orange-600" />
            <h3 className="font-bold mt-4">{c.visit}</h3>
            <p className="mt-2">{c.address}</p>
          </div>
        </div>

        {/* Request Help Form */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="text-center">
            <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">{g.badge}</span>
            <h3 className="heading-font text-4xl font-bold mt-6">{g.heading}</h3>
            <p className="mt-4 text-gray-500">{g.subheading}</p>
          </div>

          <div className="space-y-5 mt-10">
            <input type="text" placeholder={g.patientName} value={form.patientName} onChange={(e) => update("patientName", e.target.value)}
              className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 transition bg-white" />
            <input type="text" placeholder={g.guardianName} value={form.guardianName} onChange={(e) => update("guardianName", e.target.value)}
              className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 transition bg-white" />
            <input type="tel" placeholder={g.phone} value={form.phone} onChange={(e) => update("phone", e.target.value)}
              className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 transition bg-white" />
            <input type="text" placeholder={g.ward} value={form.wardNumber} onChange={(e) => update("wardNumber", e.target.value)}
              className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 transition bg-white" />
            <textarea rows={5} placeholder={g.helpNeeded} value={form.helpNeeded} onChange={(e) => update("helpNeeded", e.target.value)}
              className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 transition bg-white resize-none" />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button onClick={handleSubmit} disabled={loading}
              className="w-full bg-orange-600 text-white py-4 rounded-xl font-semibold hover:bg-orange-700 hover:scale-[1.02] transition-all duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? g.submitting : submitted ? g.submitted : g.submit}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}