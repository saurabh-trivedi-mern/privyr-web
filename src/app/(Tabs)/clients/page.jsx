'use client'

import { useState } from 'react'
import ClientsTabs from './components/ClientsTabs'
import FollowUpEmptyState from './components/FollowUpEmptyState'
import UncontactedClients from './components/UncontactedClients'
import AllClients from './components/AllClients'
import RecentlyViewedContent from './components/RecentlyViewedContent'

export default function ClientsPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center py-4 space-y-2 sm:space-y-0">
        <h1 className="text-2xl md:text-3xl font-bold">Clients</h1>
      </div>

      <ClientsTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="bg-white rounded-md shadow-sm p-4 md:p-6 space-y-6 min-h-[400px]">
        {activeTab === 2 ? (
          <FollowUpEmptyState />
        ) : activeTab === 3 ? (
          <RecentlyViewedContent />
        ) : activeTab === 1 ? (
          <UncontactedClients currentPage={currentPage} setCurrentPage={setCurrentPage} />
        ) : (
          <AllClients currentPage={currentPage} setCurrentPage={setCurrentPage} />
        )}
      </div>
    </div>
  )
}
