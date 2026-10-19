import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import PostRow from '@/components/PostRow'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 8

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <h1 className="sr-only">Posts</h1>
      {!posts.length && <p className="text-gray-500 dark:text-gray-400">No posts yet.</p>}
      <ul className="space-y-8">
        {posts.slice(0, MAX_DISPLAY).map((post) => (
          <li key={post.slug}>
            <PostRow post={post} />
          </li>
        ))}
      </ul>
      {posts.length > MAX_DISPLAY && (
        <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
          <Link
            href="/blog"
            className="hover:text-gray-900 dark:hover:text-gray-100"
            aria-label="All posts"
          >
            all posts
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="mt-20">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
