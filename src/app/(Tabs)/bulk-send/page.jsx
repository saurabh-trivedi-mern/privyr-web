'use client';

import LeftSidebar from './components/LeftSidebar';
import MiddleSection from './components/MiddleSection';
import RightSidebar from './components/RightSidebar';

export default function BulkSendPage() {
  return (
    <div className="sm:h-[92.5vh] pt-10 flex flex-col gap-8 sm:gap-0 lg:flex-row items-stretch justify-center p-4 overflow-hidden">
      <div className="w-full lg:min-w-[25%] h-full">
        <LeftSidebar />
      </div>

      <div className="w-full lg:min-w-[50%] h-full">
        <MiddleSection />
      </div>

      <div className="w-full lg:min-w-[25%] h-full">
        <RightSidebar />
      </div>
    </div>
  );
}
