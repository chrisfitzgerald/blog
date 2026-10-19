export default function PageTitle({ children }) {
  return (
    <h1 className="text-3xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
      {children}
    </h1>
  )
}
