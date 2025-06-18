import './globals.css';
import Navbar from '@/components/Navbar';
import PageShell from '@/components/PageShell';
import Analytics from '@/components/Analytics'; // ✅ Google Analytics or Plausible

// ✅ SEO and Social Metadata
export const metadata = {
  title: 'Deshan Asanka | Portfolio',
  description: 'My portfolio showcasing design and development projects.',
  metadataBase: new URL('https://asanka-info.netlify.app'), // ✅ Fixes metadataBase warning
  openGraph: {
    title: 'Deshan Asanka Portfolio',
    description: 'My design and development journey.',
    url: 'https://asanka-info.netlify.app',
    siteName: 'Deshan Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deshan Portfolio',
    description: 'View my latest work in dev and design.',
    images: ['/og-image.png'],
  },
  manifest: '/manifest.json', // ✅ PWA manifest
};

// ✅ Fixes themeColor warning
export const viewport = {
  themeColor: '#2563EB',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-[#FAFAFB] text-black">
        <Analytics /> {/* Optional: if Google Analytics/Plausible is added */}
        <Navbar />
        <main className="flex-grow">
          <PageShell>{children}</PageShell>
        </main>
      </body>
    </html>
  );
}
