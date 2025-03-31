import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Deshan Portfolio',
  description: 'Creative Portfolio by Deshan Asanka',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
