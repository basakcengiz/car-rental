import { LazyExoticComponent, ComponentType } from 'react';
import { RouteProps } from 'react-router-dom';

export interface PropsType {
   setDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface LinkType {
   name: string;
   id: string;
}

export interface CityType {
   cityName: string;
   airportName?: string;
   secondaryAirportName?: string;
}

export interface CustomRouteProps extends Omit<RouteProps, 'component' | 'children'> {
   loginRequired: boolean;
   component: LazyExoticComponent<ComponentType<unknown>>;
   // unknown or any??
   path: RouteProps['path'];
   children?: CustomRouteProps[];
   permissions?: any[];
   //make any a Role
   /*   mark?: string; */
}
