import React from 'react';
import { CustomRouteProps } from '../helpers/types';
import { authMiddleware } from './authMiddleware';

const AppLayout = React.lazy(() => import('../layouts/AppLayout'));
const IndexLayout = React.lazy(() => import('../layouts/IndexLayout'));
const Home = React.lazy(() => import('../pages/Home/Home'));
const AvailableVehicles = React.lazy(() => import('../pages/AvailableVehicles/AvailableVehicles'));
const AuthLayout = React.lazy(() => import('../layouts/AuthLayout'));
const Login = React.lazy(() => import('../pages/AuthPages/Login'));
const ForgotPassword = React.lazy(() => import('../pages/AuthPages/ForgotPassword'));

export const Routes: CustomRouteProps[] = [
  {
    path: '/',
    component: AppLayout,
    loginRequired: false,
    children: [
      {
        path: '/',
        component: IndexLayout,
        loginRequired: false,
        /*     permissions: [Role.Customer], */

        children: [
          {
            path: '/',
            component: Home,
            loginRequired: false
            /*          permissions: [Role.Customer], */
          },
          {
            path: '/available-vehicles',
            component: AvailableVehicles,
            loginRequired: false
            /*          permissions: [Role.Customer], */
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: AuthLayout,
    loginRequired: false,
    children: [
      {
        path: '/login',
        component: Login,
        loginRequired: false
        /*     permissions: [Role.Customer], */

        /* children: [
               {
                  path: '/',
                  component: Home,
                  loginRequired: false,
              permissions: [Role.Customer], 
               },
               {
                  path: '/available-vehicles',
                  component: AvailableVehicles,
                  loginRequired: false,
              permissions: [Role.Customer], 
               },
            ], */
      },
      {
        path: '/forgot-password',
        component: ForgotPassword,
        loginRequired: false
        /*     permissions: [Role.Customer], */

        /* children: [
               {
                  path: '/',
                  component: Home,
                  loginRequired: false,
              permissions: [Role.Customer], 
               },
               {
                  path: '/available-vehicles',
                  component: AvailableVehicles,
                  loginRequired: false,
              permissions: [Role.Customer], 
               },
            ], */
      }
    ]
  }
];

export const protectedRoutes = authMiddleware(Routes);
