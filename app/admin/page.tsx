// FILE: app/admin/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Lock, Eye, EyeOff, Download, ExternalLink } from "lucide-react";
import RegisterSW from "@/components/RegisterSW";

export default function AdminLogin() {
  const [key, setKey] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [isStandalone, setIsStandalone] = useState(false);
  const [relatedApps, setRelatedApps] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Detect if currently running INSIDE the installed app
    const standaloneCheck =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true;
    setIsStandalone(standaloneCheck);

    // Detect if app is installed but we're viewing it in a regular browser tab
    if ("getInstalledRelatedApps" in navigator) {
      (navigator as any).getInstalledRelatedApps().then((apps: any[]) => {
        if (apps.length > 0) setRelatedApps(true);
      });
    }

    const handler = (e: any) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    await installPrompt.userChoice;
    setInstallPrompt(null);
  };

  const handleOpenApp = () => {
    // Re-launching the standalone scope nudges the OS to bring the installed app forward;
    // if it's not running, this opens the PWA window.
    window.location.href = "/admin";
  };

  const handleLogin = async () => {
    if (!key) return;
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/verify-key", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key }),
    });

    const data = await res.json();

    if (data.success) {
      sessionStorage.setItem("admin_authenticated", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid secret key. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF8F2] flex items-center justify-center px-5">
      <RegisterSW />

      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">

        <div className="flex items-center gap-3 justify-center">
          <img src="/images/logo.png" alt="Logo" className="h-14 w-14 object-contain rounded-full" />
          <div className="text-center">
            <h1 className="font-bold text-xl">Kar Bhala Ho Bhala</h1>
            <p className="text-xs text-gray-500">Admin Panel</p>
          </div>
        </div>
        
        {/* Case 2: In a normal browser tab, but app is already installed somewhere */}
        {!isStandalone && relatedApps && (
          <button
            onClick={handleOpenApp}
            className="flex items-center justify-center gap-2 w-full mt-6 bg-green-50 text-green-700 border border-green-200 py-3 rounded-xl font-medium hover:bg-green-100 transition text-sm"
          >
            <ExternalLink size={16} />
            Open in App
          </button>
        )}

        {/* Case 3: Not installed yet, browser offers install prompt */}
        {!isStandalone && !relatedApps && installPrompt && (
          <button
            onClick={handleInstall}
            className="flex items-center justify-center gap-2 w-full mt-6 bg-orange-50 text-orange-600 border border-orange-200 py-3 rounded-xl font-medium hover:bg-orange-100 transition text-sm"
          >
            <Download size={16} />
            Install Admin App
          </button>
        )}

        <div className="mt-8">
          <label className="text-xs text-gray-400 font-medium uppercase tracking-wider">Secret Key</label>
          <div className="flex items-center gap-3 bg-orange-50 rounded-2xl px-5 py-4 mt-2">
            <Lock size={20} className="text-orange-600 shrink-0" />
            <input
              type={showKey ? "text" : "password"}
              placeholder="Enter Admin Secret Key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="bg-transparent w-full focus:outline-none text-gray-800 placeholder:text-gray-400"
            />
            <button onClick={() => setShowKey(!showKey)} className="text-gray-400 hover:text-gray-600">
              {showKey ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm mt-3 text-center">{error}</p>}

          <button onClick={handleLogin} disabled={loading || !key}
            className="mt-6 w-full bg-orange-600 text-white py-4 rounded-2xl font-semibold hover:bg-orange-700 transition disabled:opacity-50 disabled:cursor-not-allowed">
            {loading ? "Verifying..." : "Enter Admin Panel"}
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          Only authorized admins can access this panel.
        </p>
      </div>
    </div>
  );
}