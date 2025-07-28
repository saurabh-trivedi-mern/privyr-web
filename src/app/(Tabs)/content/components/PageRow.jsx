import { FaLock } from 'react-icons/fa'

export default function PageRow({ page }) {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:grid grid-cols-12 items-center text-sm pb-3 text-gray-800 border-b-1 border-gray-200">
        <div className="col-span-6 flex items-center gap-3">
          <img
            src={page.image}
            alt={page.title}
            className="w-10 h-10 rounded object-cover"
          />
          <div>
            <div className="font-medium">{page.title}</div>
            {page.private && (
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <FaLock className="text-[10px]" />
                Private Content
              </div>
            )}
          </div>
        </div>
        <div className="col-span-3 text-gray-600">{page.sharedCount || '-'}</div>
        <div className="col-span-3 text-gray-600">{page.lastShared || '-'}</div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col border border-gray-200 rounded-md p-4 text-sm space-y-2">
        <div className="flex items-center gap-3">
          <img src={page.image} alt={page.title} className="w-10 h-10 rounded object-cover" />
          <div className="font-medium">{page.title}</div>
        </div>
        {page.private && (
          <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
            <FaLock className="text-[10px]" />
            Private Content
          </div>
        )}
        <div className="text-xs text-gray-500">Shared: {page.sharedCount || '-'}</div>
        <div className="text-xs text-gray-500">Last Shared: {page.lastShared || '-'}</div>
      </div>
    </>
  )
}
