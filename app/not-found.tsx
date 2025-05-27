import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">404 – Not Found</h2>
        <p className="text-lg text-gray-600 mb-6">
          Sorry, we couldn’t find the page you were looking for.
        </p>
        <Link
          href="/"
          className="inline-block rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold shadow-md hover:bg-blue-700 transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}