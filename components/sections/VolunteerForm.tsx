"use client";

import { useState } from "react";

export default function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // TODO: connect to Supabase API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="volunteer-form" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-5">

        <div className="text-center">
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
            Join The Team
          </span>
          <h2 className="heading-font text-4xl font-bold text-center mt-6">
            Join As A Volunteer
          </h2>
        </div>

        <div className="mt-10 space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
          />

          <select className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-300 transition text-gray-700">
            <option value="">Select Role</option>
            <option>Medical Volunteer</option>
            <option>Counselor</option>
            <option>Support Runner</option>
            <option>Community Volunteer</option>
          </select>

          <textarea
            rows={5}
            placeholder="Why do you want to volunteer?"
            className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-300 transition resize-none"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-orange-600 text-white py-4 rounded-xl font-semibold hover:bg-orange-700 hover:scale-[1.02] transition-all duration-200 shadow-sm"
          >
            {submitted ? "✅ Application Submitted!" : "Submit Application"}
          </button>

        </div>
      </div>
    </section>
  );
}
