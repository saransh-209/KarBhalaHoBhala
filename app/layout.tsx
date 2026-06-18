import type { Metadata } from "next";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

export const metadata: Metadata = {
  metadataBase: new URL("https://karbhalahobhala.org"),
  title: "Kar Bhala Ho Bhala | NGO Near PGI Chandigarh – Patient Support, Medicines & Donations",
  description:
    "Kar Bhala Ho Bhala is a registered charitable trust (80G, 12A) near PGI Chandigarh, India, providing free medicines, food, accommodation, and financial aid to poor and underprivileged patients. Donate online via UPI, get an 80G tax-exempt receipt, or volunteer with us.",
  keywords: [
    "Kar Bhala Ho Bhala",
    "NGO near PGI Chandigarh",
    "charity Chandigarh",
    "donate to NGO India",
    "80G donation receipt",
    "patient support PGI Chandigarh",
    "free medicine NGO India",
    "volunteer NGO Chandigarh",
    "medical camp Chandigarh",
    "Seva Hi Pooja Hai",
  ],
  authors: [{ name: "Kar Bhala Ho Bhala Charitable Trust" }],
  creator: "Kar Bhala Ho Bhala Charitable Trust",
  publisher: "Kar Bhala Ho Bhala Charitable Trust",
  alternates: {
    canonical: "https://karbhalahobhala.org",
  },
  openGraph: {
    title: "Kar Bhala Ho Bhala | Helping Patients Near PGI Chandigarh",
    description:
      "A registered charitable trust providing medicines, food, accommodation and financial aid to underprivileged patients near PGI Chandigarh. Donate, volunteer, or request help.",
    url: "https://karbhalahobhala.org",
    siteName: "Kar Bhala Ho Bhala",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Kar Bhala Ho Bhala — Volunteers helping patients near PGI Chandigarh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kar Bhala Ho Bhala | NGO Near PGI Chandigarh",
    description:
      "Registered charitable trust providing medicines, food, accommodation and financial aid to underprivileged patients near PGI Chandigarh.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": "https://karbhalahobhala.org/#organization",
    name: "Kar Bhala Ho Bhala",
    alternateName: "Kar Bhala Ho Bhala Charitable Trust",
    slogan: "Seva Hi Pooja Hai",
    url: "https://karbhalahobhala.org",
    logo: "https://karbhalahobhala.org/images/logo.png",
    image: "https://karbhalahobhala.org/images/hero.jpg",
    description:
      "Kar Bhala Ho Bhala is a registered charitable trust (80G, 12A) near PGI Chandigarh, India, providing free medicines, food, accommodation, emotional support, and financial aid to poor and underprivileged patients and their families.",
    foundingDate: "2018",
    nonprofitStatus: "Nonprofit501c3",
    areaServed: {
      "@type": "Place",
      name: "Chandigarh, India",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chandigarh",
      addressRegion: "Chandigarh",
      addressCountry: "IN",
      streetAddress: "Near PGI Chandigarh",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9473093492",
      email: "s2009.saransh@gmail.com",
      contactType: "Customer Support",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Punjabi"],
    },
    sameAs: [
      "https://www.facebook.com",
      "https://www.instagram.com",
      "https://www.youtube.com",
    ],
    knowsAbout: [
      "Patient assistance",
      "Free medicines for poor patients",
      "Medical camps Chandigarh",
      "Volunteer opportunities Chandigarh",
      "80G tax-exempt donations India",
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does Kar Bhala Ho Bhala do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kar Bhala Ho Bhala is a registered charitable trust near PGI Chandigarh, India that provides poor and underprivileged patients with free medicines, food, accommodation, financial aid, and emotional support during their medical treatment.",
        },
      },
      {
        "@type": "Question",
        name: "Is my donation to Kar Bhala Ho Bhala tax deductible?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Kar Bhala Ho Bhala is registered under Section 80G and Section 12A of the Income Tax Act, 1961. Donors can claim tax exemption and can instantly generate an 80G donation receipt on the website after donating via UPI or bank transfer.",
        },
      },
      {
        "@type": "Question",
        name: "How can I donate to Kar Bhala Ho Bhala?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can donate via UPI (scan the QR code or pay to 9473093492@axl), or via direct bank transfer to the trust's Union Bank of India account. After donating, you can generate an 80G receipt instantly by entering your transaction ID on the website.",
        },
      },
      {
        "@type": "Question",
        name: "How can I volunteer with Kar Bhala Ho Bhala?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can apply to volunteer by filling out the volunteer application form on the website, choosing a role such as Medical Volunteer, Counselor, Support Runner, or Community Volunteer. Approved volunteers receive a WhatsApp invite to join the volunteer group.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Kar Bhala Ho Bhala located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kar Bhala Ho Bhala operates near PGI (Post Graduate Institute of Medical Education and Research), Chandigarh, India, primarily serving patients and families seeking treatment at PGI Chandigarh.",
        },
      },
      {
        "@type": "Question",
        name: "How can a patient request help from Kar Bhala Ho Bhala?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Patients or their family members can submit a help request through the 'Request Help' form on the website, providing the patient's name, hospital ward number, and details of the assistance needed. A volunteer will respond shortly.",
        },
      },
    ],
  };

  return (
    <html lang="en" className="h-full" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}