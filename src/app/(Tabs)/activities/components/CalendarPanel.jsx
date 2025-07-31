"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function CalendarPanel() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h2 className="font-bold text-[20px] mb-2">Calendar</h2>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="border-0 rounded-xs shadow"
      />
    </div>
  );
}
