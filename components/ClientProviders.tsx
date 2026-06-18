// FILE: components/ClientProviders.tsx
"use client";

import { LanguageProvider } from "@/lib/LanguageContext";
import CookieBanner from "@/components/CookieBanner";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
      <CookieBanner />
    </LanguageProvider>
  );
}