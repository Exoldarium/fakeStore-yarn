'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full text-center space-y-6 p-6 bg-white rounded-xl shadow-md border">
        <h2 className="text-2xl font-bold text-red-600">
          Something went wrong
        </h2>
        <p className="text-gray-600">
          An unexpected error occurred. Please try again or contact support if
          the issue persists.
        </p>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          onClick={() => reset()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}