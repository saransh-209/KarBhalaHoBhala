"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { useLang } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  const nav = t.nav;

  const links = [
    { label: nav.about, href: "#about" },
    { label: nav.services, href: "#services" },
    { label: nav.gallery, href: "#gallery" },
    { label: nav.volunteer, href: "#volunteer" },
    { label: nav.donate, href: "#donate" },
    { label: nav.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-[#1A1207] text-white">
      <div className="max-w-7xl mx-auto px-5 py-20">
        <div className="grid lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Logo" className="h-14 w-14 object-contain rounded-full" />
              <h2 className="text-xl font-bold">Kar Bhala Ho Bhala</h2>
            </div>
            <p className="mt-5 text-gray-400 leading-7 text-sm">{f.desc}</p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-600 transition">
                <FaFacebook size={16} />
              </a>
              <a href="https://www.instagram.com/__saransh.h__?igsh=MTU1ZWlkenhmaWVucQ==" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-600 transition">
                <FaInstagram size={16} />
              </a>
              <a href="https://www.youtube.com/@echobeats_2080?si=IUCmSrHqF2Uv7TrO" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-600 transition">
                <FaYoutube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-5">{f.quickLinks}</h3>
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-gray-400 hover:text-orange-400 transition text-sm">{l.label}</a>
              ))}
            </div>
          </div>

          {/* Trust Info */}
          <div>
            <h3 className="font-semibold text-white mb-5">{f.trustInfo}</h3>
            <div className="space-y-3 text-sm text-gray-400">
              {f.trust.map((item, i) => <p key={i}>✅ {item}</p>)}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-5">{f.contact}</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-center gap-3"><Phone size={15} className="text-orange-400 shrink-0" /><span>+91 9473093492</span></div>
              <div className="flex items-center gap-3"><Mail size={15} className="text-orange-400 shrink-0" /><span>s2009.saransh@gmail.com</span></div>
              <div className="flex items-center gap-3"><MapPin size={15} className="text-orange-400 shrink-0" /><span>Near PGI Chandigarh</span></div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">{f.copyright}</p>
          <div className="flex gap-5 text-sm text-gray-400">
            <Link href="/privacy-policy" className="hover:text-orange-400 transition">{f.privacy}</Link>
            <Link href="/terms" className="hover:text-orange-400 transition">{f.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}