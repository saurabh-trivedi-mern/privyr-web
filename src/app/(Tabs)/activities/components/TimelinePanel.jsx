"use client";

import { MoreVertical, FileText, Eye, User } from "lucide-react";
import { FaRegPaperPlane } from "react-icons/fa";
import data from "../data/timelineData.json";

export default function TimelinePanel() {
  const today = new Date();
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const formattedDate = `${
    monthNames[today.getMonth()]
  } ${today.getDate()}, ${today.getFullYear()}`;

  return (
    <div className="max-w-[648px] h-fit">
      {/* Heading */}
      <div className="font-bold text-[20px] mb-2">Timeline</div>

      {/* Timeline Box */}
      <div className="bg-white p-4 border-0 rounded-xs shadow">
        {/* Load previous activities */}
        <div className="text-[14px] border-b border-gray-200 text-[#17A2B8] font-bold cursor-pointer pb-3 text-center">
          ▲ LOAD PREVIOUS ACTIVITIES
        </div>

        {/* Date block */}
        <div className="flex gap-3 text-[12px] py-4 relative">
          {/* Left column: Date + today + activities */}
          <div className="w-[80px] text-[12px] text-gray-800 font-bold leading-4">
            {formattedDate}
            <div className="text-[#006398] font-medium">Today</div>
            <div className="text-[#17A2B8] mt-1 font-normal cursor-pointer">
              {data.length} activities
            </div>
          </div>

          {/* Center vertical line */}
          <div className="absolute left-[188px] top-[48px] bottom-[48px] w-0.5 bg-gray-200 z-0" />

          {/* Right column: the full timeline list */}
          <div className="flex flex-col gap-4 flex-1 z-10">
            {data.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                {/* Time */}
                <div className="w-[64px] text-sm text-gray-500 mt-1 shrink-0">
                  {item.time}
                </div>

                {/* Icon (connected by external line) */}
                <div className="relative w-8 flex justify-center shrink-0 z-10">
                  <div className="w-8 h-8 rounded-full bg-[#7CBDFB] flex items-center justify-center text-white">
                    <FaRegPaperPlane className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-start">
                    <div className="font-semibold text-sm text-gray-800">
                      {item.user}
                    </div>
                    <MoreVertical className="w-4 h-4 text-gray-400 cursor-pointer" />
                  </div>
                  <div className="text-sm text-gray-700">{item.title}</div>

                  <div className="text-xs text-[#006398] flex items-center gap-1">
                    <FileText className="w-3 h-3" />
                    Last opened {item.lastOpened}
                  </div>
                  <div className="text-xs text-[#006398] flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    Viewed {item.views}
                  </div>
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    <User className="w-3 h-3" />
                    by {item.by}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* End of timeline */}
        <div className="text-center text-xs text-gray-400 border-t pt-4 mt-2">
          End of timeline activities
        </div>
      </div>
    </div>
  );
}
