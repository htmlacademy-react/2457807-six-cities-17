import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../constans';


type PrivateRouteProps = {
    authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
    children: JSX.Element;
  }

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

function NoPrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.NoAuth
      ? children
      : <Navigate to={AppRoute.Root} />
  );
}

export { PrivateRoute, NoPrivateRoute };
