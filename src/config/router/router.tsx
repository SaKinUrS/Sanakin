import { createBrowserRouter } from 'react-router-dom';
import { AppRoutes } from './appRoutes';

export const router = createBrowserRouter([
  {
    index: true,
    path: AppRoutes.Home,
  },
]);
