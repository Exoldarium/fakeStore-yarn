'use client';

// import { Button, Card, CardBody, CardFooter, Image, Link } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import { ProductsLoading } from './ProductsLoading';

import { useCartStore } from '@/stores/cartStore';
import { getAllProducts } from '@/app/(main)/page';
import { Button, Card, CardBody, CardFooter, Image, Link } from '@heroui/react';


function Products() {
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);

  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });

  console.log(isLoading);

  if (isLoading) return <ProductsLoading />;
  if (!data) return undefined;

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
              isZoomed
              alt={product.title}
              className="w-full object-contain h-[180px]"
              radius="lg"
              shadow="sm"
              src={product.image}
              width="100%"
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