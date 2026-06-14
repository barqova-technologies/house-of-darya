"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { submitEnquiryAction, type EnquiryFormState } from "@/app/actions";
import type { EnquiryType } from "@/lib/enquiry/types";

const initialState: EnquiryFormState = { status: "idle", message: "" };

const submitLabels: Record<EnquiryType, string> = {
  "home-atelier": "Book Home Atelier",
  consultation: "Request Consultation",
  contact: "Send Message",
  product: "Enquire About This Design",
};

export function EnquiryForm({
  type,
  context,
  interestOptions,
}: {
  type: EnquiryType;
  context?: string;
  interestOptions?: string[];
}) {
  const [state, formAction, pending] = useActionState(submitEnquiryAction, initialState);

  if (state.status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-gold/40 bg-card px-8 py-14 text-center"
      >
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <h3 className="display mt-6 text-2xl text-ink">With gratitude</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-mist">{state.message}</p>
      </motion.div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <input type="hidden" name="type" value={type} />
      {context && <input type="hidden" name="context" value={context} />}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor={`company-${type}`}>Company</label>
        <input id={`company-${type}`} type="text" name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor={`name-${type}`}>Full Name *</label>
          <input id={`name-${type}`} name="name" required minLength={2} className="field" placeholder="Your name" />
        </div>
        <div>
          <label className="field-label" htmlFor={`phone-${type}`}>Phone *</label>
          <input id={`phone-${type}`} name="phone" type="tel" required className="field" placeholder="+91" />
        </div>
      </div>
      <div className={type === "consultation" ? "grid gap-5 sm:grid-cols-2" : ""}>
        <div>
          <label className="field-label" htmlFor={`email-${type}`}>Email</label>
          <input id={`email-${type}`} name="email" type="email" className="field" placeholder="you@example.com" />
        </div>
        {type === "consultation" && (
          <div>
            <label className="field-label" htmlFor={`city-${type}`}>City</label>
            <input id={`city-${type}`} name="city" className="field" placeholder="Lucknow" />
          </div>
        )}
      </div>
      {type === "home-atelier" && (
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="field-label" htmlFor={`date-${type}`}>Preferred Date</label>
            <input id={`date-${type}`} name="preferredDate" type="date" className="field" />
          </div>
          <div>
            <label className="field-label" htmlFor={`time-${type}`}>Preferred Time</label>
            <select id={`time-${type}`} name="preferredTime" className="field" defaultValue="">
              <option value="">No preference</option>
              <option>Morning (10am – 1pm)</option>
              <option>Afternoon (1pm – 5pm)</option>
              <option>Evening (5pm – 8pm)</option>
            </select>
          </div>
        </div>
      )}
      {interestOptions && (
        <div>
          <label className="field-label" htmlFor={`interest-${type}`}>I am interested in</label>
          <select id={`interest-${type}`} name="interest" className="field" defaultValue="">
            <option value="">Please choose</option>
            {interestOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      )}
      <div>
        <label className="field-label" htmlFor={`message-${type}`}>
          {type === "contact" ? "Message *" : "Anything you would like us to know"}
        </label>
        <textarea
          id={`message-${type}`}
          name="message"
          rows={4}
          required={type === "contact"}
          className="field resize-none"
          placeholder={
            type === "home-atelier"
              ? "Tell us about the occasion, styles you love, or designs you have seen…"
              : "Share your thoughts…"
          }
        />
      </div>
      {state.status === "error" && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border border-red-400/30 bg-red-900/15 px-4 py-3 text-sm text-red-300"
        >
          {state.message}
        </motion.p>
      )}
      <button type="submit" disabled={pending} className="btn-gold w-full disabled:cursor-wait disabled:opacity-60">
        {pending ? (
          <span className="flex items-center gap-3">
            <span className="h-3.5 w-3.5 animate-spin rounded-full border border-current border-t-transparent" />
            Sending
          </span>
        ) : (
          submitLabels[type]
        )}
      </button>
      <p className="text-center text-xs leading-5 text-mist">
        Your details are used only to arrange your {type === "home-atelier" ? "visit" : "enquiry"} and
        are never shared.
      </p>
    </form>
  );
}
