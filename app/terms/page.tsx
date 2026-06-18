// FILE: app/terms/page.tsx

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Use — Kar Bhala Ho Bhala",
  description: "Terms of Use of Kar Bhala Ho Bhala Charitable Trust",
};

export default function Terms() {
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
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">Legal</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">Terms of Use</h1>
            <p className="text-gray-500 mt-3">Last Updated: January 1, 2026</p>
            <p className="text-gray-600 mt-6 leading-8">
              These Terms of Use govern your access to and use of the website operated by Kar Bhala Ho Bhala Charitable Trust
              (Registration No. XXXX/2018), a registered charitable trust operating under Indian law with its principal place
              of activity near PGI Chandigarh, India. By accessing or using this website, you agree to be bound by these terms.
              If you do not agree, please refrain from using this website.
            </p>
          </div>

          <div className="space-y-10 text-gray-700">

            <Section title="1. Nature of the Organisation">
              <p>
                Kar Bhala Ho Bhala is a non-profit charitable trust registered in India. All activities of this Trust — including
                medical assistance, food distribution, accommodation support, medicine provision, and emotional counselling —
                are carried out on a voluntary, humanitarian basis. The Trust does not engage in any commercial activity,
                political affiliation, or religious proselytisation.
              </p>
              <p className="mt-4">
                Our primary beneficiaries are poor and underprivileged patients and their families seeking treatment at
                Post Graduate Institute of Medical Education and Research (PGI), Chandigarh, and surrounding facilities.
              </p>
            </Section>

            <Section title="2. Acceptance of Terms">
              <p>By using this website, you confirm that:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>You are at least 18 years of age, or accessing the website under the supervision of a parent or legal guardian.</li>
                <li>You will use this website only for lawful purposes and in a manner that does not infringe the rights of others.</li>
                <li>The information you provide through any form on this website is accurate, complete, and not misleading.</li>
                <li>You will not attempt to disrupt, hack, or misuse any system or data associated with this website.</li>
              </ul>
            </Section>

            <Section title="3. Donations">
              <p>All donations made to Kar Bhala Ho Bhala are voluntary contributions to our charitable cause. By making a donation, you acknowledge that:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Donations are non-refundable once processed, except in cases of verifiable technical error.</li>
                <li>Donations will be utilised solely for the charitable purposes of the Trust — patient assistance, volunteer operations, and programme delivery.</li>
                <li>The Trust is registered under Section 12A and Section 80G of the Income Tax Act, 1961. Donors may claim tax deductions as permissible under applicable law. The Trust will provide a receipt and 80G certificate upon request.</li>
                <li>The Trust exercises full discretion in allocating donations to areas of greatest need within its stated charitable objectives.</li>
                <li>You should not make a donation with funds obtained through illegal means. The Trust reserves the right to refuse or return donations if it reasonably suspects illegality.</li>
              </ul>
            </Section>

            <Section title="4. Volunteer Applications">
              <p>
                Submission of a volunteer application does not guarantee acceptance into the Trust's volunteer programme.
                The Trust reserves the right to accept, reject, or defer applications based on operational requirements,
                capacity, and suitability of the applicant. All volunteers are expected to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Conduct themselves with dignity, respect, and compassion toward patients and families.</li>
                <li>Maintain strict confidentiality regarding patient identities, medical information, and personal circumstances.</li>
                <li>Not use their association with the Trust for personal gain, publicity, or commercial advantage without express written consent.</li>
                <li>Comply with all guidelines, codes of conduct, and instructions issued by the Trust's coordinators.</li>
              </ul>
              <p className="mt-4">The Trust reserves the right to terminate a volunteer's association at any time if these standards are not upheld.</p>
            </Section>

            <Section title="5. Patient Assistance Requests">
              <p>
                Submission of a help request through our website initiates a review process by our volunteer team.
                Assistance is provided based on available resources, verified need, and Trust capacity. By submitting a request, you agree that:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>The information provided is truthful and accurate to the best of your knowledge.</li>
                <li>The Trust may contact you for verification and clarification purposes.</li>
                <li>Submission does not guarantee immediate or unconditional assistance. The Trust will make reasonable efforts to assist but is not legally obligated to do so.</li>
                <li>Information shared will be treated with strict confidentiality and used only to provide appropriate support.</li>
              </ul>
            </Section>

            <Section title="6. Intellectual Property">
              <p>
                All content on this website — including text, images, logos, graphics, videos, layout, and code — is the property
                of Kar Bhala Ho Bhala Charitable Trust or its content creators and is protected under applicable Indian copyright law.
              </p>
              <p className="mt-4">You may not:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Reproduce, distribute, or republish any content from this website without prior written permission.</li>
                <li>Use our name, logo, or branding for any purpose without express written consent.</li>
                <li>Misrepresent your affiliation with the Trust in any public communication.</li>
              </ul>
              <p className="mt-4">Limited use of content for non-commercial, educational, or awareness purposes may be permitted with proper attribution. Please contact us to seek permission.</p>
            </Section>

            <Section title="7. Disclaimer of Warranties">
              <p>
                This website is provided on an "as is" and "as available" basis. While we make every effort to ensure accuracy
                and completeness of information, the Trust makes no warranties — express or implied — regarding the reliability,
                availability, or suitability of the website or its content for any particular purpose.
              </p>
              <p className="mt-4">
                Medical and health-related information shared on this website is for general awareness only and does not
                constitute professional medical advice. Always consult a qualified medical professional for health-related decisions.
              </p>
            </Section>

            <Section title="8. Limitation of Liability">
              <p>
                To the fullest extent permitted by applicable law, Kar Bhala Ho Bhala Charitable Trust and its trustees,
                volunteers, and administrators shall not be liable for any direct, indirect, incidental, consequential,
                or punitive damages arising from:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Your use or inability to use this website.</li>
                <li>Any errors or omissions in the content of this website.</li>
                <li>Decisions made based on information provided through this website.</li>
                <li>Unauthorised access to or alteration of your data due to circumstances beyond our reasonable control.</li>
              </ul>
            </Section>

            <Section title="9. Third-Party Links & Services">
              <p>
                This website may contain links to third-party websites, payment gateways (UPI, banking platforms), and social
                media platforms. These links are provided for convenience only. We do not endorse, control, or take responsibility
                for the content, policies, or practices of any third-party site. Use of third-party services is subject to
                their respective terms and privacy policies.
              </p>
            </Section>

            <Section title="10. Governing Law & Jurisdiction">
              <p>
                These Terms of Use are governed by and construed in accordance with the laws of India. Any disputes arising
                out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located
                in Chandigarh, India.
              </p>
            </Section>

            <Section title="11. Amendments">
              <p>
                The Trust reserves the right to modify these Terms of Use at any time. Changes will be effective immediately
                upon posting to this page. The "Last Updated" date will reflect the most recent revision. Continued use of
                the website after changes are posted constitutes your acceptance of the revised terms. We recommend reviewing
                this page periodically.
              </p>
            </Section>

            <Section title="12. Contact & Grievances">
              <p>For any questions regarding these Terms of Use, or to raise a grievance, please contact our Grievance Officer:</p>
              <div className="mt-4 bg-green-50 rounded-2xl p-6 space-y-2">
                <p><strong>Grievance Officer — Kar Bhala Ho Bhala Charitable Trust</strong></p>
                <p>Near PGI Chandigarh, India</p>
                <p>Email: s2009.saransh@gmail.com</p>
                <p>Phone: +91 9473093492</p>
                <p className="text-sm text-gray-500 mt-2">We will acknowledge your grievance within 48 hours and endeavour to resolve it within 30 days.</p>
              </div>
            </Section>

          </div>
        </div>
      </main>

      <div className="text-center py-8 text-gray-400 text-sm">
        © 2026 Kar Bhala Ho Bhala. All Rights Reserved. &nbsp;|&nbsp;
        <Link href="/privacy-policy" className="hover:text-orange-500 transition">Privacy Policy</Link>
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