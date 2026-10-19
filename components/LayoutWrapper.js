import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex min-h-screen flex-col">
        <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-8 sm:py-12">
          <Link
            href="/"
            className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-100"
          >
            {siteMetadata.headerTitle}
          </Link>
          <nav className="flex items-center gap-5 text-sm text-gray-500 dark:text-gray-400">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:text-gray-900 dark:hover:text-gray-100"
              >
                {link.title.toLowerCase()}
              </Link>
            ))}
            <ThemeSwitch />
          </nav>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
