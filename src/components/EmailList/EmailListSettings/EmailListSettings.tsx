import React from 'react';

import { Box, Checkbox, Divider } from '@material-ui/core';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import IconButtonTooltip from '../../IconButtonTooltip/IconButtonTooltip';
import EmailNavigation from '../../EmailNavigation/EmailNavigation';

const EmailListSettings = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        component="div"
        className="settings"
      >
        <Box>
          <Checkbox />

          <IconButtonTooltip size="small" tooltip="Select">
            <ArrowDropDownIcon />
          </IconButtonTooltip>
          <IconButtonTooltip size="small" tooltip="Refresh">
            <RedoIcon />
          </IconButtonTooltip>

          <IconButtonTooltip size="small" tooltip="More">
            <MoreVertIcon />
          </IconButtonTooltip>
        </Box>

        <EmailNavigation />
      </Box>
      <Divider />
    </>
  );
};

export default EmailListSettings;
