import React, { ComponentType } from 'react';
import useMainLayoutStyle from './MainLayoutStyle';

import { Box, CssBaseline, Grid } from '@material-ui/core';

import { Header } from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

const MainLayout = <P extends {}>(
  Component: ComponentType<P>
): ComponentType<P> => {
  const classes = useMainLayoutStyle();

  return ({ ...props }) => {
    return (
      <Box>
        <CssBaseline />
        <Header />
        <Grid container className={classes.layoutBody}>
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={10}>
            <Box component="section" className={classes.layoutPage}>
              <Component {...(props as P)} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  };
};

export default MainLayout;
