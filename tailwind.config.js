/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    boxShadow: {
      default:
        '0 2px 2px 0 rgba(0, 0, 0, 0.236), 0 0 2px 0 rgba(0, 0, 0, 0.236)',
    },
    extend: {
      colors: {
        purple: '#6c5ce7',
        'primary-light': '#EBE9F2',
        'primary-dark': '#321F80',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        0.25: '0.0625rem',
        0.5: '0.125rem',
        2.25: '0.625rem',
      },
    },
    inset: {
      2: '0.5rem',
      4.5: '1.125rem',
      7: '1.75rem',
    },
  },
  variants: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
