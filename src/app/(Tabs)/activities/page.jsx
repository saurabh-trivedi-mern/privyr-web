'use client';

import CalendarSection from './components/CalendarSection';
import FiltersSection from './components/FiltersSection';
import TimelineSection from './components/TimelineSection';

export default function ActivitiesPage() {
  return (
    <div className="flex min-h-screen max-w-[1024px] mx-auto bg-[#f4f5fa] px-4 py-6 gap-4">
      <div className="w-1/4 space-y-4">
        <CalendarSection />
        <FiltersSection />
      </div>
      <div className="w-3/4">
        <TimelineSection />
      </div>
    </div>
  );
}
