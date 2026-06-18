"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLang } from "@/lib/LanguageContext";

export default function Navbar() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.events ?? "Events", href: "#events" },
    { label: t.nav.volunteer, href: "#volunteer" },
    { label: t.nav.donate, href: "#donate" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["about","services","gallery","events","volunteer","donate","contact"];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-orange-100 transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}>
      <div className="max-w-7xl mx-auto px-5">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="Kar Bhala Ho Bhala Logo"
              className="h-14 w-14 object-contain rounded-full"
            />
            <div>
              <h2 className="font-bold text-lg leading-tight">Kar Bhala Ho Bhala</h2>
              <p className="text-xs text-gray-500">{t.nav.tagline}</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((item) => (
              <a key={item.href} href={item.href} onClick={(e) => handleNavClick(e, item.href)}
                className={`relative text-sm font-medium transition-colors duration-200 hover:text-orange-600 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-orange-600 after:transition-all after:duration-300 ${
                  activeSection === item.href.replace("#", "")
                    ? "text-orange-600 after:w-full"
                    : "text-gray-700 after:w-0 hover:after:w-full"
                }`}>
                {item.label}
              </a>
            ))}
            <LanguageSwitcher />
          </nav>

          <a href="#donate" onClick={(e) => handleNavClick(e, "#donate")}
            className="hidden md:flex bg-orange-600 text-white px-5 py-3 rounded-full font-semibold hover:bg-orange-700 hover:scale-105 transition-all duration-200 shadow-sm">
            {t.nav.donateBtn}
          </a>

          <button className="md:hidden p-2 rounded-lg hover:bg-orange-50 transition" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-screen pb-5" : "max-h-0"}`}>
          <div className="flex flex-col gap-1 pt-2">
            {links.map((item) => (
              <a key={item.href} href={item.href} onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-3 rounded-xl font-medium text-base leading-snug transition-colors ${
                  activeSection === item.href.replace("#", "")
                    ? "bg-orange-50 text-orange-600"
                    : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                }`}>
                {item.label}
              </a>
            ))}
            <div className="px-4 py-3 flex justify-center">
              <LanguageSwitcher />
            </div>
            <a href="#donate" onClick={(e) => handleNavClick(e, "#donate")}
              className="mt-2 bg-orange-600 text-white px-5 py-3 rounded-full font-semibold text-center hover:bg-orange-700 transition">
              {t.nav.donateBtn}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}