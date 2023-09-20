import { Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Portfolio MT_Journey',
  description: 'Freelance Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/twl5efs.css"/>
      </head>
      <body className={"relative overflow-hidden"}>
          <Navbar />
          {children}
        </body>
    </html>
  )
}
