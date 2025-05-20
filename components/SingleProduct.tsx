'use client';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from '@heroui/react';
import { useQuery } from '@tanstack/react-query';

import { SingleProductLoading } from './SingleProductLoading';

// import { getProducts } from '@/app/api/getProducts';
import { Product } from '@/types/product';
import { useCartStore } from '@/stores/cartStore';

interface Props {
  product: Product;
  routeId: string;
}

function SingleProduct({ product, routeId }: Props) {
  const addItem = useCartStore((state) => state.addItem);
  const { data, isLoading } = useQuery({
    queryKey: ['products', routeId],
    queryFn: () => getProducts.getSingleProduct(routeId),
    initialData: product,
  });

  if (isLoading) return <SingleProductLoading />;
  if (!data) return undefined;

  return (
    <Card className="w-full max-w-5xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex justify-center items-center bg-default-100 rounded-lg p-4">
          <Image
            isZoomed
            alt={data.title}
            src={data.image}
            className="object-contain max-h-[400px] w-full"
            radius="lg"
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