"use client";

import recentlyViewedData from "../data/recentlyViewedData.json";

export default function RecentlyViewedContent() {
  if (!Array.isArray(recentlyViewedData)) return null;

  return (
    <>
      {/* Desktop Table View */}
      <div className="hidden sm:block overflow-x-auto rounded-md">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead>
            <tr className="text-left text-sm font-semibold text-gray-500 uppercase">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Details</th>
              <th className="px-4 py-3">Viewed Item</th>
              <th className="px-4 py-3">Last Viewed</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-900 divide-y divide-gray-200">
            {recentlyViewedData
              .filter((item) => item && item.name)
              .map((item) => (
                <tr key={item.id ?? item.name}>
                  <td className="px-4 py-3 font-semibold">{item.name}</td>
                  <td className="px-4 py-3 flex items-center gap-2">
                    <span className="bg-blue-300 text-white p-2 rounded text-xs">
                      👤
                    </span>
                    <span className="bg-gray-800 text-white px-3 py-1 rounded text-xs">
                      {item.company ?? "N/A"}
                    </span>
                  </td>
                  <td className="px-4 py-3">{item.itemViewed ?? "—"}</td>
                  <td className="px-4 py-3">{item.lastViewed ?? "—"}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards View */}
      <div className="sm:hidden space-y-4">
        {recentlyViewedData
          .filter((item) => item && item.name)
          .map((item) => (
            <div
              key={item.id ?? item.name}
              className="bg-white rounded-md shadow-sm border border-gray-200 p-4 space-y-2"
            >
              <div className="text-lg font-semibold text-gray-800">
                {item.name}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm bg-blue-300 text-white px-2 py-1 rounded">
                  👤
                </span>
                <span className="text-sm bg-gray-800 text-white px-3 py-1 rounded">
                  {item.company ?? "N/A"}
                </span>
              </div>

              <div className="text-sm text-gray-600">
                <span className="font-medium">Viewed:</span>{" "}
                {item.itemViewed ?? "—"}
              </div>

              <div className="text-sm text-gray-600">
                <span className="font-medium">Last Viewed:</span>{" "}
                {item.lastViewed ?? "—"}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
