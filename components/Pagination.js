import Link from '@/components/Link'

const linkClass = 'hover:text-gray-900 dark:hover:text-gray-100'
const disabledClass = 'opacity-40'

export default function Pagination({ totalPages, currentPage }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <nav
      aria-label="Pagination"
      className="flex justify-between pt-12 text-sm text-gray-500 dark:text-gray-400"
    >
      {prevPage ? (
        <Link
          href={currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`}
          rel="prev"
          className={linkClass}
        >
          newer
        </Link>
      ) : (
        <span className={disabledClass}>newer</span>
      )}
      <span>
        {currentPage} of {totalPages}
      </span>
      {nextPage ? (
        <Link href={`/blog/page/${currentPage + 1}`} rel="next" className={linkClass}>
          older
        </Link>
      ) : (
        <span className={disabledClass}>older</span>
      )}
    </nav>
  )
}
