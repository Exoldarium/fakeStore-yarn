'use client';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@heroui/react';
import { useQuery } from '@tanstack/react-query';
import { useCartStore } from '@/stores/cartStore';
import Image from 'next/image';
import { SingleProductLoading } from './SingleProductLoading';
import { getSingleProduct } from '@/app/(main)/products/[id]/page';

function SingleProduct({ id }: { id: string }) {
  const addItem = useCartStore((state) => state.addItem);

  const { data, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getSingleProduct(id),
  });

  if (isLoading) return <SingleProductLoading />;
  if (!data) return <p className="text-center text-red-500">Product not found.</p>;

  return (
    <Card className="w-full max-w-5xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex justify-center items-center bg-default-100 rounded-lg p-4">
          <Image
            alt={data.title}
            className="object-contain max-h-[400px] w-full"
            width={500}
            height={500}
            src={data.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <CardHeader className="p-0">
            <h1 className="text-2xl font-bold">{data.title}</h1>
          </CardHeader>

          <CardBody className="px-0 py-4">
            <p className="text-default-500 mb-6">{data.description}</p>
            <p className="text-xl font-semibold mb-4">
              ${data.price.toFixed(2)}
            </p>
          </CardBody>

          <CardFooter className="p-0">
            <Button
              color="primary"
              onMouseDown={() =>
                addItem({
                  id: data.id,
                  productName: data.title,
                  quantity: 1,
                  price: data.price,
                })
              }
            >
              Add to Cart
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}

export { SingleProduct };
