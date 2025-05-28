import { redirect } from 'react-router';
import type { Route } from '../+types/root';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Bienvenido a React Router' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export const loader = async ({ params }: Route.LoaderArgs) => {
  // console.log(`Params: ${JSON.stringify(params, null, 2)}`);
  return redirect('/auth');
};

export default function Home() {
  return <main></main>; // <Navigate to="/auth" replace />;
}
