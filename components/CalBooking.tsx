"use client";

import { useEffect } from "react";
import { site } from "@/lib/site";
import { EnquiryForm } from "@/components/EnquiryForm";

const interestOptions = [
  "Solitaire Rings",
  "Studs",
  "Rings & Studs",
  "A specific design I have seen",
  "Not sure yet, guide me",
];

export function CalBooking() {
  useEffect(() => {
    if (!site.calLink) return;
    /* eslint-disable */
    (function (C: any, A: string, L: string) {
      const p = (a: any, ar: any) => {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            const s = d.createElement("script");
            s.src = A;
            d.head.appendChild(s);
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    Cal("init", "home-atelier", { origin: "https://cal.com" });
    Cal.ns["home-atelier"]("inline", {
      elementOrSelector: "#cal-home-atelier",
      calLink: site.calLink,
      config: { layout: "month_view", theme: "light" },
    });
    Cal.ns["home-atelier"]("ui", {
      theme: "light",
      hideEventTypeDetails: false,
      layout: "month_view",
      cssVarsPerTheme: {
        light: {
          "cal-brand": "#361824",
          "cal-text-emphasis": "#2b1a1d",
          "cal-border-emphasis": "#361824",
        },
      },
    });
    /* eslint-enable */
  }, []);

  if (!site.calLink) {
    return <EnquiryForm type="home-atelier" interestOptions={interestOptions} />;
  }

  return (
    <div
      id="cal-home-atelier"
      className="min-h-[560px] w-full overflow-hidden"
      style={{ height: "100%" }}
    />
  );
}
