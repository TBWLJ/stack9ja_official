"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function AuditPage() {
  const [loading, setLoading] = useState(false);

  // Form state
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [challenge, setChallenge] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      await addDoc(collection(db, "audits"), {
        fullName,
        companyName,
        email,
        phone,
        challenge,
        createdAt: serverTimestamp(),
      });

      alert("Request received. We will contact you shortly.");

      // Reset form
      setFullName("");
      setCompanyName("");
      setEmail("");
      setPhone("");
      setChallenge("");
    } catch (error) {
      console.error("Firestore error:", error);
      alert("Failed to submit. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white">

        {/* HERO */}
        <section className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Your business is losing money —
            <br />
            you just can’t see where.
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            Get clarity, control, and visibility with a{" "}
            <span className="font-semibold text-white">
              Free Business System & Revenue Audit.
            </span>
          </p>
        </section>


        {/* VALUE */}
        <section className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-8">

          <div className="bg-slate-900 rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-semibold mb-4">
              We uncover
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>Operational bottlenecks</li>
              <li>Revenue & payment leaks</li>
              <li>Manual processes slowing growth</li>
              <li>Poor reporting & visibility</li>
              <li>Areas that should be automated</li>
            </ul>
          </div>


          <div className="bg-slate-900 rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-semibold mb-4">
              What you get
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>Professional diagnostic summary</li>
              <li>Clear improvement opportunities</li>
              <li>Strategy session with our team</li>
            </ul>

            <p className="mt-6 text-sm text-slate-400">
              Normally a paid consulting service. Free for selected organizations.
            </p>
          </div>

        </section>



        {/* FORM */}
        <section className="max-w-3xl mx-auto px-6 pb-24">

          <div className="bg-slate-900 p-8 md:p-10 rounded-2xl shadow-2xl">

            <h2 className="text-2xl font-semibold text-center">
              Book your free audit
            </h2>

            <p className="text-center text-slate-400 mt-2 mb-8">
              Limited audit slots available.
            </p>



            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Full Name */}
              <div>
                <label className="text-sm text-slate-400">
                  Full Name
                </label>

                <input
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-white"
                />
              </div>



              {/* Company Name */}
              <div>
                <label className="text-sm text-slate-400">
                  Company Name
                </label>

                <input
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-white"
                />
              </div>



              {/* Email */}
              <div>
                <label className="text-sm text-slate-400">
                  Work Email
                </label>

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-white"
                />
              </div>



              {/* Phone */}
              <div>
                <label className="text-sm text-slate-400">
                  Phone / WhatsApp
                </label>

                <input
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-white"
                />
              </div>



              {/* Challenge */}
              <div>
                <label className="text-sm text-slate-400">
                  Biggest operational challenge
                </label>

                <textarea
                  rows={4}
                  value={challenge}
                  onChange={(e) => setChallenge(e.target.value)}
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-white"
                />
              </div>



              {/* Submit */}
              <button
                disabled={loading}
                className="w-full py-4 rounded-lg bg-white text-black font-semibold hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Request Free Audit"}
              </button>

            </form>

          </div>

        </section>



        {/* FOOTER */}
        <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
          STACK9JA — We build revenue-focused systems for African businesses.
        </footer>


      </div>

      <Footer />
    </>
  );
}
