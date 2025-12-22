import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './client/index.html',
    './client/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',
        secondary: '#d97706',
        accent: '#0d9488',
        dark: '#111827',
        light: '#f9fafb',
      },
    },
  },
  plugins: [],
}

export default config
