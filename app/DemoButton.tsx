"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (opts: {
          url: string;
          color: string;
          label: string;
          target: HTMLElement;
        }) => void;
      };
    };
  }
}

export function DemoButton() {
  const ref = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current || !ref.current) return;
    loaded.current = true;

    const link = document.createElement("link");
    link.href = "https://calendar.google.com/calendar/scheduling-button-script.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;
    script.onload = () => {
      if (window.calendar && ref.current) {
        window.calendar.schedulingButton.load({
          url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3f9yb8AGHLQx1ulUJR4v0XfP6Lewtb8pj2zNiqK3uV4qz4gU4lK9iknrVDDhQVBobQB53aCF46?gv=true",
          color: "#C8A97E",
          label: "R\u00E9servez une d\u00E9mo",
          target: ref.current,
        });
      }
    };
    document.head.appendChild(script);
  }, []);

  return <div ref={ref} />;
}
