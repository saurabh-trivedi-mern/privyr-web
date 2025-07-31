import CalendarPanel from "./components/CalendarPanel";
import FilterPanel from "./components/FiltersPanel";
import TimelinePanel from "./components/TimelinePanel";

export default function ActivityPage() {
  return (
    <div className="bg-[#f4f5fa] py-6 min-h-screen">
      <div className="max-w-[1024px] mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Activity Timeline</h1>
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10">
          {/* Left Sidebar */}
          <div className="space-y-6">
            <CalendarPanel />
            <FilterPanel />
          </div>

          {/* Timeline */}
          <TimelinePanel />
        </div>
      </div>
    </div>
  );
}
