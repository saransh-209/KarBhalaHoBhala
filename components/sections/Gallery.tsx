"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/LanguageContext";

type GalleryItem = { id: number; image_url: string; category: string };

const staticImages: GalleryItem[] = [
  { id: 1, image_url: "/images/gallery-1.png", category: "Camps" },
  { id: 2, image_url: "/images/gallery-2.png", category: "Distribution" },
  { id: 3, image_url: "/images/gallery-3.png", category: "Volunteers" },
  { id: 4, image_url: "/images/gallery-4.png", category: "Camps" },
  { id: 5, image_url: "/images/gallery-5.png", category: "Distribution" },
  { id: 6, image_url: "/images/gallery-6.png", category: "Volunteers" },
];

const englishCats = ["All", "Camps", "Distribution", "Volunteers"];

export default function Gallery() {
  const { t } = useLang();
  const g = t.gallery;

  const [allImages, setAllImages] = useState<GalleryItem[]>(staticImages);
  const [activeFilter, setActiveFilter] = useState(0);
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  useEffect(() => {
    let channelRef: any = null;

    import("@/lib/supabase").then(({ supabase }) => {
      const load = () =>
        supabase.from("gallery").select("*").order("created_at", { ascending: false })
          .then(({ data }) => { if (data) setAllImages(data.length > 0 ? data : staticImages); });

      load();

      channelRef = supabase
        .channel("gallery-changes")
        .on("postgres_changes", { event: "*", schema: "public", table: "gallery" }, load)
        .subscribe();
    });

    return () => {
      if (channelRef) {
        import("@/lib/supabase").then(({ supabase }) => supabase.removeChannel(channelRef));
      }
    };
  }, []);

  // Close lightbox on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const filtered = activeFilter === 0
    ? allImages
    : allImages.filter((img) => img.category === englishCats[activeFilter]);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="text-center">
          <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
            {g.badge}
          </span>
          <h2 className="heading-font text-5xl font-bold mt-6">
            {g.heading1}<span className="text-orange-600"> {g.heading2}</span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">{g.desc}</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {g.categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveFilter(i)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${
                activeFilter === i
                  ? "bg-orange-600 text-white shadow-md scale-105"
                  : "border border-gray-200 text-gray-600 hover:border-orange-400 hover:text-orange-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightbox(item)}
                className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-sm aspect-square"
              >
                <img
                  src={item.image_url}
                  alt={item.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium bg-orange-600 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 mt-16 text-lg">No images found.</p>
        )}

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={lightbox.image_url}
                alt={lightbox.category}
                className="w-full max-h-[80vh] object-contain bg-black"
              />
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setLightbox(null)}
                  className="bg-white/20 backdrop-blur text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/40 transition text-xl font-bold"
                >
                  ✕
                </button>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-orange-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                  {lightbox.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}