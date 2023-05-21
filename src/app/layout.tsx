import './globals.css'
import { Inter } from 'next/font/google'
import { GlobalContextProvider } from './Context/token'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Webhook',
  description: 'Webhook designed for recieving payment callbacks.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  )
}
