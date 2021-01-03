import React from 'react';
import IconButtonTooltip from '../IconButtonTooltip/IconButtonTooltip';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import EmailIcon from '@material-ui/icons/Email';
import { Box, Divider } from '@material-ui/core';
import { useHistory } from 'react-router';
const EmailTools = () => {
  const history = useHistory();

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <IconButtonTooltip
        action={() => history.goBack()}
        size="small"
        tooltip="Go back"
      >
        <ArrowBackIcon />
      </IconButtonTooltip>
      <IconButtonTooltip size="small" tooltip="Hey">
        <MoveToInboxIcon />
      </IconButtonTooltip>
      <IconButtonTooltip size="small" tooltip="Hey">
        <ErrorIcon />
      </IconButtonTooltip>

      <Divider orientation="vertical" flexItem />

      <IconButtonTooltip size="small" tooltip="Hey">
        <DeleteIcon />
      </IconButtonTooltip>
      <IconButtonTooltip size="small" tooltip="Hey">
        <EmailIcon />
      </IconButtonTooltip>
      <IconButtonTooltip size="small" tooltip="Hey">
        <WatchLaterIcon />
      </IconButtonTooltip>

      <Divider orientation="vertical" flexItem />

      <IconButtonTooltip size="small" tooltip="Hey">
        <CheckCircleIcon />
      </IconButtonTooltip>
      <IconButtonTooltip size="small" tooltip="Hey">
        <LabelImportantIcon />
      </IconButtonTooltip>
      <IconButtonTooltip size="small" tooltip="Hey">
        <MoreVertIcon />
      </IconButtonTooltip>
    </Box>
  );
};

export default EmailTools;
