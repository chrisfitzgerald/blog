import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import PageTitle from '@/components/PageTitle'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <PageTitle>Projects</PageTitle>
      <ul className="mt-10 space-y-12">
        {projectsData.map((d) => (
          <li key={d.title}>
            <Card title={d.title} description={d.description} imgSrc={d.imgSrc} href={d.href} />
          </li>
        ))}
      </ul>
    </>
  )
}
