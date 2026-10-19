import PostRow from '@/components/PostRow'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import PageTitle from '@/components/PageTitle'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <PageTitle>{title}</PageTitle>
      <input
        aria-label="Search posts"
        type="search"
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search posts"
        className="mt-8 block w-full border-0 border-b border-gray-300 bg-transparent px-0 py-2 text-base text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:ring-0 dark:border-gray-700 dark:text-gray-100 dark:focus:border-gray-300"
      />
      <ul className="mt-10 space-y-12">
        {!filteredBlogPosts.length && (
          <li className="text-gray-500 dark:text-gray-400">No posts match your search.</li>
        )}
        {displayPosts.map((post) => (
          <li key={post.slug}>
            <PostRow post={post} showSummary showTags />
          </li>
        ))}
      </ul>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
