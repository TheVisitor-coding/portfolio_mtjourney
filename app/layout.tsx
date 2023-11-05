import { Navbar } from '@/components'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'Matteo ROSSI - Developer',
  description: 'Freelance Web Developer',
  image: '/logo_mtjourney.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/twl5efs.css" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" sizes='16x16' type='image/png' />
      </head>
      <body className={"overflow-auto overflow-x-hidden m-auto"}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
