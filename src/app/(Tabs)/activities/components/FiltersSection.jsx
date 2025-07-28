'use client';

const filters = {
  activityType: [
    'Phone Calls',
    'Messages',
    'Meetings',
    'Notes',
    'Content: Messages',
    'Content: Files',
    'Content: Pages',
  ],
  teamMembers: ['Kunaal Naik', 'Anisha Gupta', 'Arpan Saxena'],
};

export default function FiltersSection() {
  return (
    <div className="bg-white rounded-xl p-4 shadow space-y-4">
      <h2 className="text-sm font-medium">Filters (0)</h2>

      <div>
        <h3 className="text-xs font-semibold text-gray-500 mb-2">BY ACTIVITY TYPE</h3>
        <div className="space-y-1 max-h-32 overflow-auto no-scrollbar">
          {filters.activityType.map((type, i) => (
            <label key={i} className="flex items-center text-sm gap-2">
              <input type="checkbox" className="form-checkbox" />
              {type}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold text-gray-500 mb-2">BY TEAM MEMBER</h3>
        <div className="space-y-1 max-h-32 overflow-auto no-scrollbar">
          {filters.teamMembers.map((member, i) => (
            <label key={i} className="flex items-center text-sm gap-2">
              <input type="checkbox" className="form-checkbox" />
              {member}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
