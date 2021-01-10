import React from 'react';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import EmailIcon from '@material-ui/icons/Email';
import { Box, Divider } from '@material-ui/core';

import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import IconButtonTooltip from '../IconButtonTooltip/IconButtonTooltip';
import useUpdateEmail from '../../hooks/useUpdateEmail';
import { selectViewEmail } from '../../app/slices/EmailListSlice';
import { Email } from '../../types/email';

const EmailTools = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const updateEmailByClick = useUpdateEmail(dispatch);
  const email = useSelector(selectViewEmail) as Email;

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <IconButtonTooltip
        action={($e) => history.goBack()}
        size="small"
        tooltip="Go back"
      >
        <ArrowBackIcon />
      </IconButtonTooltip>
      <IconButtonTooltip size="small" tooltip="Archive">
        <MoveToInboxIcon />
      </IconButtonTooltip>
      <IconButtonTooltip
        size="small"
        tooltip="Mark as Spam"
        action={($e) =>
          updateEmailByClick($e, { consideredSpam: true }, email.id)
        }
      >
        <ErrorIcon />
      </IconButtonTooltip>
      <IconButtonTooltip
        size="small"
        tooltip="Delete"
        action={($e) => updateEmailByClick($e, { deleted: true }, email.id)}
      >
        <DeleteIcon />
      </IconButtonTooltip>

      <Divider orientation="vertical" flexItem />

      <IconButtonTooltip
        size="small"
        tooltip="Mark as Unread"
        action={($e) => updateEmailByClick($e, { read: false }, email.id)}
      >
        <EmailIcon />
      </IconButtonTooltip>
      <IconButtonTooltip
        size="small"
        tooltip="Snooze"
        action={($e) => updateEmailByClick($e, { snoozed: true }, email.id)}
      >
        <WatchLaterIcon />
      </IconButtonTooltip>

      <IconButtonTooltip size="small" tooltip="Add to Tasks">
        <CheckCircleIcon />
      </IconButtonTooltip>

      <Divider orientation="vertical" flexItem />

      <IconButtonTooltip size="small" tooltip="Move to">
        <CreateNewFolderIcon />
      </IconButtonTooltip>
      <IconButtonTooltip size="small" tooltip="Labels">
        <LabelImportantIcon />
      </IconButtonTooltip>
      <IconButtonTooltip size="small" tooltip="More">
        <MoreVertIcon />
      </IconButtonTooltip>
    </Box>
  );
};

export default EmailTools;
