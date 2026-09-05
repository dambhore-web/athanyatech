"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      setStatus("error");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-brand-surface rounded-lg p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-display font-bold text-brand-dark text-xl mb-2">
          Message received!
        </h3>
        <p className="text-brand-slate">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot for spam */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="font-display text-sm font-semibold text-brand-dark block mb-1.5"
          >
            Full Name <span className="text-brand-gold">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-brand-surface bg-white rounded px-4 py-3 text-brand-dark placeholder:text-brand-slate focus:outline-none focus:border-brand-indigo transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="business"
            className="font-display text-sm font-semibold text-brand-dark block mb-1.5"
          >
            Business Name <span className="text-brand-gold">*</span>
          </label>
          <input
            id="business"
            name="business"
            type="text"
            required
            className="w-full border border-brand-surface bg-white rounded px-4 py-3 text-brand-dark placeholder:text-brand-slate focus:outline-none focus:border-brand-indigo transition-colors"
            placeholder="Your business name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="email"
            className="font-display text-sm font-semibold text-brand-dark block mb-1.5"
          >
            Email Address <span className="text-brand-gold">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-brand-surface bg-white rounded px-4 py-3 text-brand-dark placeholder:text-brand-slate focus:outline-none focus:border-brand-indigo transition-colors"
            placeholder="you@yourbusiness.com"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="font-display text-sm font-semibold text-brand-dark block mb-1.5"
          >
            Phone{" "}
            <span className="text-brand-slate font-normal">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full border border-brand-surface bg-white rounded px-4 py-3 text-brand-dark placeholder:text-brand-slate focus:outline-none focus:border-brand-indigo transition-colors"
            placeholder="+91 98765 43210"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-display text-sm font-semibold text-brand-dark block mb-1.5"
        >
          What are you trying to solve? <span className="text-brand-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          rows={5}
          className="w-full border border-brand-surface bg-white rounded px-4 py-3 text-brand-dark placeholder:text-brand-slate focus:outline-none focus:border-brand-indigo transition-colors resize-none"
          placeholder="Tell us about your business challenge. The more detail the better — there are no wrong answers here."
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm font-display font-semibold">
          Something went wrong. Please try again or email us directly at{" "}
          hello@athanyatechnologies.com.
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
