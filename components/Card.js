import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div>
    {imgSrc &&
      (href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          <Image alt={title} src={imgSrc} className="mb-4 w-full" width={544} height={306} />
        </Link>
      ) : (
        <Image alt={title} src={imgSrc} className="mb-4 w-full" width={544} height={306} />
      ))}
    <h2 className="text-lg font-medium tracking-tight text-gray-900 dark:text-gray-100">
      {href ? (
        <Link
          href={href}
          className="hover:underline hover:decoration-gray-400 hover:underline-offset-4"
        >
          {title}
        </Link>
      ) : (
        title
      )}
    </h2>
    <p className="mt-1 font-serif text-base leading-relaxed text-gray-500 dark:text-gray-400">
      {description}
    </p>
  </div>
)

export default Card
