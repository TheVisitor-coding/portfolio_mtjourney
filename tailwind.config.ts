import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "text-color": "var(--text-color)",
        "bg-color": "var(--bg-color)",
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
      },
      borderWidth: {
        1: '1px',
      },
      fontFamily: {
        'moby': 'var(--font-moby)',
        'kallisto': 'var(--font-kallisto)',
      },
    },
  },
  plugins: [],
}
export default config
