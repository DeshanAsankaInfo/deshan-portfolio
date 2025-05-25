import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Deshan Asanka | Portfolio',
  description: 'My portfolio showcasing design and development projects.',
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
