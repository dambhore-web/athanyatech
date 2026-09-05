"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full border border-brand-line bg-brand-surface rounded px-4 py-3 text-brand-ink font-body placeholder:text-brand-ink-soft focus:outline-none focus:border-brand-blue transition-colors";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint) { setStatus("error"); return; }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-brand-sunken rounded-card border border-brand-line p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-display font-bold text-brand-navy text-xl mb-2">Message received!</h3>
        <p className="text-brand-ink-soft font-body">We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="font-body text-sm font-bold text-brand-ink-soft block mb-1.5">
            Full Name <span className="text-brand-blue">*</span>
          </label>
          <input id="name" name="name" type="text" required className={fieldClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="business" className="font-body text-sm font-bold text-brand-ink-soft block mb-1.5">
            Business Name <span className="text-brand-blue">*</span>
          </label>
          <input id="business" name="business" type="text" required className={fieldClass} placeholder="Your business name" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="font-body text-sm font-bold text-brand-ink-soft block mb-1.5">
            Email <span className="text-brand-blue">*</span>
          </label>
          <input id="email" name="email" type="email" required className={fieldClass} placeholder="you@yourbusiness.com" />
        </div>
        <div>
          <label htmlFor="phone" className="font-body text-sm font-bold text-brand-ink-soft block mb-1.5">
            Phone <span className="text-brand-ink-soft font-normal">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" className={fieldClass} placeholder="+91 98765 43210" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="font-body text-sm font-bold text-brand-ink-soft block mb-1.5">
          What are you trying to solve? <span className="text-brand-blue">*</span>
        </label>
        <textarea
          id="message" name="message" required minLength={20} rows={5}
          className={`${fieldClass} resize-none`}
          placeholder="Tell us about your business challenge. There are no wrong answers here."
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm font-body font-semibold">
          Something went wrong. Please try again or email hello@athanyatechnologies.com directly.
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
