import type { Config } from '@react-router/dev/config';

// Leer la base de datos de los clientes/productos

// Rutas de prueba con argumentos dinámicos
const testingArgsRoutes = [...Array(151)].map((_, i) => {
  const id = i + 1;
  const names = ['Juan', 'María', 'Pedro', 'Ana', 'Luis', 'Carmen', 'José', 'Isabel', 'Miguel', 'Rosa'];
  const name = names[Math.floor(Math.random() * names.length)];
  const age = Math.floor(Math.random() * 80) + 18;

  return `auth/testing-args/${id}/${name}/${age}`;
});

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  async prerender() {
    return [
      '/auth',
      '/auth/register',
      '/auth/testing',
      '/products/iphone-14',
      '/products/iphone-15',
      '/products/iphone-16',
      '/products/sansung-s5',
      '/products/sansung-s6',
      '/products/sansung-s7',
      '/products/macbook',
      '/products/macbook-pro',
      '/products/apple-books',
      '/products/apple-podcasts',

      ...testingArgsRoutes,
    ];
  },
} satisfies Config;
