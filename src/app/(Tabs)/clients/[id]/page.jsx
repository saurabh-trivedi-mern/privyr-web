"use client";

import Header from "./components/Header";
import Details from "./components/Details";
import Chat from "./components/Chat";
import Timeline from "./components/Timeline";

export default function Page() {
  return (
    <div className="bg-[#f6f8fb] min-h-screen p-4">
      <Header />
      <div className="flex gap-4 mt-4">
        <Details />
        <Chat />
        <Timeline />
      </div>
    </div>
  );
}




// import Header from "./components/Header";
// import Timeline from "./components/Timeline";
// import Details from "./components/Details";

// export default function ClientPage({ params }) {
//   return (
//     <div className="max-w-[1024px] mx-auto py-6">
//       <Header />

//       {/* Main content area */}
//       <div className="mt-2 p-4 flex gap-6">
//         {/* Details fixed at 320px */}
//         <div className="w-[650px]">
//           <Details readOnly={true} />
//         </div>

//         {/* Timeline fills remaining space up to max 650px */}
//         <div className="flex-1 max-w-[300px]">
//           <Timeline />
//         </div>
//       </div>
//     </div>
//   );
// }
