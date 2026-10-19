import PageTitle from '@/components/PageTitle'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <PageTitle>About</PageTitle>
      <div className="mt-10 flex items-center gap-4">
        {avatar && (
          <Image
            src={avatar}
            alt="avatar"
            width="64px"
            height="64px"
            className="h-16 w-16 rounded-full"
          />
        )}
        <div>
          <h2 className="text-lg font-medium tracking-tight">{name}</h2>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {[occupation, company].filter(Boolean).join(', ')}
          </div>
        </div>
      </div>
      <div className="prose mt-10 max-w-none dark:prose-dark">{children}</div>
    </>
  )
}
