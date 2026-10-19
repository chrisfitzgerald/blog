import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import { BlogSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import formatDate from '@/lib/utils/formatDate'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/main/data/blog/${fileName}`

const quietLink = 'hover:text-gray-900 dark:hover:text-gray-100'

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, date, title, tags } = frontMatter

  return (
    <>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <article>
        <header>
          <time dateTime={date} className="text-sm text-gray-500 dark:text-gray-400">
            {formatDate(date)}
          </time>
          <div className="mt-2">
            <PageTitle>{title}</PageTitle>
          </div>
        </header>
        <div className="prose mt-12 max-w-none dark:prose-dark">{children}</div>
        <footer className="mt-16 space-y-8 border-t border-gray-200 pt-8 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          )}
          {(next || prev) && (
            <div className="flex justify-between gap-6">
              {prev ? (
                <Link href={`/blog/${prev.slug}`} className={quietLink}>
                  <span className="block">older</span>
                  <span className="text-gray-900 dark:text-gray-100">{prev.title}</span>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link href={`/blog/${next.slug}`} className={`text-right ${quietLink}`}>
                  <span className="block">newer</span>
                  <span className="text-gray-900 dark:text-gray-100">{next.title}</span>
                </Link>
              )}
            </div>
          )}
          <div className="flex gap-5">
            <Link href="/blog" className={quietLink}>
              all posts
            </Link>
            <Link href={editUrl(fileName)} className={quietLink}>
              view source
            </Link>
          </div>
        </footer>
        <Comments frontMatter={frontMatter} />
      </article>
    </>
  )
}
