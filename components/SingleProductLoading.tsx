'use client';

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Skeleton,
} from '@heroui/react';

export function SingleProductLoading() {
  return (
    <Card className="max-w-md w-full">
      <CardHeader className="flex flex-col items-start space-y-2">
        <Skeleton className="h-6 w-3/4 rounded-lg" />
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-center w-full h-60 bg-default-100 rounded-lg">
          <Skeleton className="h-full w-full rounded-lg" />
        </div>
        <div className="mt-4 space-y-2">
          <Skeleton className="h-4 w-full rounded-lg" />
          <Skeleton className="h-4 w-5/6 rounded-lg" />
        </div>
      </CardBody>
      <CardFooter className="flex justify-between items-center mt-2">
        <Skeleton className="h-6 w-1/4 rounded-lg" />
        <Skeleton className="h-10 w-24 rounded-lg" />
      </CardFooter>
    </Card>
  );
}
