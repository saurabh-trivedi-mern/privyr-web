export default function HeaderComponent() {
  return (
    <div className="p-4 border-b flex flex-col lg:flex-row justify-between items-start lg:items-center bg-white">
      <div>
        <p className="text-sm text-gray-400">Clients {'>'} Mayank Mishra</p>
        <h1 className="text-2xl font-bold">Mayank Mishra</h1>
        <div className="mt-1 flex items-center gap-2 text-sm">
          <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">Assigned to You</span>
          <span className="bg-red-100 text-red-600 px-2 py-1 rounded">Follow Up Overdue - 11 Jun 2025</span>
        </div>
      </div>
      <div className="mt-3 lg:mt-0 flex gap-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send Quick Response</button>
        <button className="text-gray-700">Options ▾</button>
      </div>
    </div>
  );
}
