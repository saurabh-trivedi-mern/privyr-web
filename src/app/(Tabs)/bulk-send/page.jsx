'use client';

import LeftSidebar from './components/LeftSidebar';
import MiddleSection from './components/MiddleSection';
import RightSidebar from './components/RightSidebar';

export default function BulkSendPage() {
  return (
    <div className="h-[92.5vh] p-4 pt-10 flex items-center justify-center flex-row overflow-hidden">
      {/* Left Sidebar - 25% */}
      <div className="w-[25%] h-full">
        <LeftSidebar />
      </div>

      {/* Middle Section - 50% */}
      <div className="w-[50%] h-full">
        <MiddleSection />
      </div>

      {/* Right Sidebar - 25% */}
      <div className="min-w-[25%] h-full">
        <RightSidebar />
      </div>
    </div>
  );
}
