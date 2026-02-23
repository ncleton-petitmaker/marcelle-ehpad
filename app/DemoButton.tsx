"use client";

import { useCallback } from "react";

const SCHEDULE_URL = "https://calendar.app.google/HbjEiw8LgASC22mW9";

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
