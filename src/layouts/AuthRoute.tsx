import * as React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps, useLocation } from 'react-router';
import { selectUser } from '../app/slices/AuthSlice';

const AuthRoute: React.FC<RouteProps> = (props) => {
  const user = useSelector(selectUser);
  const location = useLocation();

  if (!user) {
    const RedirectComponent = () => (
      <Redirect
        to={{
          pathname: '/login',
          state: { previousUnauthorizedRoute: location },
        }}
      />
    );

    return (
      <Route {...props} component={RedirectComponent} render={undefined} />
    );
  } else {
    return <Route {...props} />;
  }
};

export default AuthRoute;
