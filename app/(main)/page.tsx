import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Products } from '@/components/Products';
import { notFound } from 'next/navigation';
import { toNormalizedProductEntry } from '@/utils/normalizeApiEntry';

// TODO:
// Zustand to manage cart state.
// React Query to load products and categories.
// HeroUI for checkout forms, product cards, modals.
// React Hook Form for search, checkout/registration.
// next-intl for multilingual product categories.

// TODO: pagination

export const revalidate = 3600;

export async function getAllProducts() {
  const res = await fetch('https://fakestoreapi.com/products');

  if (!res.ok)
    throw new Error('Something went wrong while fetching all products');

  const rawData = await res.json();

  if (Array.isArray(rawData) && rawData.length !== 0) {
    const normalizedProducts = rawData.map((data) =>
      toNormalizedProductEntry(data),
    );

    return normalizedProducts;
  } else {
    notFound();
  }
}

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-6">
      <div className="inline-block text-center justify-center py-10 px-20">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Products />
        </HydrationBoundary>
      </div>
    </section>
  );
}