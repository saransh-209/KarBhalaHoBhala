// FILE: app/admin/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BarChart2, Image, MessageSquare, LogOut,
  Plus, Trash2, Save, Upload, CheckCircle,
  Inbox, HeartHandshake, Phone, Mail, Clock, MessageCircle,
  Calendar, MapPin,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import RegisterSW from "@/components/RegisterSW";

type Tab = "stats" | "gallery" | "testimonials" | "submissions" | "events";
type Stat = { id: number; label: string; value: string };
type GalleryItem = { id: number; image_url: string; category: string };
type Testimonial = { id: number; name: string; role: string; story: string; image_url: string };
type VolunteerApp = { id: number; full_name: string; email: string; phone: string; role: string; motivation: string; created_at: string; status?: string };
type HelpRequest = { id: number; patient_name: string; guardian_name: string; phone: string; ward_number: string; help_needed: string; status: string; created_at: string };
type EventItem = { id: number; title: string; description: string; location: string; event_date: string; event_time: string; image_url: string; latitude?: number | null; longitude?: number | null };

// 👇 Apna WhatsApp group invite link yahan daalo
const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/your-group-invite-code";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("stats");
  const [pendingCount, setPendingCount] = useState(0);

  useEffect(() => {
    if (!sessionStorage.getItem("admin_authenticated")) router.replace("/admin");
  }, [router]);

  useEffect(() => {
    const loadCount = async () => {
      const { count: vCount } = await supabase.from("volunteer_applications").select("*", { count: "exact", head: true }).neq("status", "approved");
      const { count: hCount } = await supabase.from("help_requests").select("*", { count: "exact", head: true }).eq("status", "pending");
      setPendingCount((vCount || 0) + (hCount || 0));
    };
    loadCount();
  }, [activeTab]);

  const logout = () => {
    sessionStorage.removeItem("admin_authenticated");
    router.replace("/admin");
  };

  const tabs = [
    { id: "stats", label: "Stats", icon: BarChart2 },
    { id: "gallery", label: "Gallery", icon: Image },
    { id: "testimonials", label: "Testimonials", icon: MessageSquare },
    { id: "events", label: "Events", icon: Calendar },
    { id: "submissions", label: "Submissions", icon: Inbox, badge: pendingCount },
  ];

  return (
    <div className="min-h-screen bg-[#FDF8F2]">
      <RegisterSW />
      <header className="bg-white border-b border-orange-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Logo" className="h-10 w-10 object-contain rounded-full" />
          <div>
            <h1 className="font-bold text-lg leading-tight">Admin Panel</h1>
            <p className="text-xs text-gray-500">Kar Bhala Ho Bhala</p>
          </div>
        </div>
        <button onClick={logout} className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition text-sm">
          <LogOut size={16} /> Logout
        </button>
      </header>

      <div className="max-w-5xl mx-auto px-5 py-10">
        <div className="flex gap-3 flex-wrap mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id as Tab)}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-orange-600 text-white shadow-md"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-orange-300"
                }`}>
                <Icon size={16} />{tab.label}
                {tab.badge !== undefined && tab.badge > 0 && (
                  <span className={`text-xs font-bold rounded-full px-2 py-0.5 ${
                    activeTab === tab.id ? "bg-white text-orange-600" : "bg-orange-600 text-white"
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {activeTab === "stats" && <StatsEditor />}
        {activeTab === "gallery" && <GalleryEditor />}
        {activeTab === "testimonials" && <TestimonialsEditor />}
        {activeTab === "events" && <EventsEditor />}
        {activeTab === "submissions" && <SubmissionsViewer />}
      </div>
    </div>
  );
}

