import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../constants';


type PrivateRouteProps = {
    authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
    children: JSX.Element;
    appRoute: typeof AppRoute[keyof typeof AppRoute];
  }

function PrivateRoute({authorizationStatus, children, appRoute}: PrivateRouteProps): JSX.Element {
  if(appRoute === AppRoute.Login){
    return authorizationStatus === AuthorizationStatus.Auth
      ? <Navigate to={AppRoute.Root} />
      : children;
  }
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />);
}

export { PrivateRoute};

