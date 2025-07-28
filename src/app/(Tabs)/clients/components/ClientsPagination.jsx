'use client'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center gap-2 bg-[#f6f6f6] w-fit mx-auto rounded-full">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`w-8 h-8 text-[16px] font-medium rounded-full cursor-pointer ${
            i + 1 === currentPage
              ? 'bg-[#EAF5FF] text-[var(--theme-color)]'
              : ' text-black'
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  )
}
