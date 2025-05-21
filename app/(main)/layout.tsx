import { Metadata } from 'next';
import { NavBar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: {
    default: 'yarnstore',
    template: 'yarnstore',
  },
  description: 'a fake store',
  icons: {
    icon: '/favicon.ico',
  },
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