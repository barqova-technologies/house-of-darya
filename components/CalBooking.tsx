"use client";

import { useEffect } from "react";
import { site } from "@/lib/site";
import { ContactActions } from "@/components/ContactActions";

export function CalBooking({
  id = "home-atelier",
  notes,
}: {
  id?: string;
  notes?: string;
}) {
  const elementId = `cal-${id}`;

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

    const host = document.getElementById(elementId);
    if (host) host.innerHTML = "";

    Cal("init", id, { origin: "https://cal.com" });
    Cal.ns[id]("inline", {
      elementOrSelector: `#${elementId}`,
      calLink: site.calLink,
      config: {
        layout: "month_view",
        theme: "light",
        ...(notes ? { notes } : {}),
      },
    });
    Cal.ns[id]("ui", {
      theme: "light",
      hideEventTypeDetails: true,
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
  }, [id, elementId, notes]);

  if (!site.calLink) {
    return (
      <ContactActions
        message="Hello House of Darya, I would like to book a Home Atelier visit."
        subject="Home Atelier booking request"
        body={"Hello House of Darya,\n\nI would like to book a Home Atelier visit.\n\n"}
      />
    );
  }

  return <div id={elementId} className="min-h-[420px] w-full sm:min-h-[450px] lg:min-h-[480px]" />;
}
