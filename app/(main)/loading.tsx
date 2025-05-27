import { Card, CardBody, CardFooter, Skeleton } from '@heroui/react';

function ProductsLoading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i} shadow="sm" className="flex flex-col">
          <CardBody className="overflow-visible p-0 flex-none">
            <Skeleton className="rounded-lg w-full h-[180px]" />
          </CardBody>
          <div className="flex flex-row justify-between items-center px-4 py-2">
            <CardFooter className="text-small text-left flex flex-col gap-2 p-0">
              <Skeleton className="h-4 w-32 rounded-md" />
              <Skeleton className="h-4 w-20 rounded-md" />
            </CardFooter>
            <Skeleton className="h-9 w-16 rounded-md" />
          </div>
        </Card>
      ))}
    </div>
  );
}

export default ProductsLoading;