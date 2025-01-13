import { AuthPage, LogoutPage } from '@pages/auth';
import AdminMainPage from '@pages/dashboard/index';

import DataPage from '@pages/data/index';
import { Navigate } from 'react-router-dom';

const AppRoutes = {
   LOGIN: 'login',
   LOGOUT: 'logout',
   DASHBOARD: 'dashboard',
   SCHOOLS: 'schools',
   HIGHSCHOOLS: 'highschools',
   DATA: 'data',
   MAIN: 'main'
};

export const AppLayout = {
   adminLayout: 'adminLayout',
   centered: 'centered'
};

export const RoutePath = {
   [AppRoutes.MAIN]: '/',
   [AppRoutes.LOGIN]: '/login',
   [AppRoutes.LOGOUT]: '/logout',
   [AppRoutes.DASHBOARD]: '/dashboard',

   [AppRoutes.DATA]: '/data'
};

export const routeList = {
   [AppRoutes.MAIN]: {
      path: RoutePath[AppRoutes.MAIN],
      element: <Navigate to={RoutePath[AppRoutes.LOGIN]} />,
      layout: AppLayout.centered
   },

   [AppRoutes.DASHBOARD]: {
      path: RoutePath[AppRoutes.DASHBOARD],
      element: <AdminMainPage />,
      layout: AppLayout.adminLayout,
      authOnly: true
   },

   [AppRoutes.DATA]: {
      path: RoutePath[AppRoutes.DATA],
      element: <DataPage />,
      layout: AppLayout.adminLayout
   },

   [AppRoutes.LOGIN]: {
      path: RoutePath[AppRoutes.LOGIN],
      element: <AuthPage isLoginForm={true} />,
      layout: AppLayout.centered
   },
   [AppRoutes.LOGOUT]: {
      path: RoutePath[AppRoutes.LOGOUT],
      element: <LogoutPage />,
      layout: AppLayout.centered,
      authOnly: true
   }
};
