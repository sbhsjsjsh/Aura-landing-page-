import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Aura Residences | Luxury Real Estate in India',
  description: 'Discover premium luxury living. Get exclusive early access and brochures for our upcoming flagship properties.',
  openGraph: {
    title: 'Aura Residences | Luxury Real Estate in India',
    description: 'Discover premium luxury living. Get exclusive early access and brochures for our upcoming flagship properties.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aura Residences | Luxury Real Estate in India',
    description: 'Discover premium luxury living. Get exclusive early access and brochures for our upcoming flagship properties.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased text-slate-900 bg-white" suppressHydrationWarning>{children}</body>
    </html>
  );
}
