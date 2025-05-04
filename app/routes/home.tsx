import { useNavigate } from 'react-router';
import type { Route } from '../+types/root';
import { Welcome } from '../welcome/welcome';
import { useEffect } from 'react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Bienvenido a React Router' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/auth', { replace: true });
  }, []);

  return <main></main>;
}
