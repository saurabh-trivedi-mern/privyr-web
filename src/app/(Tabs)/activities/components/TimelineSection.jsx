'use client';

const activities = [
  {
    time: '03:13 PM',
    user: 'Rishav',
    title: 'sample page for testing',
    opened: 'Last opened 24 minutes ago',
    viewed: 'Viewed 2 times for 27s',
    by: 'Anisha Gupta',
  },
  {
    time: '03:14 PM',
    user: 'Rishav',
    title: 'Example - ACME Residences Brochure',
    opened: 'Last opened 27 minutes ago',
    viewed: 'Viewed 1 time for 52s',
    by: 'Anisha Gupta',
  },
];

export default function TimelineSection() {
  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <h2 className="text-lg font-semibold mb-4">Timeline</h2>

      <button className="text-sm text-sky-600 font-medium mb-4 flex items-center gap-1">
        ↑ LOAD PREVIOUS ACTIVITIES
      </button>

      <div className="text-sm text-gray-500 mb-2">JUL 22, 2025 - Today</div>

      {activities.map((act, i) => (
        <div key={i} className="mb-6 pl-4 border-l-2 border-blue-300 relative">
          <div className="absolute left-[-6px] top-0 bg-blue-600 w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] font-bold">
            {act.user[0]}
          </div>
          <div className="text-xs text-gray-500 mb-1">{act.time}</div>
          <div className="font-semibold">{act.user}</div>
          <div className="text-sm">{act.title}</div>
          <div className="text-xs text-sky-600">{act.opened}</div>
          <div className="text-xs text-sky-600">{act.viewed}</div>
          <div className="text-xs text-gray-500">by {act.by}</div>
        </div>
      ))}

      <div className="text-center text-xs text-gray-400 mt-4">
        End of timeline activities
      </div>
    </div>
  );
}
