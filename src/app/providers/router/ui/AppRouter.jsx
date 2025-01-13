import { memo, Suspense, useCallback, useLayoutEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@entities/User';
import { AdminLayout, CenteredLayout } from '@widgets/Layout';
import { PageLoader } from '@widgets/PageLoader';
import { routeList, AppLayout } from '@shared/config/routes';
import { useLocation } from 'react-router-dom';
import { RequireAuth } from './RequireAuth';
import { Navigate } from 'react-router-dom';

const AppRouter = () => {
   const auth = useSelector(getUserAuthData);
   const { pathname } = useLocation();

   const isUserAuthorized = !!auth?.id;

   useLayoutEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   }, [pathname]);

   const renderWithWrapper = useCallback(
      (route) => {
         let element = <>{route.element}</>;

         if (route.layout === AppLayout.adminLayout) {
            element = <AdminLayout>{route.element}</AdminLayout>;
         }

         if (route.layout === AppLayout.centered) {
            element = <CenteredLayout>{route.element}</CenteredLayout>;
         }

         return (
            <Route
               element={
                  route.authOnly && !isUserAuthorized ? (
                     <Navigate to="/login" replace />
                  ) : (
                     element
                  )
               }
               exact={!!route.exact}
               key={route.path}
               path={route.path}
            />
         );
      },
      [auth]
   );

   return (
      <Suspense fallback={<PageLoader />}>
         <Routes>{Object.values(routeList).map(renderWithWrapper)}</Routes>
      </Suspense>
   );
};

export default memo(AppRouter);
