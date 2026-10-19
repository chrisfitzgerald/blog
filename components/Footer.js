import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  const links = [
    { title: 'email', href: `mailto:${siteMetadata.email}` },
    { title: 'github', href: siteMetadata.github },
    { title: 'linkedin', href: siteMetadata.linkedin },
    { title: 'rss', href: '/feed.xml' },
  ].filter((link) => link.href)

  return (
    <footer className="mt-24 flex flex-wrap gap-x-5 gap-y-1 pb-10 text-sm text-gray-500 dark:text-gray-400">
      <span>{`© ${new Date().getFullYear()} ${siteMetadata.author}`}</span>
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className="hover:text-gray-900 dark:hover:text-gray-100"
        >
          {link.title}
        </Link>
      ))}
    </footer>
  )
}
