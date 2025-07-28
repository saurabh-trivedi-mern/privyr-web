import { FaFilePdf, FaFilePowerpoint, FaFileWord } from 'react-icons/fa'

const getIcon = (type) => {
  switch (type) {
    case 'pdf':
      return <FaFilePdf className="text-red-600 text-lg" />
    case 'ppt':
      return <FaFilePowerpoint className="text-orange-500 text-lg" />
    case 'doc':
      return <FaFileWord className="text-blue-600 text-lg" />
    default:
      return <FaFilePdf className="text-gray-500 text-lg" />
  }
}

export default function FileCard({ file }) {
  return (
    <>
      {/* Desktop layout */}
      <div className="hidden md:grid grid-cols-12 items-center text-sm text-gray-800">
        <div className="col-span-6 flex items-center gap-2">
          {getIcon(file.type)}
          <span className="font-medium">{file.title}</span>
        </div>
        <div className="col-span-3 text-gray-600">{file.sharedCount}</div>
        <div className="col-span-3 text-gray-600">{file.lastShared}</div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex flex-col border border-gray-200 rounded-md p-4 text-sm">
        <div className="flex items-center gap-2 mb-2">
          {getIcon(file.type)}
          <span className="font-medium">{file.title}</span>
        </div>
        <div className="text-gray-600 text-xs">Shared: {file.sharedCount}</div>
        <div className="text-gray-600 text-xs">Last Shared: {file.lastShared}</div>
      </div>
    </>
  )
}
