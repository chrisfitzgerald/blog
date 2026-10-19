import Link from '@/components/Link'
import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/formatDate'

// One entry in a post index: date and title, with optional summary and tags
export default function PostRow({ post, showSummary = false, showTags = false }) {
  const { slug, date, title, summary, tags } = post
  return (
    <article className="sm:flex sm:gap-8">
      <time
        dateTime={date}
        className="block shrink-0 text-sm tabular-nums leading-7 text-gray-500 dark:text-gray-400 sm:w-32"
      >
        {formatDate(date)}
      </time>
      <div>
        <h2 className="text-lg font-medium leading-7 tracking-tight">
          <Link
            href={`/blog/${slug}`}
            className="text-gray-900 hover:underline hover:decoration-gray-400 hover:underline-offset-4 dark:text-gray-100"
          >
            {title}
          </Link>
        </h2>
        {showSummary && summary && (
          <p className="mt-1 line-clamp-2 font-serif text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {summary}
          </p>
        )}
        {showTags && tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap">
            {tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
