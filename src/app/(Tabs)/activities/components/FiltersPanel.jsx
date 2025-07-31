import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  HiPhone,
  HiChatAlt,
  HiUserGroup,
  HiDocumentText,
  HiDocumentDuplicate,
  HiCollection,
  HiOutlineUser,
} from "react-icons/hi";

const activityTypes = [
  { label: "Phone Calls", icon: <HiPhone className="text-black w-4 h-4" /> },
  { label: "Messages", icon: <HiChatAlt className="text-black w-4 h-4" /> },
  { label: "Meetings", icon: <HiUserGroup className="text-black w-4 h-4" /> },
  { label: "Notes", icon: <HiDocumentText className="text-black w-4 h-4" /> },
  { label: "Content: Messages", icon: <HiChatAlt className="text-black w-4 h-4" /> },
  { label: "Content: Files", icon: <HiDocumentDuplicate className="text-black w-4 h-4" /> },
  { label: "Content: Pages", icon: <HiCollection className="text-black w-4 h-4" /> },
];

const teamMembers = [
  { name: "Kunaal Naik", icon: <HiOutlineUser className="text-black w-4 h-4" /> },
  { name: "Anisha Gupta", icon: <HiOutlineUser className="text-black w-4 h-4" /> },
  { name: "Arpan Saxena", icon: <HiOutlineUser className="text-black w-4 h-4" /> },
];

export default function FilterPanel() {
  return (
    <div className="min-w-[250px] w-full">
      {/* Filters Heading */}
      <h2 className="text-[20px] font-bold text-gray-900 mb-4">Filters (0)</h2>
 
      <Card className="p-0 gap-0 rounded-xs border-none">
        {/* Activity Type */}
        <div className="pb-4 border-b-1 border-gray-200">
          <h3 className="text-[12px] font-bold tracking-wide mb-3 uppercase p-4 pb-0">
            By Activity Type
          </h3>
          <div className="flex flex-col space-y-4 px-4">
            {activityTypes.map(({ label, icon }) => (
              <div
                key={label}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center space-x-2">
                  {icon}
                  <span className="font-normal">{label}</span>
                </div>
                <Checkbox id={label} className="border-gray-400 cursor-pointer" />
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div className="mt-0">
          <h3 className="text-[12px] font-bold tracking-wide mb-3 uppercase p-4 pb-0">
            By Team Member
          </h3>
          <div className="flex flex-col space-y-2 px-4 pb-4">
            {teamMembers.map(({ name, icon }) => (
              <div
                key={name}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center space-x-2">
                  {icon}
                  <span className="font-normal">{name}</span>
                </div>
                <Checkbox id={name} className="border-gray-400 cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
