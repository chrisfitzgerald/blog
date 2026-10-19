const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Validates a newsletter subscribe request. Sends the error response itself
 * and returns null when invalid, otherwise returns the email address.
 */
export default function validateSubscribeRequest(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    res.status(405).json({ error: 'Method not allowed' })
    return null
  }

  const email = req.body && req.body.email
  if (typeof email !== 'string' || email.length > 254 || !EMAIL_REGEX.test(email)) {
    res.status(400).json({ error: 'A valid email is required' })
    return null
  }

  return email
}
