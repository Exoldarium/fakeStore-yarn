import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Login | Yarnstore',
    template: '%s | Yarnstore',
  },
  description: 'Log in to access your yarnstore account and manage your purchases, profile, and preferences.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Login | Yarnstore',
    description: 'Securely log in to your yarnstore account.',
    url: 'https://fakestoreapi.com/login',
    type: 'website',
  },
};


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
        {children}
      </div>
    </main>
  );
}