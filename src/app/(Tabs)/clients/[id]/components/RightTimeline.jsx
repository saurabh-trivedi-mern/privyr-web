export default function RightTimeline() {
  const timeline = [
    {
      date: 'Jun 9, 2025',
      time: '08:45 PM',
      type: 'Phone Call',
      by: 'Rishav Gupta'
    },
    {
      date: 'Jun 9, 2025',
      time: '08:15 PM',
      type: 'Phone Call',
      by: 'Rishav Gupta'
    },
    {
      date: 'Jan 9, 2025',
      time: '02:15 PM',
      type: 'Interest in Onboarding AI Agents',
      by: 'Rishav Gupta'
    },
    {
      date: 'Jan 9, 2025',
      time: '02:05 PM',
      type: 'First response logged in 1 day',
      by: ''
    }
  ];

  return (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-4">Timeline</h3>
      {timeline.map((item, idx) => (
        <div key={idx} className="mb-4 border-l pl-4 relative">
          <div className="absolute left-[-8px] top-1 w-3 h-3 bg-blue-500 rounded-full"></div>
          <p className="text-xs text-gray-500">{item.date} {item.time && `• ${item.time}`}</p>
          <p className="font-semibold">{item.type}</p>
          {item.by && <p className="text-sm text-gray-600">By {item.by}</p>}
        </div>
      ))}
    </div>
  );
}
