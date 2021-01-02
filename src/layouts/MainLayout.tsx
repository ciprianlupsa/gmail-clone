import { Grid } from '@material-ui/core';
import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';

const MainLayout: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10}>
        <h1>Body</h1>
      </Grid>
    </Grid>
  );
};

export default MainLayout;
