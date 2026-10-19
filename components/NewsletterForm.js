import { useRef, useState } from 'react'

import siteMetadata from '@/data/siteMetadata'

const NewsletterForm = ({ title = 'Subscribe to the newsletter' }) => {
  const inputEl = useRef(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = async (e) => {
    e.preventDefault()

    const res = await fetch(`/api/${siteMetadata.newsletter.provider}`, {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      setError(true)
      setMessage('That address is invalid or already subscribed.')
      return
    }

    inputEl.current.value = ''
    setError(false)
    setSubscribed(true)
    setMessage('Thanks, you are subscribed.')
  }

  return (
    <div>
      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</div>
      <form className="mt-2 flex items-end gap-4" onSubmit={subscribe}>
        <div className="w-full max-w-xs">
          <label className="sr-only" htmlFor="email-input">
            Email address
          </label>
          <input
            autoComplete="email"
            className="block w-full border-0 border-b border-gray-300 bg-transparent px-0 py-1.5 text-base text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:ring-0 dark:border-gray-700 dark:text-gray-100 dark:focus:border-gray-300"
            id="email-input"
            name="email"
            placeholder={subscribed ? "You're subscribed" : 'Email address'}
            ref={inputEl}
            required
            type="email"
            disabled={subscribed}
          />
        </div>
        <button
          className={`pb-1.5 text-sm text-gray-500 dark:text-gray-400 ${
            subscribed ? 'cursor-default' : 'hover:text-gray-900 dark:hover:text-gray-100'
          }`}
          type="submit"
          disabled={subscribed}
        >
          {subscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </form>
      {message && (
        <div
          role="status"
          className={`pt-2 text-sm ${
            error ? 'text-red-600 dark:text-red-400' : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          {message}
        </div>
      )}
    </div>
  )
}

export default NewsletterForm

export const BlogNewsletterForm = ({ title }) => (
  <div className="flex items-center justify-center">
    <div className="bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8">
      <NewsletterForm title={title} />
    </div>
  </div>
)
