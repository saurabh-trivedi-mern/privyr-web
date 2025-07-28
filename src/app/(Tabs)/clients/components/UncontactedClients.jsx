'use client'

import uncontactedClientsData from '../data/uncontactedClientsData.json'
import ClientsFilters from './ClientsFilters'
import ClientsPagination from './ClientsPagination'
import ClientsTable from './ClientsTable'

const ITEMS_PER_PAGE = 15

export default function UncontactedClients({ currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(uncontactedClientsData.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedClients = uncontactedClientsData.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'source', label: 'Source' },
    { key: 'details', label: 'Details' },
    { key: 'dateAdded', label: 'Date Added' }
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
