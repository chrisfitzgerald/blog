const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './lib/**/*.js',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
        serif: ['"Newsreader Variable"', 'Georgia', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: colors.neutral,
        gray: colors.neutral,
      },
      typography: (theme) => {
        // One monochrome palette; `dark` swaps the values, not the structure
        const palette = (c) => ({
          css: {
            color: c.body,
            maxWidth: 'none',
            fontFamily: theme('fontFamily.serif').join(', '),
            fontSize: '1.1875rem',
            lineHeight: '1.75',
            a: {
              color: c.ink,
              fontWeight: '400',
              textDecoration: 'underline',
              textDecorationColor: c.rule,
              textUnderlineOffset: '3px',
              '&:hover': { textDecorationColor: c.ink },
              code: { color: c.ink },
            },
            'h1,h2,h3,h4,h5,h6': {
              fontFamily: theme('fontFamily.sans').join(', '),
              color: c.ink,
              letterSpacing: theme('letterSpacing.tight'),
              fontWeight: '600',
            },
            h1: { fontSize: '1.875rem' },
            h2: { fontSize: '1.5rem', marginTop: '2.5em' },
            h3: { fontSize: '1.25rem' },
            strong: { color: c.ink, fontWeight: '600' },
            pre: { backgroundColor: c.codeBg, color: c.body, fontSize: '0.875rem' },
            code: {
              color: c.ink,
              backgroundColor: c.codeBg,
              fontWeight: '400',
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            details: { backgroundColor: c.codeBg, padding: '2px 4px', borderRadius: '0.25rem' },
            hr: { borderColor: c.rule },
            'ol li::marker': { color: c.muted },
            'ul li::marker': { color: c.muted },
            blockquote: {
              color: c.body,
              fontStyle: 'normal',
              fontWeight: '400',
              borderLeftColor: c.rule,
              quotes: 'none',
            },
            figcaption: { color: c.muted },
            thead: { th: { color: c.ink }, borderBottomColor: c.rule },
            tbody: { tr: { borderBottomColor: c.rule } },
          },
        })
        return {
          DEFAULT: palette({
            ink: theme('colors.gray.900'),
            body: theme('colors.gray.800'),
            muted: theme('colors.gray.500'),
            rule: theme('colors.gray.300'),
            codeBg: theme('colors.gray.100'),
          }),
          dark: palette({
            ink: theme('colors.gray.100'),
            body: theme('colors.gray.300'),
            muted: theme('colors.gray.500'),
            rule: theme('colors.gray.600'),
            codeBg: theme('colors.gray.800'),
          }),
        }
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
