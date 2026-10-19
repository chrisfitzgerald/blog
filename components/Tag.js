import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="mr-4 text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
    >
      {text.split(' ').join('-').toLowerCase()}
    </Link>
  )
}

export default Tag
