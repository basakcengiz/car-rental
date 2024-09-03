import React from 'react';

import { CustomRouteProps } from '../helpers/types';
import PrivateRoute from '../pages/PrivateRoute/PrivateRoute';

// Function to add authentication logic to routes
export const authMiddleware = (routes: CustomRouteProps[]): CustomRouteProps[] => {
   return routes.map((route) => {
      const Element = route.component; // Lazy component'i Element olarak atayın

      // Lazy load the component
      const LazyComponent = (
         <React.Suspense fallback={<div>Loading...</div>}>
            <Element />
         </React.Suspense>
      );

      // Check if authentication is required or specific permissions are needed
      if (route.loginRequired || (route.permissions && route.permissions.length > 0)) {
         route.element = (
            <PrivateRoute loginRequired={route.loginRequired} permissions={route.permissions}>
               {LazyComponent}
            </PrivateRoute>
         );
      } else {
         route.element = LazyComponent;
      }

      // If the route has children, process them recursively
      if (route.children) {
         route.children = authMiddleware(route.children);

         // Process child elements
         const childElements = route.children.map((child) => {
            const ChildElement = child.component;
            const ChildLazyComponent = (
               <React.Suspense key={child.path} fallback={<div>Loading...</div>}>
                  <ChildElement />
               </React.Suspense>
            );

            // Check authentication for child routes
            if (child.loginRequired || (child.permissions && child.permissions.length > 0)) {
               return (
                  <PrivateRoute key={child.path} loginRequired={child.loginRequired} permissions={child.permissions}>
                     {ChildLazyComponent}
                  </PrivateRoute>
               );
            } else {
               return ChildLazyComponent;
            }
         });

         // Embed child elements within the parent element
         route.element = (
            <React.Suspense key={route.path} fallback={<div>Loading...</div>}>
               <Element>{childElements}</Element>
            </React.Suspense>
         );
      }

      return route;
   });
};
