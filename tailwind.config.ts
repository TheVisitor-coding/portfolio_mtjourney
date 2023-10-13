import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "text-color": "var(--text-color)",
        "bg-color": "var(--bg-color)",
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "darkpurple": "#372E8A",
        "cardbg": "#202022",
        "linkedin": "#004C74",
        "malt": "#C33632",
        "github": "#222222",
        "mail": "#A03933"
      },
      borderWidth: {
        1: '1px',
      },
      fontFamily: {
        'moby': 'var(--font-moby)',
        'kallisto': 'var(--font-kallisto)',
      },
      fontSize: {
        '7xl': '4.4rem',
        '9xl': '6.4rem',
        '10xl': '8.8rem',
      },
      backgroundImage: {
        'stars': "url('/Stars.png')",
      },
      boxShadow: {
        'card': "2px 2px 4px 0px rgba(0, 0, 0, 0.25)",
        'imgcard': "0px 4px 10px 0px rgba(0, 0, 0, 0.25)"
      },
    },
  },
  plugins: [],
}
export default config
