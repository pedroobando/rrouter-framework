import { sleep } from '~/lib/sleep';
import type { Route } from './+types/products-page';

export const loader = async ({ params }: Route.LoaderArgs) => {
  const { name } = params;
  await sleep(500);

  return {
    name: name.toUpperCase(),
  };
};

function ProductPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Detalle del Producto</h1>
      <hr className="my-4" />
      <p className="text-lg">
        Producto nombre: <span className="font-medium">{loaderData.name}</span>
      </p>
    </div>
  );
}

export default ProductPage;
