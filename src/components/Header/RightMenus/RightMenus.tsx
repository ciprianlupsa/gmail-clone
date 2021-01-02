import { Avatar, Box, IconButton, Tooltip } from '@material-ui/core';
import React from 'react';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';

import useRightMenuStyle from './RightMenusStyle';

const RightMenus = () => {
  const classes = useRightMenuStyle();
  return (
    <Box display="flex" alignItems="flex-end" justifyContent="flex-end">
      <Tooltip title="Support">
        <IconButton>
          <HelpOutlineOutlinedIcon></HelpOutlineOutlinedIcon>
        </IconButton>
      </Tooltip>
      <Tooltip title="Settings">
        <IconButton>
          <SettingsOutlinedIcon></SettingsOutlinedIcon>
        </IconButton>
      </Tooltip>
      <Tooltip title="Google apps">
        <IconButton>
          <AppsOutlinedIcon></AppsOutlinedIcon>
        </IconButton>
      </Tooltip>

      <Tooltip title="Your account">
        <Box p={1}>
          <Avatar
            className={classes.profile}
            alt="Cips Lupsa"
            src="https://lh3.googleusercontent.com/ogw/ADGmqu8t0pvzmLPFJVkPIultC1cenjRbpyKxGaOs_0e2zw=s32-c-mo"
          />
        </Box>
      </Tooltip>
    </Box>
  );
};

export default RightMenus;
