import { useSelector } from 'react-redux';
import { getUserAuthData } from '@entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from '@shared/config/routes';
import { useMemo } from 'react';

export function RequireAuth({ children, permission }) {
   const auth = useSelector(getUserAuthData);
   const isUserAuthorized = !!auth?.id;

   const location = useLocation();

   return children;
}
