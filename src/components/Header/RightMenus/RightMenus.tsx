import React from 'react';

import { selectUser } from '../../../app/slices/AuthSlice';
import { useSelector } from 'react-redux';

import { Avatar, Box, IconButton, Tooltip } from '@material-ui/core';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';

import useRightMenuStyle from './RightMenusStyle';

const RightMenus = () => {
  const user = useSelector(selectUser);

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

      {user && (
        <Tooltip title={`Logged in as ${user.displayName}`}>
          <Box p={1}>
            <Avatar
              className={classes.profile}
              alt="Cips Lupsa"
              src={user.photoURL ? user.photoURL : ''}
            />
          </Box>
        </Tooltip>
      )}
    </Box>
  );
};

export default RightMenus;
