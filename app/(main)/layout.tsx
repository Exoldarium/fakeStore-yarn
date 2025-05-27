import { Metadata } from 'next';
import { NavBar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: {
    default: 'All Products | Yarnstore',
    template: '%s | Yarnstore',
  },
  description:
    'Explore our full catalog of quality products at Yarnstore.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'All Products | Yarnstore',
    description:
      'Browse all available products in one place.',
    url: 'https://fakestoreapi.com/products',
    siteName: 'Yarnstore',
    images: [
      {
        url: '/og-products.png',
        width: 1200,
        height: 630,
        alt: 'Yarnstore Product Grid',
      },
    ],
    type: 'website',
  }
};

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <div className="relative flex flex-col h-screen">
        <NavBar />
        <main className="container mx-auto max-w-7xl px-6 flex-grow">
          {children}
        </main>
        <footer className="w-full flex items-center justify-center py-3"></footer>
      </div>
    </>
  );
}