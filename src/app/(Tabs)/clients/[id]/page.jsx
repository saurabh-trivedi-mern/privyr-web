'use client'

import HeaderComponent from './components/HeaderComponent';
import LeftPanel from './components/LeftPanel';
import MiddleChat from './components/MiddleChat';
import RightTimeline from './components/RightTimeline';

export default function SingleClientPage() {
  return (
    <div className="flex flex-col h-screen">
      <HeaderComponent />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-full lg:w-1/4 border-r overflow-y-auto no-scrollbar">
          <LeftPanel />
        </div>
        <div className="w-full lg:w-2/4 border-r flex flex-col">
          <MiddleChat />
        </div>
        <div className="w-full lg:w-1/4 overflow-y-auto no-scrollbar">
          <RightTimeline />
        </div>
      </div>
    </div>
  );
}
