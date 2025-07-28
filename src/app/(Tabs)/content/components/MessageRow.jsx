export default function MessageRow({ message }) {
  return (
    <>
      {/* Desktop */}
    <div className="hidden md:grid grid-cols-12 gap-6 border-b-1 pb-4 border-gray-200 items-center text-sm text-gray-800">
        <div className="col-span-3 truncate font-medium">{message.title}</div>
        <div className="col-span-5 truncate text-[#282D36] font-normal">{message.preview}</div>
        <div className="col-span-2 text-gray-600">{message.sentCount || '-'}</div>
        <div className="col-span-2 text-gray-600">{message.lastSent || '-'}</div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col border border-gray-200 rounded-md p-4 text-sm space-y-1">
        <div className="font-medium">{message.title}</div>
        <div className="text-gray-600 text-sm">{message.preview}</div>
        <div className="text-xs text-gray-500">Sent: {message.sentCount || '-'}</div>
        <div className="text-xs text-gray-500">Last Sent: {message.lastSent || '-'}</div>
      </div>
    </>
  )
}
