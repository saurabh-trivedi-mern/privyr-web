"use client";
import { FiPhone, FiMail, FiMessageSquare } from "react-icons/fi";
import { BsWhatsapp, BsThreeDotsVertical } from "react-icons/bs";
import { MdKeyboardBackspace } from "react-icons/md";
import client from "../data/clientDetails.json";

export default function Details() {
  return (
    <div className="min-w-[409px] h-fit bg-white border rounded p-4 text-sm text-gray-700 relative">
      {/* Back Arrow */}
      <div className="absolute right-2 top-2 cursor-pointer">
        <MdKeyboardBackspace className="text-black text-lg" />
      </div>

      {/* DISPLAY NAME */}
      <div className="mt-5 mb-3 flex justify-between items-start">
        <div>
          <div className="text-xs font-bold">DISPLAY NAME</div>
          <div className="flex items-center text-[14px] font-normal gap-2">
            {client.name ? (
              client.name
            ) : (
              <div className="text-[#B4B6BB] text-[14px] font-normal">
                No Display Name
              </div>
            )}
          </div>
        </div>
        <BsThreeDotsVertical className="text-gray-500" />
      </div>

      {/* MOBILE NUMBER */}
      <div className="mb-3 flex justify-between items-start">
        <div>
          <div className="text-xs font-bold">MOBILE NUMBER</div>
          <div className="flex items-center text-[14px] font-normal  gap-2">
            {client.mobile}
          </div>
        </div>
        <FiPhone className="text-[#0db4b2] text-lg" />
      </div>

      {/* WHATSAPP */}
      <div className="mb-3 flex justify-between items-start">
        <div>
          <div className="text-xs font-bold">WHATSAPP NUMBER</div>
          <div className="flex items-center text-[14px] font-normal  gap-2">
            {client.whatsapp}
          </div>
        </div>
        <BsWhatsapp className="text-[#0db4b2] text-lg" />
      </div>

      {/* EMAIL */}
      <div className="mb-3 flex justify-between items-start">
        <div>
          <div className="text-xs font-bold">EMAIL ADDRESS</div>
          <div className="flex items-center text-[14px] font-normal gap-2">
            {client.email}
          </div>
        </div>
        <FiMail className="text-[#0db4b2] text-lg" />
      </div>

      {/* OPPORTUNITY SIZE */}
      <div className="mb-3 flex justify-between items-start">
        <div>
          <div className="text-xs font-bold">OPPORTUNITY SIZE</div>
          <div className="text-[#B4B6BB] text-[14px] font-normal">
            Click to enter a value...
          </div>
        </div>
        <BsThreeDotsVertical />
      </div>

      {/* LEAD STAGE */}
      <div className="mb-3 flex justify-between items-start">
        <div>
          <div className="text-xs font-bold">LEAD STAGE</div>
          <div className="text-[#B4B6BB] text-[14px] font-normal">
            Click to select a value...
          </div>
        </div>
        <BsThreeDotsVertical />
      </div>

      {/* GROUPS */}
      <div className="mb-3 flex justify-between items-start">
        <div>
          <div className="text-xs font-bold">GROUPS</div>
          <div className="text-[#B4B6BB] text-[14px] font-normal">
            Click to add groups
          </div>
        </div>
        <BsThreeDotsVertical />
      </div>

      {/* NOTES */}
      <div className="mt-6">
        <div className="text-[20px] font-bold mb-2 drop-shadow-md">Notes</div>
        <textarea
          className="w-full border rounded p-2 text-xs shadow-md placeholder:text-gray-400"
          rows="5"
          placeholder="Enter your notes here"
        />
      </div>
    </div>
  );
}




// "use client";
// import { FiPhone, FiMail } from "react-icons/fi";
// import { BsWhatsapp, BsThreeDotsVertical } from "react-icons/bs";
// import { MdKeyboardBackspace } from "react-icons/md";
// import client from "../data/clientDetails.json";

// export default function Details() {
//   return (
//     <div className="w-full">
//       {/* Heading outside the box */}
//       <h2 className="text-[20px] font-bold mb-3">Client Info</h2>

//       {/* Wrapper Box */}
//       <div className="min-w-[600px] w-full max-w-[1024px] bg-white border rounded p-4 text-sm text-gray-700 shadow-sm relative">

//         {/* Row Layout */}
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Left Column */}
//           <div className="flex-1 space-y-4">
//             <InfoRow
//               label="DISPLAY NAME"
//               value={client.name || "No Display Name"}
//               placeholder={!client.name}
//               icon={<BsThreeDotsVertical className="text-gray-500" />}
//             />

//             <InfoRow
//               label="MOBILE NUMBER"
//               value={client.mobile}
//               icon={<FiPhone className="text-[#0db4b2] text-lg" />}
//             />

//             <InfoRow
//               label="WHATSAPP NUMBER"
//               value={client.whatsapp}
//               icon={<BsWhatsapp className="text-[#0db4b2] text-lg" />}
//             />

//             <InfoRow
//               label="EMAIL ADDRESS"
//               value={client.email}
//               icon={<FiMail className="text-[#0db4b2] text-lg" />}
//             />

//             <InfoRow
//               label="OPPORTUNITY SIZE"
//               value="Click to enter a value..."
//               icon={<BsThreeDotsVertical className="text-gray-500" />}
//               placeholder
//             />

//             <InfoRow
//               label="LEAD STAGE"
//               value="Click to select a value..."
//               icon={<BsThreeDotsVertical className="text-gray-500" />}
//               placeholder
//             />
//           </div>

//           {/* Right Column */}
//           <div className="flex-1 space-y-6">
//             {/* Groups */}
//             <InfoRow
//               label="LEAD STAGE"
//               value="Click to select a value..."
//               icon={<BsThreeDotsVertical className="text-gray-500" />}
//               placeholder
//             />

//             {/* Notes (as plain text) */}
//             <div>
//               <div className="text-[12px] text-black font-bold mb-2 drop-shadow-md uppercase">
//                 Notes
//               </div>
//               <div className="text-sm text-black font-normal whitespace-pre-line">{client.notes}</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Note */}
//       <p className="text-xs text-[#3b82f6] mt-2">
//         You can set up{" "}
//         <a href="#" className="underline">
//           custom client fields
//         </a>{" "}
//         and{" "}
//         <a href="#" className="underline">
//           client groups
//         </a>{" "}
//         in your settings.
//       </p>
//     </div>
//   );
// }

// function InfoRow({ label, value, icon, placeholder = false }) {
//   return (
//     <div className="flex justify-between items-start">
//       <div>
//         <div className="text-xs text-black font-bold mb-0.5">{label}</div>
//         <div
//           className={`text-[14px] font-normal ${
//             placeholder ? "text-[#B4B6BB]" : "text-gray-800"
//           }`}
//         >
//           {value}
//         </div>
//       </div>
//       {icon && <div>{icon}</div>}
//     </div>
//   );
// }
