'use client';

import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function CalendarSection() {
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());

  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <h2 className="text-lg font-semibold mb-4">Activity Timeline</h2>
      <div className="flex items-center justify-between mb-2">
        <button><IoIosArrowBack /></button>
        <p className="font-semibold">July 2025</p>
        <button><IoIosArrowForward /></button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {['M','T','W','T','F','S','S'].map((d, i) => (
          <div key={i} className="text-gray-500">{d}</div>
        ))}
        {Array.from({ length: 31 }).map((_, i) => (
          <div
            key={i}
            className={`py-1 rounded-full ${
              i + 1 === selectedDate
                ? 'bg-blue-600 text-white'
                : 'hover:bg-gray-200 cursor-pointer'
            }`}
            onClick={() => setSelectedDate(i + 1)}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <button className="mt-4 text-sm text-blue-600 font-medium">TODAY</button>
    </div>
  );
}
