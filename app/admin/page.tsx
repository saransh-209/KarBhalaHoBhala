// FILE: app/admin/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Eye, EyeOff } from "lucide-react";

export default function AdminLogin() {
  const [key, setKey] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const router = useRouter();

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
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">

        <div className="flex items-center gap-3 justify-center">
          <img src="/images/logo.png" alt="Logo" className="h-14 w-14 object-contain rounded-full" />
          <div className="text-center">
            <h1 className="font-bold text-xl">Kar Bhala Ho Bhala</h1>
            <p className="text-s text-gray-500">Admin Panel</p>
          </div>
        </div>

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

        

        <p className="text-center text-xs text-gray-400 mt-6">
          Only authorized admins can access this panel.
        </p>
      </div>
    </div>
  );
}