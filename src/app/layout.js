import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ 
  weight: ['400', '700'],
  subsets: ['latin']
 })

export const metadata = {
  title: 'A Very Small Space',
  description: 'a very small space landing page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
