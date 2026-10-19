import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import PageTitle from '@/components/PageTitle'
import siteMetadata from '@/data/siteMetadata'

export default function FourZeroFour() {
  return (
    <>
      <PageSEO title={`Page Not Found - ${siteMetadata.title}`} />
      <PageTitle>Page not found</PageTitle>
      <p className="mt-4 font-serif text-lg text-gray-600 dark:text-gray-400">
        This page doesn&apos;t exist or has moved.{' '}
        <Link href="/" className="text-gray-900 underline underline-offset-4 dark:text-gray-100">
          Go to the home page
        </Link>
        .
      </p>
    </>
  )
}
