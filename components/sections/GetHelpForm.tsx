"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;

  return (
    <section id="contact" className="py-24 bg-[#FDF8F2]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center">
          <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full">{c.badge}</span>
          <h2 className="heading-font text-5xl font-bold mt-6">{c.heading}</h2>
        </div>
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
      </div>
    </section>
  );
}