"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919473093492"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        justify-center
        w-14
        h-14
        bg-[#25D366]
        text-white
        rounded-full
        shadow-lg
        hover:scale-110
        hover:shadow-xl
        transition-all
        duration-200
      "
    >
      <FaWhatsapp size={28} />
    </a>
  );
}