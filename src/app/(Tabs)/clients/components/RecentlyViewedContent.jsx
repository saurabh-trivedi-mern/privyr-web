'use client';

import ClientsFilters from './ClientsFilters';
import ClientsTable from './ClientsTable';
import recentlyViewedData from '../data/recentlyViewedData.json';

export default function RecentlyViewedContent() {
  const data = Array.isArray(recentlyViewedData) ? recentlyViewedData : [];

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'contactedBy', label: 'Company' },
    { key: 'notes', label: 'Viewed Item' },
    { key: 'activity', label: 'Last Viewed' },
  ];

  const transformed = data.map((item) => ({
    name: item.name ?? '—',
    contactedBy: item.company ?? 'N/A',
    notes: item.itemViewed ?? '—',
    activity: item.lastViewed ?? '—',
  }));

  return (
    <div className="space-y-4">
      <ClientsFilters />
      <div className="overflow-x-auto rounded-md">
        <ClientsTable clients={transformed} columns={columns} />
      </div>
    </div>
  );
}
