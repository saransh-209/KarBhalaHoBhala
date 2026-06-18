import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function SocialBar() {
  return (
    <section className="py-10 bg-orange-600">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-center items-center gap-8 text-white">

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 hover:text-orange-200 transition-transform duration-200"
            aria-label="Facebook"
          >
            <FaFacebook size={28} />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 hover:text-orange-200 transition-transform duration-200"
            aria-label="Instagram"
          >
            <FaInstagram size={28} />
          </a>

          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 hover:text-orange-200 transition-transform duration-200"
            aria-label="YouTube"
          >
            <FaYoutube size={28} />
          </a>

        </div>
      </div>
    </section>
  );
}
