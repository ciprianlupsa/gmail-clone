import React from 'react';
import { useHistory, useLocation } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from '../app/slices/AuthSlice';

import { Box } from '@material-ui/core';

interface LoginProps {
  redirectPath?: string;
}

interface LocationStateType {
  previousUnauthorizedRoute: Location;
}

const Login: React.FC<LoginProps> = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const location = useLocation<LocationStateType>();
  const history = useHistory();

  React.useEffect(() => {
    if (!user) {
      dispatch(login());
    } else {
      if (location.state && location.state.previousUnauthorizedRoute) {
        console.log(
          'PREVIOUS LOCATION',
          location.state.previousUnauthorizedRoute
        );
        history.push(location.state.previousUnauthorizedRoute);
      }
      // ELSE User first visited the site from /login path, no previous route
    }
  }, [user]);

  return (
    <Box
      height={'100vh'}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <img
        style={{
          objectFit: 'contain',
          height: '200px',
        }}
        src="https://cdn.vox-cdn.com/thumbor/ttJ6TTVOWTTi2p3EaeeLfS4fUS8=/0x0:1320x880/1400x933/filters:focal(555x335:765x545):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/67587450/newgmaillogo.0.jpg"
        alt="Gmail Logo"
      />
    </Box>
  );
};

export default Login;
