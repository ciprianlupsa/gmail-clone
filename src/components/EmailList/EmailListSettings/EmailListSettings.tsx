import React from 'react';

import { Box, Checkbox } from '@material-ui/core';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ChevronLeft, ChevronRight, KeyboardHide } from '@material-ui/icons';
import IconButtonTooltip from '../../IconButtonTooltip/IconButtonTooltip';

const EmailListSettings = () => {
  return (
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

      <Box>
        <IconButtonTooltip size="small" tooltip="Older">
          <ChevronLeft />
        </IconButtonTooltip>
        <IconButtonTooltip size="small" tooltip="Newer">
          <ChevronRight />
        </IconButtonTooltip>
        <IconButtonTooltip
          size="small"
          tooltip="Input tools on/off (Ctrl-Shift-K)"
        >
          <KeyboardHide />
        </IconButtonTooltip>
        <IconButtonTooltip size="small" tooltip="Select Input Tool">
          <ArrowDropDownIcon />
        </IconButtonTooltip>
      </Box>
    </Box>
  );
};

export default EmailListSettings;
