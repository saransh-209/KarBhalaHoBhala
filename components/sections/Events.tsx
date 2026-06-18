"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useLang } from "@/lib/LanguageContext";

type EventItem = {
  id: number;
  title: string;
  description: string;
  location: string;
  event_date: string;
  event_time: string;
  image_url: string;
  latitude?: number | null;
  longitude?: number | null;
};

export default function Events() {
  const { t } = useLang();
  const e = t.events;
  const [events, setEvents] = useState<EventItem[]>([]);
  const [openId, setOpenId] = useState<number | null>(null);

  useEffect(() => {
    const load = () => {
      const today = new Date().toISOString().split("T")[0];
      supabase
        .from("events")
        .select("*")
        .gte("event_date", today)
        .order("event_date", { ascending: true })
        .then(({ data }) => { if (data) setEvents(data); });
    };

    load();

    const channel = supabase
      .channel("events-changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "events" }, load)
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  if (events.length === 0) return null;

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return {
      day: d.toLocaleDateString("en-IN", { day: "2-digit" }),
      month: d.toLocaleDateString("en-IN", { month: "short" }).toUpperCase(),
      full: d.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" }),
    };
  };

  return (
    <section id="events" className="py-24 bg-[#FDF8F2]">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center">
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            {e.badge}
          </span>
          <h2 className="heading-font text-5xl font-bold mt-6">
            {e.heading1}
            <span className="text-orange-600"> {e.heading2}</span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            {e.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 items-start">
          {events.map((ev) => {
            const date = formatDate(ev.event_date);
            const isOpen = openId === ev.id;
            const hasMap = ev.location || (ev.latitude && ev.longitude);

            return (
              <motion.div
                key={ev.id}
                whileHover={{ y: -6 }}
                onClick={() => hasMap && setOpenId(isOpen ? null : ev.id)}
                className={`group bg-white rounded-3xl overflow-hidden shadow-sm md:hover:shadow-2xl transition-all duration-300 ${hasMap ? "cursor-pointer" : ""}`}
              >

                {ev.image_url ? (
                  <img src={ev.image_url} alt={ev.title} className="w-full h-44 object-cover" />
                ) : (
                  <div className="w-full h-44 bg-gradient-to-br from-orange-100 to-green-100 flex items-center justify-center">
                    <Calendar size={40} className="text-orange-400" />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-600 text-white rounded-2xl w-16 h-16 flex flex-col items-center justify-center shrink-0">
                      <span className="text-2xl font-bold leading-none">{date.day}</span>
                      <span className="text-xs font-medium uppercase mt-1">{date.month}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold leading-tight">{ev.title}</h3>
                      <p className="text-xs text-gray-400 mt-1">{date.full}</p>
                    </div>
                  </div>

                  {ev.description && (
                    <p className="mt-4 text-gray-600 text-sm leading-6">{ev.description}</p>
                  )}

                  <div className="mt-4 space-y-2">
                    {ev.event_time && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock size={14} className="text-orange-500" />
                        {ev.event_time}
                      </div>
                    )}
                    {ev.location && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin size={14} className="text-orange-500" />
                        {ev.location}
                      </div>
                    )}
                  </div>

                  {/* Map - expands on hover (desktop) or tap (mobile) */}
                  {hasMap && (
                    <div
                      className={`grid transition-all duration-500 ease-in-out
                        grid-rows-[0fr] md:group-hover:grid-rows-[1fr]
                        ${isOpen ? "grid-rows-[1fr]" : ""}`}
                    >
                      <div className="overflow-hidden">
                        <div
                          className={`mt-4 rounded-2xl overflow-hidden border border-gray-100 transition-opacity duration-300 delay-150
                            opacity-0 md:group-hover:opacity-100
                            ${isOpen ? "opacity-100" : ""}`}
                        >
                          <iframe
                            src={
                              ev.latitude && ev.longitude
                                ? `https://www.google.com/maps?q=${ev.latitude},${ev.longitude}&output=embed`
                                : `https://www.google.com/maps?q=${encodeURIComponent(ev.location)}&output=embed`
                            }
                            width="100%"
                            height="180"
                            loading="lazy"
                            style={{ border: 0 }}
                            title={`Map for ${ev.title}`}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {hasMap && (
                    <p className="md:hidden text-center text-xs text-orange-500 font-medium mt-3">
                      {isOpen ? "Tap to hide map ▲" : "Tap to view map ▼"}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}