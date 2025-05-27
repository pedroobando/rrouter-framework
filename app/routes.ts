import { type RouteConfig, index, layout, prefix, route } from '@react-router/dev/routes';

export default [
  // Home
  index('routes/home.tsx'),
  // index('layouts/auth-layout.tsx'),

  //Auth

  ...prefix('/auth', [
    layout('layouts/auth-layout.tsx', [
      // ruta login
      // route('login', 'routes/auth/login-page.tsx'),
      index('routes/auth/login-page.tsx'),
      // ruta register
      route('register', 'routes/auth/register-page.tsx'),
      route('testing', 'routes/auth/testing-page.tsx'),
      route('testing-args/:id/:name/:age', 'routes/auth/testing-args-page.tsx'),
    ]),
  ]),

  ...prefix('/chat', [
    layout('layouts/chat-layout.tsx', [
      // INFO: ruta principal
      index('routes/chat/no-chat-select-page.tsx'),
      // INFO: Cuando se le indica un cliente
      route('client/:clientId', 'routes/chat/client-chat-page.tsx'),
    ]),
  ]),
] satisfies RouteConfig;
