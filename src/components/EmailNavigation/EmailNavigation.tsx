import React from 'react';

import { Box } from '@material-ui/core';
import { ChevronLeft, ChevronRight, KeyboardHide } from '@material-ui/icons';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import IconButtonTooltip from '../IconButtonTooltip/IconButtonTooltip';

const EmailNavigation: React.FC = () => {
  return (
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
  );
};

export default EmailNavigation;
