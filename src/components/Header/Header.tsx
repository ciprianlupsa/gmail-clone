import React from 'react';
import useHeaderStyle from './HeaderStyle';

import { Box, Divider, Grid, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import Search from './Search/Search';
import RightMenus from './RightMenus/RightMenus';

// rafce
export const Header: React.FC = () => {
  const classes = useHeaderStyle();

  return (
    <>
      <Grid container className={classes.main}>
        <Grid item xs={2}>
          <Box display="flex" justifyContent="start" alignItems="center">
            <IconButton>
              <MenuIcon />
            </IconButton>
            <img
              src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
              alt="Gmail Logo"
            />
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Search />
        </Grid>
        <Grid item xs={6}>
          <RightMenus />
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};
