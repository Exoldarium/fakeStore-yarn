import { Metadata } from 'next';
import { getSingleProduct } from './page';

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const product = await getSingleProduct(params.id);

  return {
    title: `${product.title} | Yarnstore`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function SingleProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <div className="relative flex flex-col h-screen">
        <main className="container mx-auto max-w-7xl px-6 flex-grow">
          {children}
        </main>
        <footer className="w-full flex items-center justify-center py-3"></footer>
      </div>
    </>
  );
}