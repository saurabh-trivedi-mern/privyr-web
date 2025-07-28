import { FaRegCalendarAlt } from 'react-icons/fa';

export default function FollowUpEmptyState() {
  return (
    <div className="bg-white border rounded-md">
      {/* Header Bar */}
      <div className="flex items-center justify-between bg-blue-100 px-4 py-2 rounded-t-md">
        <div className="flex items-center gap-2 text-sm font-medium text-blue-700">
          <FaRegCalendarAlt />
          <span>Due Today</span>
          <span className="text-blue-500">0</span>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium">
          <div className="bg-white px-2 py-1 rounded shadow text-gray-700 flex items-center gap-1">
            <FaRegCalendarAlt />
            <span>1</span>
          </div>
          <div className="bg-white px-2 py-1 rounded shadow text-red-600 flex items-center gap-1">
            <FaRegCalendarAlt className="text-red-600" />
            <span>30</span>
          </div>
          <div className="bg-white px-2 py-1 rounded shadow text-gray-700 flex items-center gap-1">
            <FaRegCalendarAlt />
            <span>0</span>
          </div>
        </div>
      </div>

      {/* Table Headers */}
      <div className="grid grid-cols-3 text-xs font-semibold text-gray-500 uppercase px-6 py-3 border-b border-gray-200">
        <div>Follow Up</div>
        <div>Name</div>
        <div>Details</div>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center py-16 text-center text-gray-500">
        <FaRegCalendarAlt className="text-3xl mb-2" />
        <p className="font-semibold text-sm">No follow ups due today</p>
        <p className="text-xs mt-1 max-w-xs">
          Set follow ups to plan what’s next for each client – have coffee, schedule a meeting, or anything else to keep things going.
        </p>
      </div>
    </div>
  );
}
