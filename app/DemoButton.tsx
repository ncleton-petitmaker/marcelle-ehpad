"use client";

import { useEffect, useRef, useCallback } from "react";

const SCHEDULE_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3f9yb8AGHLQx1ulUJR4v0XfP6Lewtb8pj2zNiqK3uV4qz4gU4lK9iknrVDDhQVBobQB53aCF46?gv=true";

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
    __gcalReady?: boolean;
  }
}

/**
 * Hidden Google Calendar button loader.
 * Renders once (invisible), all DemoTrigger buttons click it.
 */
export function DemoButtonLoader() {
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
          url: SCHEDULE_URL,
          color: "#C8A97E",
          label: "R\u00E9servez une d\u00E9mo",
          target: ref.current,
        });
        window.__gcalReady = true;
      }
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div
      ref={ref}
      id="gcal-hidden"
      style={{ position: "fixed", bottom: -200, left: -200, opacity: 0, pointerEvents: "none" }}
    />
  );
}

/**
 * Custom button that triggers the hidden Google Calendar popup.
 */
export function DemoTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const openCalendar = useCallback(() => {
    const hidden = document.querySelector("#gcal-hidden button") as HTMLElement | null;
    if (hidden) {
      hidden.click();
    }
  }, []);

  return (
    <button onClick={openCalendar} className={className}>
      {children}
    </button>
  );
}
