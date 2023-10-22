import { Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Portfolio MT_Journey',
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
        {/* <link rel="preload" href="https://use.typekit.net/twl5efs.css" as='style' /> */}
      </head>
      <body className={"overflow-auto overflow-x-hidden m-auto"}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
