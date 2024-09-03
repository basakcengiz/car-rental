interface IPrivateRouteProps {
   children: React.ReactNode;
   permissions?: any[];
   loginRequired?: boolean;
}

const PrivateRoute: React.FunctionComponent<IPrivateRouteProps> = (props) => {
   return <div>PrivateRoute</div>;
};

export default PrivateRoute;
