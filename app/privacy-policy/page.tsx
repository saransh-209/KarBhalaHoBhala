// FILE: app/privacy-policy/page.tsx

import Link from "next/link";
import { Heart, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — Kar Bhala Ho Bhala",
  description: "Privacy Policy of Kar Bhala Ho Bhala Charitable Trust",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#FDF8F2]">

      {/* Header */}
      <header className="bg-white border-b border-orange-100 px-6 py-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Logo" className="h-10 w-10 object-contain rounded-full" />
            <div>
              <h1 className="font-bold text-base leading-tight">Kar Bhala Ho Bhala</h1>
              <p className="text-xs text-gray-500">Seva Hi Pooja Hai</p>
            </div>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-sm transition">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-5 py-16">
        <div className="bg-white rounded-3xl shadow-sm p-10 md:p-16">

          <div className="mb-10">
            <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">Legal</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">Privacy Policy</h1>
            <p className="text-gray-500 mt-3">Last Updated: January 1, 2026</p>
            <p className="text-gray-600 mt-6 leading-8">
              Kar Bhala Ho Bhala Charitable Trust ("we", "our", "the Trust") is committed to protecting the privacy and dignity
              of every individual who interacts with our organisation — including donors, volunteers, patients, patient families,
              and website visitors. This Privacy Policy describes how we collect, use, store, and protect personal information
              in accordance with the Information Technology Act, 2000 and applicable Indian data protection norms.
            </p>
          </div>

          <div className="space-y-10 text-gray-700">

            <Section title="1. Information We Collect">
              <p>We collect personal information only when it is necessary to deliver our charitable services, process donations, or coordinate volunteer activity. The categories of information we may collect include:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Donor Information:</strong> Full name, contact number, email address, UPI transaction ID, bank transfer reference, and donation amount.</li>
                <li><strong>Volunteer Information:</strong> Full name, email, phone number, area of interest, motivation, and availability.</li>
                <li><strong>Patient & Family Information:</strong> Patient name, guardian name, ward number, mobile number, nature of medical condition, and type of assistance required. This information is collected solely to provide appropriate support.</li>
                <li><strong>Website Usage Data:</strong> Browser type, IP address, pages visited, and session duration collected via cookies and analytics tools for improving our website.</li>
              </ul>
              <p className="mt-4">We do not collect sensitive financial information such as full bank account numbers, card numbers, or passwords.</p>
            </Section>

            <Section title="2. How We Use Your Information">
              <p>Your personal information is used strictly for the following purposes:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Processing and acknowledging donations, including issuing 80G tax exemption certificates.</li>
                <li>Coordinating volunteer onboarding, scheduling, and communication.</li>
                <li>Providing targeted assistance to patients and families in medical need.</li>
                <li>Sending periodic updates, impact reports, and newsletters (only with your consent).</li>
                <li>Complying with legal and regulatory requirements under Indian law.</li>
                <li>Internal research and reporting to improve our service delivery.</li>
              </ul>
              <p className="mt-4">We will never use your information for commercial marketing, profiling, or any purpose inconsistent with our charitable mission.</p>
            </Section>

            <Section title="3. Data Sharing & Disclosure">
              <p>We treat your personal data with the highest degree of confidentiality. We do not sell, rent, trade, or commercially share your personal information with any third party.</p>
              <p className="mt-4">Limited disclosure may occur in the following circumstances:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Legal Compliance:</strong> When required by Indian law, court order, or government authority.</li>
                <li><strong>Service Providers:</strong> Trusted technology and payment service providers who assist us in operating our website and processing donations — bound by confidentiality obligations.</li>
                <li><strong>Audit & Regulatory Bodies:</strong> Statutory auditors, the Income Tax Department, and other regulatory bodies as required for our registered Trust compliance.</li>
              </ul>
              <p className="mt-4">Patient medical information is never shared publicly and is accessible only to authorised volunteers on a need-to-know basis.</p>
            </Section>

            <Section title="4. Cookies & Analytics">
              <p>Our website uses cookies — small text files stored on your device — to enhance user experience and understand how visitors interact with our site. We use:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality.</li>
                <li><strong>Analytics Cookies:</strong> Used via privacy-respecting tools to understand visitor behaviour and improve content.</li>
              </ul>
              <p className="mt-4">You may disable cookies through your browser settings. However, certain features of our website may not function optimally without them. Our cookie banner provides you the option to accept or decline non-essential cookies.</p>
            </Section>

            <Section title="5. Data Retention">
              <p>We retain personal data only for as long as necessary:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Donor records are retained for a minimum of 7 years for statutory compliance and tax purposes.</li>
                <li>Volunteer application data is retained for 2 years from the date of application.</li>
                <li>Patient assistance records are retained for 3 years in anonymised form for impact reporting.</li>
                <li>Website analytics data is retained for 12 months on a rolling basis.</li>
              </ul>
              <p className="mt-4">After these periods, data is securely deleted or irreversibly anonymised.</p>
            </Section>

            <Section title="6. Data Security">
              <p>We implement appropriate technical and organisational measures to protect your personal data from unauthorised access, alteration, disclosure, or destruction. Our measures include:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>SSL/TLS encryption for all data transmitted through our website.</li>
                <li>Access controls ensuring only authorised personnel can access personal data.</li>
                <li>Regular review of our data collection, storage, and processing practices.</li>
                <li>Secure cloud infrastructure with reputable service providers.</li>
              </ul>
              <p className="mt-4">While we strive to protect your data, no method of transmission over the Internet is completely secure. We encourage you to take precautions when sharing personal information online.</p>
            </Section>

            <Section title="7. Your Rights">
              <p>You have the following rights regarding your personal data held by us:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Right to Deletion:</strong> Request deletion of your data, subject to our legal retention obligations.</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for communications at any time by contacting us.</li>
                <li><strong>Right to Grievance Redressal:</strong> Lodge a complaint regarding our data handling practices.</li>
              </ul>
              <p className="mt-4">To exercise any of these rights, please contact us at <strong>s2009.saransh@gmail.com</strong> with the subject line "Data Privacy Request". We will respond within 30 days.</p>
            </Section>

            <Section title="8. Children's Privacy">
              <p>
                Our website is not directed at children under the age of 18. We do not knowingly collect personal information from minors. Where a patient is a minor, information is collected from and managed through their legal guardian. If you believe we have inadvertently collected information from a minor, please contact us immediately and we will promptly delete such data.
              </p>
            </Section>

            <Section title="9. Third-Party Links">
              <p>
                Our website may contain links to third-party websites, UPI payment platforms, or social media pages. We are not responsible for the privacy practices of these external sites and encourage you to read their respective privacy policies before providing any personal information.
              </p>
            </Section>

            <Section title="10. Changes to This Policy">
              <p>
                We reserve the right to update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. The "Last Updated" date at the top of this page will reflect any changes. We encourage you to review this policy periodically. Continued use of our website after changes constitutes acceptance of the revised policy.
              </p>
            </Section>

            <Section title="11. Contact Us">
              <p>For any questions, concerns, or requests related to this Privacy Policy, please reach out to us:</p>
              <div className="mt-4 bg-orange-50 rounded-2xl p-6 space-y-2">
                <p><strong>Kar Bhala Ho Bhala Charitable Trust</strong></p>
                <p>Near PGI Chandigarh, India</p>
                <p>Email: s2009.saransh@gmail.com</p>
                <p>Phone: +91 9473093492</p>
              </div>
            </Section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="text-center py-8 text-gray-400 text-sm">
        © 2026 Kar Bhala Ho Bhala. All Rights Reserved. &nbsp;|&nbsp;
        <Link href="/terms" className="hover:text-orange-500 transition">Terms of Use</Link>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="text-gray-600 leading-8 space-y-2">{children}</div>
    </div>
  );
}