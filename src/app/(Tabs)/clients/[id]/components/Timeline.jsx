"use client";
import timelineData from "../data/timelineData.json";
import { FiMoreVertical } from "react-icons/fi";
import { FaRegPaperPlane, FaUserCheck } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsFillPersonFill, BsClockFill } from "react-icons/bs";

const getIconDetails = (title) => {
  if (title.includes("Phone Call")) {
    return {
      icon: <BiSolidPhoneCall size={16} />,
      bg: "bg-[#A291FD]",
      color: "text-white",
    };
  } else if (title.includes("Thank you") || title.includes("interest")) {
    return {
      icon: <FaRegPaperPlane size={16} />,
      bg: "bg-[#7CBDFB]",
      color: "text-white",
    };
  } else if (title.includes("First response")) {
    return {
      icon: <BsClockFill size={16} />,
      bg: "bg-[#696D77]",
      color: "text-white",
    };
  } else if (title.includes("Assigned")) {
    return {
      icon: <FaUserCheck size={16} />,
      bg: "bg-[#696D77]",
      color: "text-white",
    };
  } else if (title.includes("Client added")) {
    return {
      icon: <BsFillPersonFill size={16} />,
      bg: "bg-[#696D77]",
      color: "text-white",
    };
  } else {
    return {
      icon: <BsClockFill size={16} />,
      bg: "bg-gray-200",
      color: "text-gray-700",
    };
  }
};

export default function Timeline() {
  return (
    <div className="w-full">
      {/* Heading outside the box */}
      <h2 className="text-[20px] font-bold mb-3">Timeline</h2>

      {/* Timeline Card */}
      <div className="min-w-[318px] bg-white border rounded p-4 text-sm">
        <div className="text-sm text-[#006398] font-semibold mb-3 cursor-pointer flex items-center gap-1">
          <div className="w-5 h-5 rounded-full border border-[#006398] flex items-center justify-center text-[#006398] text-sm">
            +
          </div>
          Add Activity
        </div>

        <div className="space-y-6 relative">
          {/* Vertical Line */}
          <div className="absolute top-0 left-4 bottom-0 w-[2px] bg-gray-200 z-0" />

          {timelineData.map((item, idx) => {
            const { icon, bg, color } = getIconDetails(item.title);

            return (
              <div key={idx} className="flex items-start gap-3 relative z-10">
                {/* Icon */}
                <div
                  className={`w-8 h-8 rounded-full ${bg} ${color} flex items-center justify-center`}
                >
                  {icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="text-[12px] font-medium">
                    {item.date} <span className="ml-1">{item.time}</span>
                  </div>
                  <div className="text-[14px] font-medium leading-snug">
                    {item.title}
                  </div>
                  {item.note && (
                    <div className="text-[12px] font-normal text-[#696D77] mt-0.5">
                      {item.note}
                    </div>
                  )}
                  {item.by && (
                    <div className="text-[12px] font-normal text-[#696D77] mt-1">
                      by {item.by}
                    </div>
                  )}
                </div>

                {/* More icon */}
                <FiMoreVertical className="text-xl cursor-pointer mt-1" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
