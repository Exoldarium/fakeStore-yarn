'use client';

import { notFound, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useCartStore } from '@/stores/cartStore';
import { getAllProducts } from '@/app/(main)/page';
import { Button, Card, CardBody, CardFooter, Link } from '@heroui/react';
import Image from 'next/image';

function Products() {
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);

  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });

  if (!data) return notFound();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {data.map((product) => (
        <Card
          key={product.id}
          isPressable
          as={Link}
          shadow="sm"
          onPress={() => {
            router.push(`products/${product.id.toString()}`);
          }}
        >
          <CardBody className="overflow-visible p-0 flex-none">
            <Image
              alt={product.title}
              className="w-full object-contain h-[180px]"
              width={500}
              height={500}
              src={product.image}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading='lazy'
            />

          </CardBody>
          <div className="flex flex-row">
            <CardFooter className="text-small justify-start items-start text-left flex flex-col">
              <p className="py-2 font-bold">{product.title}</p>
              <p className="text-default-500 py-2">
                ${product.price.toFixed(2)}
              </p>
            </CardFooter>
            <Button
              color="primary"
              type="button"
              className="self-center"
              onMouseDown={() =>
                addItem({
                  id: product.id,
                  quantity: 1,
                  productName: product.title,
                  price: product.price,
                })
              }
            >
              Add
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export { Products };