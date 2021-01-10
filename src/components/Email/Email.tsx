import React from 'react';

import { Box, Button } from '@material-ui/core';
import { LabelImportant } from '@material-ui/icons';
import ReplyIcon from '@material-ui/icons/Reply';

import { selectViewEmail } from '../../app/slices/EmailListSlice';
import { useDispatch, useSelector } from 'react-redux';

import useEmailStyle from './EmailStyle';

import EmailBody from './EmailBody/EmailBody';

const Email: React.FC = () => {
  const classes = useEmailStyle();
  const email = useSelector(selectViewEmail);
  const dispatch = useDispatch();

  if (!email) return null;

  return (
    <Box display="flex" flexDirection="column" className={classes.mail} p={2}>
      <Box display="flex" alignItems="center" className={classes.mailHeader}>
        <h2 className={classes.mailHeadingHeader}>{email.subject}</h2>
        <LabelImportant className={classes.mailImportant} />
      </Box>

      <EmailBody />

      <Box>
        <Button
          className={classes.replyButton}
          variant="outlined"
          color="default"
          startIcon={<ReplyIcon />}
        >
          Reply
        </Button>

        <Button variant="outlined" color="default" startIcon={<ReplyIcon />}>
          Forward
        </Button>
      </Box>
    </Box>
  );
};

export default Email;
