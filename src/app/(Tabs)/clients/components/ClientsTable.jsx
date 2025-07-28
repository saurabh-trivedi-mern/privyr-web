'use client'

export default function ClientsTable({ clients, columns }) {
  return (
    <>
      {/* Desktop Table View */}
      <div className="hidden sm:block overflow-auto rounded-md">
        <table className="min-w-full bg-white">
          <thead className="text-left text-[12px] font-normal uppercase text-[#696D77] border-b-2 border-gray-200">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="p-4">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm">
            {clients.map((client, i) => (
              <tr key={i} className="border-b border-gray-200 hover:bg-gray-50">
                {columns.map((col) => (
                  <td key={col.key} className="p-4 text-gray-800">
                    {renderCell(client, col.key)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Cards View */}
      <div className="sm:hidden space-y-4">
        {clients.map((client, i) => (
          <div
            key={i}
            className="bg-white rounded-md shadow-sm border border-gray-200 p-4 space-y-2"
          >
            <div className="text-lg font-semibold text-gray-800">{client.name}</div>

            {columns.map((col) => {
              if (col.key === 'name') return null
              return (
                <div key={col.key} className="text-sm text-gray-600">
                  <span className="font-medium">{col.label}:</span>{' '}
                  {renderCell(client, col.key)}
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </>
  )
}

/**
 * Handles custom cell rendering based on key.
 */
function renderCell(client, key) {
  if (key === 'details') {
    return (
      <div className="space-x-2">
        {client.tag && (
          <span className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded">
            {client.tag}
          </span>
        )}
        {client.details?.contactedBy && (
          <span className="bg-gray-700 text-white px-2 py-1 text-xs rounded">
            ↗ {client.details.contactedBy}
          </span>
        )}
        {client.details?.notes && (
          <span className="text-gray-500">{client.details.notes}</span>
        )}
        {client.source && (
          <span className="text-gray-500">{client.source}</span>
        )}
      </div>
    )
  }

  if (key === 'date') {
    return client.date || client.dateAdded || '—'
  }

  if (key === 'activity') {
    return client.activity || '—'
  }

  return client[key] || '—'
}
