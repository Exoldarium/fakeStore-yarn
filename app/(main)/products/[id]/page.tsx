import { SingleProduct } from '@/components/SingleProduct';
import { toNormalizedProductEntry } from '@/utils/normalizeApiEntry';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { notFound } from 'next/navigation';

export const revalidate = 60;

export async function getSingleProduct(params: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${params}`);

  if (!res.ok)
    throw new Error('Something went wrong while fetching a single product');

  const rawData = await res.json();

  const normalizedProducts = toNormalizedProductEntry(rawData);

  if (!normalizedProducts) {
    notFound();
  }

  return normalizedProducts;
}

async function Product(props: { params: Promise<{ id: string }> }) {
  const queryClient = new QueryClient();

  const { id } = await props.params;

  await queryClient.prefetchQuery({
    queryKey: ['product', id],
    queryFn: () => getSingleProduct(id),
  });

  return (
    <div className="flex items-center justify-start p-20">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SingleProduct id={id} />
      </HydrationBoundary>
    </div>
  );
}

export default Product;
