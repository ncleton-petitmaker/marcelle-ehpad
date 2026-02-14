"use client";

import { useCallback } from "react";

const SCHEDULE_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3f9yb8AGHLQx1ulUJR4v0XfP6Lewtb8pj2zNiqK3uV4qz4gU4lK9iknrVDDhQVBobQB53aCF46?gv=true";

export function DemoTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const openCalendar = useCallback(() => {
    const w = 600;
    const h = 700;
    const left = (screen.width - w) / 2;
    const top = (screen.height - h) / 2;
    window.open(
      SCHEDULE_URL,
      "gcal-demo",
      `width=${w},height=${h},left=${left},top=${top},scrollbars=yes`
    );
  }, []);

  return (
    <button onClick={openCalendar} className={className}>
      {children}
    </button>
  );
}
