// page.jsx
"use client";
import { useState } from "react";
import ContentTabs from "./components/ContentTabs";
import FileManager from "./components/FileManager";
import MessageManager from "./components/MessageManager";
import PagesManager from "./components/PagesManager";

export default function ContentPage() {
  const [activeTab, setActiveTab] = useState(0);

  // Tab-specific action handlers
  const [showFileModal, setShowFileModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [showPageModal, setShowPageModal] = useState(false);

  // Determine dynamic button label and handler based on tab
  const getActionProps = () => {
    switch (activeTab) {
      case 0:
        return { actionLabel: "New Message", onAction: () => setShowMessageModal(true) };
      case 1:
        return { actionLabel: "Upload Files", onAction: () => setShowFileModal(true) };
      case 2:
        return { actionLabel: "Create Page", onAction: () => setShowPageModal(true) };
      default:
        return {};
    }
  };

  const { actionLabel, onAction } = getActionProps();

  return (
    <div className="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center py-4 space-y-2 sm:space-y-0">
        <h1 className="text-2xl md:text-3xl font-bold">Content</h1>
      </div>

      {/* Pass dynamic action button to ContentTabs */}
      <ContentTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        actionLabel={actionLabel}
        onAction={onAction}
      />

      <div className="bg-white p-4 md:p-6 space-y-6 min-h-[400px]">
        {activeTab === 0 ? (
          <MessageManager showModal={showMessageModal} onCloseModal={() => setShowMessageModal(false)} />
        ) : activeTab === 1 ? (
          <FileManager showModal={showFileModal} onCloseModal={() => setShowFileModal(false)} />
        ) : (
          <PagesManager showModal={showPageModal} onCloseModal={() => setShowPageModal(false)} />
        )}
      </div>
    </div>
  );
}
