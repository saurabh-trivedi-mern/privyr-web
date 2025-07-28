'use client'

import mockClients from '../data/allClientsData.json'
import ClientsFilters from './ClientsFilters'
import ClientsPagination from './ClientsPagination'
import ClientsTable from './ClientsTable'

const ITEMS_PER_PAGE = 15

export default function AllClients({ currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(mockClients.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedClients = mockClients.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'details', label: 'Details' },
    { key: 'activity', label: 'Last Activity' },
    { key: 'date', label: 'Date Added' }
  ]

  return (
    <>
      <ClientsFilters />
      <div className="overflow-x-auto">
        <ClientsTable clients={paginatedClients} columns={columns} />
      </div>
      <ClientsPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  )
}