/* ── STATS EDITOR ─────────────────────────────────────── */
function StatsEditor() {
  const [stats, setStats] = useState<Stat[]>([]);
  const [saving, setSaving] = useState<number | null>(null);
  const [saved, setSaved] = useState<number | null>(null);

  useEffect(() => {
    supabase.from("stats").select("*").order("id").then(({ data }) => {
      if (data && data.length > 0) setStats(data);
      else {
        const defaults = [
          { label: "Patients Served", value: "5000+" },
          { label: "Medicines Distributed", value: "10000+" },
          { label: "Volunteers", value: "200+" },
          { label: "Aid Provided", value: "₹50L+" },
        ];
        supabase.from("stats").insert(defaults).select().then(({ data: inserted }) => {
          if (inserted) setStats(inserted);
        });
      }
    });
  }, []);

  const update = (id: number, field: keyof Stat, val: string) =>
    setStats((prev) => prev.map((s) => (s.id === id ? { ...s, [field]: val } : s)));

  const save = async (stat: Stat) => {
    setSaving(stat.id);
    await supabase.from("stats").update({ label: stat.label, value: stat.value }).eq("id", stat.id);
    setSaving(null);
    setSaved(stat.id);
    setTimeout(() => setSaved(null), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Edit Stats</h2>
        <p className="text-gray-500 text-sm mt-1">Yeh numbers Hero section aur Stats section mein live dikhte hain.</p>
      </div>

      {stats.map((stat) => (
        <div key={stat.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="w-32 shrink-0 bg-orange-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-orange-600">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1 truncate">{stat.label}</p>
            </div>
            <div className="flex-1 grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-400 font-medium uppercase tracking-wider">Value</label>
                <input value={stat.value} onChange={(e) => update(stat.id, "value", e.target.value)}
                  placeholder="e.g. 5000+"
                  className="block w-full border border-gray-200 rounded-xl px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-300 text-lg font-bold" />
              </div>
              <div>
                <label className="text-xs text-gray-400 font-medium uppercase tracking-wider">Label</label>
                <input value={stat.label} onChange={(e) => update(stat.id, "label", e.target.value)}
                  placeholder="e.g. Patients Served"
                  className="block w-full border border-gray-200 rounded-xl px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-300" />
              </div>
            </div>
            <button onClick={() => save(stat)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl transition shrink-0 ${
                saved === stat.id ? "bg-green-500 text-white" : "bg-orange-600 text-white hover:bg-orange-700"
              }`}>
              {saved === stat.id ? <><CheckCircle size={16} /> Saved!</> : saving === stat.id ? "Saving..." : <><Save size={16} /> Save</>}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── GALLERY EDITOR ───────────────────────────────────── */
function GalleryEditor() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [uploading, setUploading] = useState(false);
  const [category, setCategory] = useState("Camps");
  const [deleting, setDeleting] = useState<number | null>(null);

  const load = async () => {
    const { data } = await supabase.from("gallery").select("*").order("created_at", { ascending: false });
    if (data) setItems(data);
  };

  useEffect(() => {
    load();
    const channel = supabase
      .channel("admin-gallery-changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "gallery" }, load)
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, []);

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const filename = `${Date.now()}-${file.name.replace(/\s/g, "_")}`;
    const { error } = await supabase.storage.from("gallery").upload(filename, file, { upsert: true });
    if (error) { alert("Upload failed: " + error.message); setUploading(false); return; }
    const { data: urlData } = supabase.storage.from("gallery").getPublicUrl(filename);
    await supabase.from("gallery").insert({ image_url: urlData.publicUrl, category });
    await load();
    setUploading(false);
    e.target.value = "";
  };

  const deleteItem = async (id: number, image_url: string) => {
    setDeleting(id);
    const filename = image_url.split("/").pop();
    if (filename) await supabase.storage.from("gallery").remove([filename]);
    await supabase.from("gallery").delete().eq("id", id);
    setItems((prev) => prev.filter((i) => i.id !== id));
    setDeleting(null);
  };

  const grouped = {
    Camps: items.filter((i) => i.category === "Camps"),
    Distribution: items.filter((i) => i.category === "Distribution"),
    Volunteers: items.filter((i) => i.category === "Volunteers"),
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Manage Gallery</h2>
        <p className="text-gray-500 text-sm mt-1">Images upload karo — website pe gallery mein automatically dikhenge.</p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-start md:items-center">
        <div>
          <label className="text-xs text-gray-400 font-medium uppercase tracking-wider">Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}
            className="block border border-gray-200 rounded-xl px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-300">
            <option>Camps</option>
            <option>Distribution</option>
            <option>Volunteers</option>
          </select>
        </div>
        <label className={`flex items-center gap-2 px-6 py-3 rounded-xl cursor-pointer transition mt-auto ${
          uploading ? "bg-gray-300 cursor-not-allowed" : "bg-orange-600 text-white hover:bg-orange-700"
        }`}>
          <Upload size={16} />
          {uploading ? "Uploading..." : "Upload Image"}
          <input type="file" accept="image/*" className="hidden" onChange={uploadImage} disabled={uploading} />
        </label>
        <p className="text-xs text-gray-400 mt-auto">JPG, PNG, WebP supported. Max 5MB.</p>
      </div>

      {Object.entries(grouped).map(([cat, catItems]) => (
        <div key={cat} className="mt-8">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="font-bold text-lg">{cat}</h3>
            <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full">{catItems.length} images</span>
          </div>
          {catItems.length === 0 ? (
            <p className="text-gray-400 text-sm bg-white rounded-2xl p-6 border border-dashed border-gray-200">
              No images in {cat} yet. Upload above.
            </p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {catItems.map((item) => (
                <div key={item.id} className="relative group rounded-2xl overflow-hidden shadow-sm aspect-square">
                  <img src={item.image_url} alt={item.category} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <button onClick={() => deleteItem(item.id, item.image_url)} disabled={deleting === item.id}
                      className="bg-red-500 text-white p-2.5 rounded-full hover:bg-red-600 transition">
                      {deleting === item.id ? "..." : <Trash2 size={16} />}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── TESTIMONIALS EDITOR ──────────────────────────────── */
function TestimonialsEditor() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({ name: "", role: "", story: "", image_url: "" });
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState<number | null>(null);

  const load = async () => {
    const { data } = await supabase.from("testimonials").select("*").order("created_at", { ascending: false });
    if (data) setItems(data);
  };

  useEffect(() => {
    load();
    const channel = supabase
      .channel("admin-testimonials-changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "testimonials" }, load)
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, []);

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const filename = `testimonial-${Date.now()}-${file.name.replace(/\s/g, "_")}`;
    const { error } = await supabase.storage.from("gallery").upload(filename, file, { upsert: true });
    if (error) { alert("Upload failed: " + error.message); setUploading(false); return; }
    const { data: urlData } = supabase.storage.from("gallery").getPublicUrl(filename);
    setForm((prev) => ({ ...prev, image_url: urlData.publicUrl }));
    setUploading(false);
    e.target.value = "";
  };

  const addNew = async () => {
    if (!form.name || !form.story) return;
    setSaving(true);
    await supabase.from("testimonials").insert({ ...form, image_url: form.image_url || "/images/testimonial-1.png" });
    setForm({ name: "", role: "", story: "", image_url: "" });
    setAdding(false);
    setSaving(false);
    await load();
  };

  const deleteItem = async (id: number) => {
    setDeleting(id);
    await supabase.from("testimonials").delete().eq("id", id);
    setItems((prev) => prev.filter((i) => i.id !== id));
    setDeleting(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Manage Testimonials</h2>
          <p className="text-gray-500 text-sm mt-1">Patient stories add ya delete karo.</p>
        </div>
        <button onClick={() => setAdding(true)}
          className="flex items-center gap-2 bg-orange-600 text-white px-5 py-3 rounded-xl hover:bg-orange-700 transition">
          <Plus size={16} /> Add Story
        </button>
      </div>

      {adding && (
        <div className="mb-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
          <h3 className="font-bold text-lg">New Patient Story</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-400 font-medium uppercase tracking-wider">Patient Name *</label>
              <input placeholder="e.g. Harjit Singh" value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-300" />
            </div>
            <div>
              <label className="text-xs text-gray-400 font-medium uppercase tracking-wider">Role</label>
              <input placeholder="e.g. Cancer Patient" value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-300" />
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-400 font-medium uppercase tracking-wider">Story *</label>
            <textarea placeholder="Patient ki kahani likhein..." rows={4} value={form.story}
              onChange={(e) => setForm({ ...form, story: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none" />
          </div>

          {/* Image Upload */}
          <div>
            <label className="text-xs text-gray-400 font-medium uppercase tracking-wider">Patient Photo</label>
            <div className="flex items-center gap-4 mt-1">
              {form.image_url && (
                <img src={form.image_url} alt="Preview" className="w-16 h-16 rounded-xl object-cover border border-gray-200" />
              )}
              <label className={`flex items-center gap-2 px-5 py-3 rounded-xl cursor-pointer transition text-sm font-medium ${
                uploading ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-orange-50 text-orange-600 hover:bg-orange-100"
              }`}>
                <Upload size={15} />
                {uploading ? "Uploading..." : form.image_url ? "Change Photo" : "Upload from Computer"}
                <input type="file" accept="image/*" className="hidden" onChange={uploadImage} disabled={uploading} />
              </label>
              {form.image_url && (
                <button onClick={() => setForm({ ...form, image_url: "" })}
                  className="text-xs text-gray-400 hover:text-red-500 transition">
                  Remove
                </button>
              )}
            </div>
            <p className="text-xs text-gray-400 mt-2">Optional — chhod sakte ho, default image use ho jaayegi.</p>
          </div>

          <div className="flex gap-3 pt-2">
            <button onClick={addNew} disabled={saving || uploading}
              className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition disabled:opacity-50">
              {saving ? "Saving..." : "Save Story"}
            </button>
            <button onClick={() => setAdding(false)}
              className="border border-gray-200 px-6 py-3 rounded-xl hover:bg-gray-50 transition">
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {items.length === 0 && (
          <div className="bg-white rounded-2xl p-10 text-center text-gray-400 border border-dashed border-gray-200">
            Koi testimonial nahi hai abhi. "Add Story" se add karo.
          </div>
        )}
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-4 items-start">
            <img src={item.image_url} alt={item.name} className="w-16 h-16 rounded-2xl object-cover shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-orange-600 text-sm">{item.role}</p>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.story}</p>
            </div>
            <button onClick={() => deleteItem(item.id)} disabled={deleting === item.id}
              className="text-gray-400 hover:text-red-500 transition shrink-0 p-2">
              {deleting === item.id ? "..." : <Trash2 size={18} />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── SUBMISSIONS VIEWER ───────────────────────────────── */
function SubmissionsViewer() {
  const [subTab, setSubTab] = useState<"volunteers" | "help">("help");
  const [volunteers, setVolunteers] = useState<VolunteerApp[]>([]);
  const [helpRequests, setHelpRequests] = useState<HelpRequest[]>([]);
  const [deleting, setDeleting] = useState<number | null>(null);

  const loadVolunteers = async () => {
    const { data } = await supabase.from("volunteer_applications").select("*").order("created_at", { ascending: false });
    if (data) setVolunteers(data);
  };

  const loadHelp = async () => {
    const { data } = await supabase.from("help_requests").select("*").order("created_at", { ascending: false });
    if (data) setHelpRequests(data);
  };

  useEffect(() => {
    loadVolunteers();
    loadHelp();

    const volunteerChannel = supabase
      .channel("admin-volunteer-changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "volunteer_applications" }, loadVolunteers)
      .subscribe();

    const helpChannel = supabase
      .channel("admin-help-changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "help_requests" }, loadHelp)
      .subscribe();

    return () => {
      supabase.removeChannel(volunteerChannel);
      supabase.removeChannel(helpChannel);
    };
  }, []);

  const deleteVolunteer = async (id: number) => {
    setDeleting(id);
    await supabase.from("volunteer_applications").delete().eq("id", id);
    setVolunteers((prev) => prev.filter((v) => v.id !== id));
    setDeleting(null);
  };

  const deleteHelp = async (id: number) => {
    setDeleting(id);
    await supabase.from("help_requests").delete().eq("id", id);
    setHelpRequests((prev) => prev.filter((h) => h.id !== id));
    setDeleting(null);
  };

  const markResolved = async (id: number, currentStatus: string) => {
    const newStatus = currentStatus === "pending" ? "resolved" : "pending";
    await supabase.from("help_requests").update({ status: newStatus }).eq("id", id);
    setHelpRequests((prev) => prev.map((h) => (h.id === id ? { ...h, status: newStatus } : h)));
  };

  const approveVolunteer = async (id: number) => {
    await supabase.from("volunteer_applications").update({ status: "approved" }).eq("id", id);
    setVolunteers((prev) => prev.map((v) => (v.id === id ? { ...v, status: "approved" } : v)));
  };

  // Generate WhatsApp welcome message + group link
  const getWhatsAppLink = (volunteer: VolunteerApp) => {
    const cleanPhone = volunteer.phone.replace(/\D/g, "");
    // Add country code if not present (assuming India +91)
    const phoneWithCode = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;

    const message = `Hello ${volunteer.full_name}!

Welcome to the Kar Bhala Ho Bhala family! Your volunteer application as *${volunteer.role}* has been approved.

We're truly glad to have you join us. Your service will help bring support and relief to many patients and families in need.

Please join our volunteer WhatsApp group using the link below:
${WHATSAPP_GROUP_LINK}

You'll receive updates on upcoming activities and schedules in the group.

Thank you!
Team Kar Bhala Ho Bhala
Seva Hi Pooja Hai`;

    return `https://wa.me/${phoneWithCode}?text=${encodeURIComponent(message)}`;
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) +
      " · " + d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
  };

  const pendingHelp = helpRequests.filter((h) => h.status !== "resolved");
  const resolvedHelp = helpRequests.filter((h) => h.status === "resolved");

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Form Submissions</h2>
        <p className="text-gray-500 text-sm mt-1">Volunteer applications aur patient help requests yahan dikhenge.</p>
      </div>

      <div className="flex gap-3 mb-6">
        <button onClick={() => setSubTab("help")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition ${
            subTab === "help" ? "bg-orange-600 text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-orange-300"
          }`}>
          <HeartHandshake size={15} /> Help Requests
          {pendingHelp.length > 0 && (
            <span className={`text-xs font-bold rounded-full px-2 py-0.5 ${subTab === "help" ? "bg-white text-orange-600" : "bg-orange-600 text-white"}`}>
              {pendingHelp.length}
            </span>
          )}
        </button>
        <button onClick={() => setSubTab("volunteers")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition ${
            subTab === "volunteers" ? "bg-orange-600 text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-orange-300"
          }`}>
          <Inbox size={15} /> Volunteer Applications
          {volunteers.filter((v) => v.status !== "approved").length > 0 && (
            <span className={`text-xs font-bold rounded-full px-2 py-0.5 ${subTab === "volunteers" ? "bg-white text-orange-600" : "bg-orange-600 text-white"}`}>
              {volunteers.filter((v) => v.status !== "approved").length}
            </span>
          )}
        </button>
      </div>

      {/* HELP REQUESTS */}
      {subTab === "help" && (
        <div className="space-y-4">
          {helpRequests.length === 0 && (
            <div className="bg-white rounded-2xl p-10 text-center text-gray-400 border border-dashed border-gray-200">
              Koi help request abhi tak nahi aaya.
            </div>
          )}

          {pendingHelp.map((req) => (
            <div key={req.id} className="bg-white rounded-2xl p-5 shadow-sm border border-orange-100">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-lg">{req.patient_name}</h3>
                    <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full font-medium">Pending</span>
                  </div>
                  {req.guardian_name && <p className="text-sm text-gray-500 mt-1">Guardian: {req.guardian_name}</p>}
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600 flex-wrap">
                    <a href={`tel:${req.phone}`} className="flex items-center gap-1.5 hover:text-orange-600">
                      <Phone size={14} /> {req.phone}
                    </a>
                    {req.ward_number && <span>Ward: {req.ward_number}</span>}
                  </div>
                  <p className="mt-3 text-gray-700 bg-gray-50 rounded-xl p-3 text-sm leading-6">{req.help_needed}</p>
                  <p className="flex items-center gap-1.5 text-xs text-gray-400 mt-3">
                    <Clock size={12} /> {formatDate(req.created_at)}
                  </p>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <button onClick={() => markResolved(req.id, req.status)}
                    className="bg-green-500 text-white p-2.5 rounded-full hover:bg-green-600 transition" title="Mark Resolved">
                    <CheckCircle size={16} />
                  </button>
                  <button onClick={() => deleteHelp(req.id)} disabled={deleting === req.id}
                    className="bg-red-50 text-red-500 p-2.5 rounded-full hover:bg-red-100 transition" title="Delete">
                    {deleting === req.id ? "..." : <Trash2 size={16} />}
                  </button>
                </div>
              </div>
            </div>
          ))}

          {resolvedHelp.length > 0 && (
            <div className="mt-8">
              <h3 className="font-bold text-gray-400 text-sm uppercase tracking-wider mb-4">Resolved ({resolvedHelp.length})</h3>
              <div className="space-y-3">
                {resolvedHelp.map((req) => (
                  <div key={req.id} className="bg-gray-50 rounded-2xl p-4 border border-gray-100 opacity-70">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-gray-600">{req.patient_name}</h3>
                          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">Resolved</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">{req.phone} · {formatDate(req.created_at)}</p>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <button onClick={() => markResolved(req.id, req.status)}
                          className="text-gray-400 hover:text-orange-500 p-2 rounded-full transition text-xs" title="Mark Pending">
                          Reopen
                        </button>
                        <button onClick={() => deleteHelp(req.id)} disabled={deleting === req.id}
                          className="text-gray-400 hover:text-red-500 p-2 rounded-full transition" title="Delete">
                          {deleting === req.id ? "..." : <Trash2 size={14} />}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* VOLUNTEER APPLICATIONS */}
      {subTab === "volunteers" && (
        <div className="space-y-4">
          {/* Setup reminder */}
          {WHATSAPP_GROUP_LINK.includes("your-group-invite-code") && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 text-sm text-yellow-800">
              ⚠️ <strong>Setup pending:</strong> Apna WhatsApp group invite link <code>admin-dashboard.tsx</code> ke top mein <code>WHATSAPP_GROUP_LINK</code> variable mein daalo.
              Group banao → "Invite via link" se link copy karo.
            </div>
          )}

          {volunteers.length === 0 && (
            <div className="bg-white rounded-2xl p-10 text-center text-gray-400 border border-dashed border-gray-200">
              Koi volunteer application abhi tak nahi aaya.
            </div>
          )}

          {volunteers.map((v) => (
            <div key={v.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-lg">{v.full_name}</h3>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">{v.role}</span>
                    {v.status === "approved" && (
                      <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1">
                        <CheckCircle size={12} /> Approved
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600 flex-wrap">
                    <a href={`tel:${v.phone}`} className="flex items-center gap-1.5 hover:text-orange-600">
                      <Phone size={14} /> {v.phone}
                    </a>
                    {v.email && (
                      <a href={`mailto:${v.email}`} className="flex items-center gap-1.5 hover:text-orange-600">
                        <Mail size={14} /> {v.email}
                      </a>
                    )}
                  </div>
                  {v.motivation && (
                    <p className="mt-3 text-gray-700 bg-gray-50 rounded-xl p-3 text-sm leading-6">{v.motivation}</p>
                  )}
                  <p className="flex items-center gap-1.5 text-xs text-gray-400 mt-3">
                    <Clock size={12} /> {formatDate(v.created_at)}
                  </p>

                  {/* WhatsApp Action */}
                  <div className="mt-4 flex gap-2 flex-wrap">
                    <a
                      href={getWhatsAppLink(v)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => approveVolunteer(v.id)}
                      className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-[#1FAE53] transition"
                    >
                      <MessageCircle size={16} />
                      {v.status === "approved" ? "Resend WhatsApp Message" : "Approve & Send WhatsApp Welcome"}
                    </a>
                  </div>
                </div>
                <button onClick={() => deleteVolunteer(v.id)} disabled={deleting === v.id}
                  className="bg-red-50 text-red-500 p-2.5 rounded-full hover:bg-red-100 transition shrink-0" title="Delete">
                  {deleting === v.id ? "..." : <Trash2 size={16} />}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── EVENTS EDITOR ────────────────────────────────────── */
function EventsEditor() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({
    title: "", description: "", location: "", event_date: "", event_time: "", image_url: "",
    latitude: "", longitude: "",
  });
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState<number | null>(null);

  const load = async () => {
    const { data } = await supabase.from("events").select("*").order("event_date", { ascending: true });
    if (data) setEvents(data);
  };

  useEffect(() => {
    load();
    const channel = supabase
      .channel("admin-events-changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "events" }, load)
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, []);

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const filename = `event-${Date.now()}-${file.name.replace(/\s/g, "_")}`;
    const { error } = await supabase.storage.from("gallery").upload(filename, file, { upsert: true });
    if (error) { alert("Upload failed: " + error.message); setUploading(false); return; }
    const { data: urlData } = supabase.storage.from("gallery").getPublicUrl(filename);
    setForm((prev) => ({ ...prev, image_url: urlData.publicUrl }));
    setUploading(false);
    e.target.value = "";
  };

  const addNew = async () => {
    if (!form.title || !form.event_date) return;
    setSaving(true);
    await supabase.from("events").insert({
      ...form,
      latitude: form.latitude ? parseFloat(form.latitude) : null,
      longitude: form.longitude ? parseFloat(form.longitude) : null,
    });
    setForm({ title: "", description: "", location: "", event_date: "", event_time: "", image_url: "", latitude: "", longitude: "" });
    setAdding(false);
    setSaving(false);
    await load();
  };

  const deleteItem = async (id: number) => {
    setDeleting(id);
    await supabase.from("events").delete().eq("id", id);
    setEvents((prev) => prev.filter((e) => e.id !== id));
    setDeleting(null);
  };

  const today = new Date().toISOString().split("T")[0];
  const upcoming = events.filter((e) => e.event_date >= today);
  const past = events.filter((e) => e.event_date < today);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Manage Events & Camps</h2>
          <p className="text-gray-500 text-sm mt-1">Upcoming medical camps aur activities add karo — website pe automatically dikhenge.</p>
        </div>
        <button onClick={() => setAdding(true)}
          className="flex items-center gap-2 bg-orange-600 text-white px-5 py-3 rounded-xl hover:bg-orange-700 transition">
          <Plus size={16} /> Add Event
        </button>
      </div>

      {adding && (
        <div className="mb-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
          <h3 className="font-bold text-lg">New Event / Camp</h3>

          <div>
            <label className="text-xs text-gray-400 font-medium uppercase tracking-wider">Title *</label>
            <input placeholder="e.g. Free Medical Checkup Camp" value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-300" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-400 font-medium uppercase tracking-wider">Date *</label>
              <input type="date" value={form.event_date}
                onChange={(e) => setForm({ ...form, event_date: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-300" />
            </div>
            <div>
              <label className="text-xs text-gray-400 font-medium uppercase tracking-wider">Time</label>
              <input placeholder="e.g. 9:00 AM - 1:00 PM" value={form.event_time}
                onChange={(e) => setForm({ ...form, event_time: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-300" />
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-400 font-medium uppercase tracking-wider">Location</label>
            <input placeholder="e.g. PGI Chandigarh, Sector 12" value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-300" />
          </div>

          {/* Map Coordinates */}
          <div className="bg-orange-50 rounded-2xl p-4">
            <label className="text-xs text-gray-500 font-medium uppercase tracking-wider">Map Location (optional)</label>
            <div className="grid grid-cols-2 gap-3 mt-2">
              <input type="number" step="any" placeholder="Latitude e.g. 30.7650" value={form.latitude}
                onChange={(e) => setForm({ ...form, latitude: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white" />
              <input type="number" step="any" placeholder="Longitude e.g. 76.7754" value={form.longitude}
                onChange={(e) => setForm({ ...form, longitude: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white" />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Coordinates kaise milein: <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Google Maps</a> kholo →
              location pe right-click karo → coordinates pe click karo (copy ho jaayega) → yahan paste karo (latitude, longitude alag-alag boxes mein).
            </p>

            {form.latitude && form.longitude && (
              <div className="mt-3 rounded-xl overflow-hidden border border-orange-100">
                <iframe
                  src={`https://www.google.com/maps?q=${form.latitude},${form.longitude}&output=embed`}
                  width="100%" height="180" loading="lazy" style={{ border: 0 }}
                />
              </div>
            )}
          </div>

          <div>
            <label className="text-xs text-gray-400 font-medium uppercase tracking-wider">Description</label>
            <textarea placeholder="Event ke baare mein details..." rows={3} value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none" />
          </div>

          {/* Image Upload */}
          <div>
            <label className="text-xs text-gray-400 font-medium uppercase tracking-wider">Event Photo (optional)</label>
            <div className="flex items-center gap-4 mt-1">
              {form.image_url && (
                <img src={form.image_url} alt="Preview" className="w-16 h-16 rounded-xl object-cover border border-gray-200" />
              )}
              <label className={`flex items-center gap-2 px-5 py-3 rounded-xl cursor-pointer transition text-sm font-medium ${
                uploading ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-orange-50 text-orange-600 hover:bg-orange-100"
              }`}>
                <Upload size={15} />
                {uploading ? "Uploading..." : form.image_url ? "Change Photo" : "Upload from Computer"}
                <input type="file" accept="image/*" className="hidden" onChange={uploadImage} disabled={uploading} />
              </label>
              {form.image_url && (
                <button onClick={() => setForm({ ...form, image_url: "" })}
                  className="text-xs text-gray-400 hover:text-red-500 transition">
                  Remove
                </button>
              )}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button onClick={addNew} disabled={saving || uploading}
              className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition disabled:opacity-50">
              {saving ? "Saving..." : "Save Event"}
            </button>
            <button onClick={() => setAdding(false)}
              className="border border-gray-200 px-6 py-3 rounded-xl hover:bg-gray-50 transition">
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Upcoming */}
      <h3 className="font-bold text-gray-700 mb-3">Upcoming ({upcoming.length})</h3>
      <div className="space-y-3 mb-8">
        {upcoming.length === 0 && (
          <div className="bg-white rounded-2xl p-8 text-center text-gray-400 border border-dashed border-gray-200">
            Koi upcoming event nahi hai. "Add Event" se add karo.
          </div>
        )}
        {upcoming.map((ev) => (
          <div key={ev.id} className="bg-white rounded-2xl p-5 shadow-sm border border-orange-100 flex gap-4 items-start">
            {ev.image_url ? (
              <img src={ev.image_url} alt={ev.title} className="w-16 h-16 rounded-xl object-cover shrink-0" />
            ) : (
              <div className="w-16 h-16 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                <Calendar size={24} className="text-orange-400" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h4 className="font-bold">{ev.title}</h4>
              <p className="text-sm text-orange-600 font-medium mt-0.5">{formatDate(ev.event_date)}{ev.event_time && ` · ${ev.event_time}`}</p>
              {ev.location && (
                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1"><MapPin size={12} /> {ev.location}</p>
              )}
              {ev.description && <p className="text-sm text-gray-600 mt-2 line-clamp-2">{ev.description}</p>}
            </div>
            <button onClick={() => deleteItem(ev.id)} disabled={deleting === ev.id}
              className="text-gray-400 hover:text-red-500 transition shrink-0 p-2">
              {deleting === ev.id ? "..." : <Trash2 size={18} />}
            </button>
          </div>
        ))}
      </div>

      {/* Past */}
      {past.length > 0 && (
        <>
          <h3 className="font-bold text-gray-400 text-sm uppercase tracking-wider mb-3">Past Events ({past.length})</h3>
          <div className="space-y-2">
            {past.map((ev) => (
              <div key={ev.id} className="bg-gray-50 rounded-2xl p-4 border border-gray-100 opacity-60 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-600">{ev.title}</p>
                  <p className="text-xs text-gray-400">{formatDate(ev.event_date)}</p>
                </div>
                <button onClick={() => deleteItem(ev.id)} disabled={deleting === ev.id}
                  className="text-gray-400 hover:text-red-500 transition p-2">
                  {deleting === ev.id ? "..." : <Trash2 size={14} />}
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}