"use client";

import { ShieldCheck, BadgeCheck, HeartHandshake, FileText, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { supabase } from "@/lib/supabase";

const trustIcons = [ShieldCheck, BadgeCheck, HeartHandshake];

export default function DonateSection() {
  const { t } = useLang();
  const d = t.donate;
  const [showReceipt, setShowReceipt] = useState(false);

  return (
    <section id="donate" className="py-24 bg-gradient-to-br from-orange-600 to-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center">
          <span className="bg-white/20 px-4 py-2 rounded-full">{d.badge}</span>
          <h2 className="heading-font text-5xl font-bold mt-6">{d.heading}</h2>
          <p className="mt-6 max-w-2xl mx-auto text-orange-100">{d.desc}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white text-black rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold">{d.upiTitle}</h3>
            <div className="flex justify-center mt-8">
              <img src="/images/upi-qr.jpeg" alt="UPI QR Code" className="w-72 h-72 object-contain" />
            </div>
            <p className="text-center mt-6 text-lg font-semibold">{d.upiId}</p>
            <a href="upi://pay?pa=karbhalahobhala@upi&pn=Kar%20Bhala%20Ho%20Bhala&cu=INR"
              className="block mt-8 text-center bg-orange-600 text-white py-4 rounded-xl font-semibold">
              {d.openUpi}
            </a>

            {/* Receipt Button */}
            <button onClick={() => setShowReceipt(true)}
              className="flex items-center justify-center gap-2 w-full mt-3 border-2 border-orange-600 text-orange-600 py-4 rounded-xl font-semibold hover:bg-orange-50 transition">
              <FileText size={18} />
              Get 80G Donation Receipt
            </button>
          </motion.div>

          <div>
            <div className="grid gap-5">
              {d.amounts.map((item, i) => (
                <div key={i} className="bg-white/10 rounded-2xl p-5">
                  <h4 className="font-bold text-xl">{item.amount}</h4>
                  <p className="mt-2">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-white/10 rounded-2xl p-6">
              <h4 className="font-bold text-xl">{d.bank.title}</h4>
              <div className="mt-4 space-y-2">
                <p>{d.bank.name}</p>
                <p>{d.bank.acc}</p>
                <p>{d.bank.ifsc}</p>
                <p>{d.bank.bank}</p>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              {d.trust.map((item, i) => {
                const Icon = trustIcons[i];
                return (
                  <div key={i} className="flex items-center gap-3">
                    <Icon size={20} />
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Receipt Modal */}
      <AnimatePresence>
        {showReceipt && <ReceiptModal onClose={() => setShowReceipt(false)} />}
      </AnimatePresence>
    </section>
  );
}

/* ── RECEIPT MODAL ────────────────────────────────────── */
function ReceiptModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({
    donorName: "",
    email: "",
    phone: "",
    pan: "",
    amount: "",
    transactionId: "",
    paymentMethod: "UPI",
    date: new Date().toISOString().split("T")[0],
  });
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState<"form" | "recurring" | "done">("form");

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const generateReceipt = async () => {
    if (!form.donorName || !form.amount || !form.email || !form.phone || !form.transactionId) {
      setError("Please fill in all required fields.");
      return;
    }

    const cleanPhone = form.phone.replace(/\D/g, "");
    if (cleanPhone.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    const cleanTxnId = form.transactionId.trim();
    if (cleanTxnId.length !== 12 || !/^\d{12}$/.test(cleanTxnId)) {
      setError("Transaction ID / UTR must be exactly 12 digits.");
      return;
    }

    setError("");
    setGenerating(true);

    try {
      const trimmedTxnId = cleanTxnId;

      // Check if a receipt was already generated for this transaction ID
      const { data: existing } = await supabase
        .from("donations")
        .select("id, receipt_no")
        .eq("transaction_id", trimmedTxnId)
        .maybeSingle();

      if (existing) {
        setError(`A receipt (${existing.receipt_no}) has already been generated for this Transaction ID. Each transaction can only be used once.`);
        setGenerating(false);
        return;
      }

      // Generate receipt number
      const receiptNo = `KBHB-${Date.now().toString().slice(-8)}`;

      // Save to database
      const { error: insertError } = await supabase.from("donations").insert({
        donor_name: form.donorName,
        email: form.email,
        phone: cleanPhone,
        pan: form.pan,
        amount: parseFloat(form.amount),
        payment_method: form.paymentMethod,
        transaction_id: trimmedTxnId,
        receipt_no: receiptNo,
      });

      if (insertError) {
        // Handles race condition if unique constraint exists at DB level
        if (insertError.code === "23505") {
          setError("A receipt has already been generated for this Transaction ID.");
        } else {
          setError("Could not save donation record. Please try again.");
        }
        setGenerating(false);
        return;
      }

      // Generate PDF using jsPDF
      const { jsPDF } = await import("jspdf");
      const docPdf = new jsPDF();

      const orange: [number, number, number] = [234, 88, 12];
      const gray: [number, number, number] = [100, 100, 100];
      const dark: [number, number, number] = [40, 40, 40];

      // Helper: load an image from /public and convert to base64 data URL
      const getImageDataUrl = (url: string): Promise<string | null> =>
        fetch(url)
          .then((res) => res.blob())
          .then((blob) => new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          }))
          .catch(() => null);

      const [logoData, signatureData] = await Promise.all([
        getImageDataUrl("/images/logo.png"),
        getImageDataUrl("/images/signature.png"),
      ]);

      // Header bar
      docPdf.setFillColor(...orange);
      docPdf.rect(0, 0, 210, 35, "F");

      // Logo
      if (logoData) {
        try { docPdf.addImage(logoData, "PNG", 15, 7, 20, 20); } catch {}
      }

      const textX = logoData ? 40 : 15;

      docPdf.setTextColor(255, 255, 255);
      docPdf.setFont("helvetica", "bold");
      docPdf.setFontSize(20);
      docPdf.text("Kar Bhala Ho Bhala", textX, 16);

      docPdf.setFont("helvetica", "normal");
      docPdf.setFontSize(10);
      docPdf.text("Charitable Trust | Seva Hi Pooja Hai", textX, 23);
      docPdf.text("Near PGI Chandigarh, India", textX, 29);

      // Title
      docPdf.setTextColor(...dark);
      docPdf.setFont("helvetica", "bold");
      docPdf.setFontSize(16);
      docPdf.text("DONATION RECEIPT", 105, 50, { align: "center" });

      docPdf.setDrawColor(...orange);
      docPdf.setLineWidth(0.5);
      docPdf.line(15, 56, 195, 56);

      // Receipt details box
      let y = 68;
      const lineGap = 9;

      docPdf.setFont("helvetica", "normal");
      docPdf.setFontSize(11);

      const row = (label: string, value: string) => {
        docPdf.setTextColor(...gray);
        docPdf.text(label, 15, y);
        docPdf.setTextColor(...dark);
        docPdf.setFont("helvetica", "bold");
        docPdf.text(value, 80, y);
        docPdf.setFont("helvetica", "normal");
        y += lineGap;
      };

      row("Receipt No:", receiptNo);
      row("Transaction ID:", form.transactionId);
      row("Date:", new Date(form.date).toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" }));
      row("Donor Name:", form.donorName);
      row("Email:", form.email);
      row("Phone:", form.phone);
      if (form.pan) row("PAN:", form.pan.toUpperCase());
      row("Payment Method:", form.paymentMethod);

      y += 5;
      docPdf.setDrawColor(220, 220, 220);
      docPdf.line(15, y, 195, y);
      y += 12;

      // Amount box
      docPdf.setFillColor(255, 247, 237);
      docPdf.roundedRect(15, y - 8, 180, 22, 3, 3, "F");
      docPdf.setTextColor(...gray);
      docPdf.setFontSize(11);
      docPdf.text("Donation Amount", 22, y + 2);
      docPdf.setTextColor(...orange);
      docPdf.setFont("helvetica", "bold");
      docPdf.setFontSize(20);
      docPdf.text(`Rs. ${parseFloat(form.amount).toLocaleString("en-IN")}`, 22, y + 11);

      y += 35;

      // 80G note
      docPdf.setTextColor(...dark);
      docPdf.setFont("helvetica", "normal");
      docPdf.setFontSize(10);
      const note = docPdf.splitTextToSize(
        "This donation is eligible for tax exemption under Section 80G of the Income Tax Act, 1961. " +
        "Kar Bhala Ho Bhala Charitable Trust is a registered trust (Registration No. XXXX/2018), " +
        "registered under Section 12A of the Income Tax Act. Please retain this receipt for your tax filing records.",
        180
      );
      docPdf.text(note, 15, y);
      y += note.length * 5 + 10;

      // Thank you message
      docPdf.setFont("helvetica", "italic");
      docPdf.setFontSize(11);
      docPdf.setTextColor(...orange);
      docPdf.text("Thank you for your generous contribution!", 15, y);
      docPdf.setTextColor(...gray);
      docPdf.setFont("helvetica", "normal");
      docPdf.setFontSize(9);
      docPdf.text("Your support helps us provide medicines, food, accommodation and financial", 15, y + 7);
      docPdf.text("aid to underprivileged patients near PGI Chandigarh.", 15, y + 12);

      // Digital Signature
      if (signatureData) {
        try {
          docPdf.addImage(signatureData, "PNG", 148, 240, 38, 13);
        } catch {}
      }
      docPdf.setDrawColor(180, 180, 180);
      docPdf.setLineWidth(0.2);
      docPdf.line(145, 256, 190, 256);
      docPdf.setFont("helvetica", "normal");
      docPdf.setFontSize(8);
      docPdf.setTextColor(...gray);
      docPdf.text("Authorized Signatory", 167, 261, { align: "center" });
      docPdf.text("Kar Bhala Ho Bhala", 167, 266, { align: "center" });

      // Footer
      docPdf.setDrawColor(...orange);
      docPdf.setLineWidth(0.5);
      docPdf.line(15, 270, 195, 270);
      docPdf.setFontSize(8);
      docPdf.setTextColor(...gray);
      docPdf.text("Kar Bhala Ho Bhala Charitable Trust  |  +91 9473093492  |  s2009.saransh@gmail.com", 105, 278, { align: "center" });
      docPdf.text("This is a computer-generated receipt.", 105, 284, { align: "center" });

      docPdf.save(`Donation-Receipt-${receiptNo}.pdf`);
      setStep("recurring");
    } catch (err) {
      console.error(err);
      setError("Something went wrong generating the receipt. Please try again.");
    } finally {
      setGenerating(false);
    }
  };

  const setupRecurring = async (yes: boolean) => {
    if (!yes) {
      setStep("done");
      return;
    }
    setGenerating(true);
    const donationDay = new Date(form.date).getDate();
    await supabase.from("recurring_donations").insert({
      donor_name: form.donorName,
      phone: form.phone,
      email: form.email,
      amount: parseFloat(form.amount),
      donation_day: Math.min(donationDay, 28),
      active: true,
    });
    setGenerating(false);
    setStep("done");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white text-black rounded-3xl p-8 w-full max-w-md shadow-2xl relative max-h-[90vh] overflow-y-auto"
      >
        <button onClick={onClose} className="absolute top-5 right-5 text-gray-400 hover:text-gray-600">
          <X size={22} />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
            <FileText size={20} className="text-orange-600" />
          </div>
          <h3 className="text-2xl font-bold">
            {step === "form" && "Donation Receipt"}
            {step === "recurring" && "Monthly Donation?"}
            {step === "done" && "All Set!"}
          </h3>
        </div>

        {step === "form" && (
          <>
        <p className="text-gray-500 text-sm mb-6">
          Fill your details to generate an 80G-eligible donation receipt (PDF).
        </p>

        <div className="space-y-4">
          <div>
            <label className="text-xs text-gray-400 font-medium uppercase tracking-wider">Full Name *</label>
            <input value={form.donorName} onChange={(e) => update("donorName", e.target.value)}
              placeholder="Your full name"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-300" />
          </div>

          <div>
            <label className="text-xs text-gray-400 font-medium uppercase tracking-wider">Donation Amount (₹) *</label>
            <input type="number" value={form.amount} onChange={(e) => update("amount", e.target.value)}
              placeholder="e.g. 500"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-300" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-gray-400 font-medium uppercase tracking-wider">Email *</label>
              <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)}
                placeholder="you@example.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-300" />
            </div>
            <div>
              <label className="text-xs text-gray-400 font-medium uppercase tracking-wider">Phone *</label>
              <input type="tel" inputMode="numeric" maxLength={10} value={form.phone}
                onChange={(e) => update("phone", e.target.value.replace(/\D/g, ""))}
                placeholder="10-digit mobile number"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-300" />
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-400 font-medium uppercase tracking-wider">Transaction ID / UTR No. *</label>
            <input inputMode="numeric" maxLength={12} value={form.transactionId}
              onChange={(e) => update("transactionId", e.target.value.replace(/\D/g, ""))}
              placeholder="12-digit UPI/Bank transaction reference number"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-300" />
            <p className="text-xs text-gray-400 mt-1">You'll get this in the UPI app or bank statement along with the payment confirmation. (12 digits).</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-gray-400 font-medium uppercase tracking-wider">PAN (for 80G)</label>
              <input value={form.pan} onChange={(e) => update("pan", e.target.value.toUpperCase())}
                placeholder="If applicable"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-300" />
            </div>
            <div>
              <label className="text-xs text-gray-400 font-medium uppercase tracking-wider">Payment Method</label>
              <select value={form.paymentMethod} onChange={(e) => update("paymentMethod", e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-300">
                <option>UPI</option>
                <option>Bank Transfer</option>
                <option>Cash</option>
                <option>Cheque</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-400 font-medium uppercase tracking-wider">Donation Date</label>
            <input type="date" value={form.date} onChange={(e) => update("date", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-300" />
          </div>

          {error && (
            <p className="text-red-600 text-sm bg-red-50 border border-red-100 rounded-xl p-3 leading-5">{error}</p>
          )}

          <button onClick={generateReceipt} disabled={generating}
            className="flex items-center justify-center gap-2 w-full bg-orange-600 text-white py-4 rounded-xl font-semibold hover:bg-orange-700 transition disabled:opacity-50">
            <Download size={18} />
            {generating ? "Generating..." : "Download Receipt (PDF)"}
          </button>
        </div>
          </>
        )}

        {step === "recurring" && (
          <div className="space-y-5">
            <div className="bg-green-50 border border-green-100 rounded-xl p-4 text-sm text-green-700">
              ✅ Your receipt has been downloaded successfully!
            </div>

            <p className="text-gray-600 leading-7">
              Would you like to make this a <strong>monthly recurring donation</strong> of{" "}
              <strong>₹{parseFloat(form.amount).toLocaleString("en-IN")}</strong> on day{" "}
              <strong>{Math.min(new Date(form.date).getDate(), 28)}</strong> of every month?
            </p>
            <p className="text-gray-500 text-sm leading-6">
              If you say <strong>Yes</strong>, we'll send you a friendly WhatsApp reminder{" "}
              <strong>3 days before</strong> your donation date each month. If you say{" "}
              <strong>No</strong>, we won't contact you about this again.
            </p>

            <div className="flex gap-3 pt-2">
              <button onClick={() => setupRecurring(true)} disabled={generating}
                className="flex-1 bg-orange-600 text-white py-4 rounded-xl font-semibold hover:bg-orange-700 transition disabled:opacity-50">
                {generating ? "Saving..." : "Yes, remind me monthly"}
              </button>
              <button onClick={() => setupRecurring(false)} disabled={generating}
                className="flex-1 border border-gray-200 py-4 rounded-xl font-semibold hover:bg-gray-50 transition">
                No, thanks
              </button>
            </div>
          </div>
        )}

        {step === "done" && (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✅</span>
            </div>
            <h4 className="text-lg font-bold">Thank you, {form.donorName}!</h4>
            <p className="text-gray-500 text-sm mt-2 leading-6">
              Your receipt has been downloaded.
              {form.transactionId && " Your contribution makes a real difference."}
            </p>
            <button onClick={onClose}
              className="mt-6 w-full bg-orange-600 text-white py-4 rounded-xl font-semibold hover:bg-orange-700 transition">
              Close
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}