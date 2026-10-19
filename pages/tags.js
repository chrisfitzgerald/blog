import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import PageTitle from '@/components/PageTitle'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'

export async function getStaticProps() {
  const tags = await getAllTags('blog')

  return { props: { tags } }
}

export default function Tags({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />
      <PageTitle>Tags</PageTitle>
      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
        {sortedTags.length === 0 && <li className="text-gray-500">No tags yet.</li>}
        {sortedTags.map((t) => (
          <li key={t}>
            <Link
              href={`/tags/${kebabCase(t)}`}
              className="text-gray-900 hover:underline hover:decoration-gray-400 hover:underline-offset-4 dark:text-gray-100"
            >
              {t.split(' ').join('-').toLowerCase()}
            </Link>
            <span className="ml-1 text-sm tabular-nums text-gray-500 dark:text-gray-400">
              {tags[t]}
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}
