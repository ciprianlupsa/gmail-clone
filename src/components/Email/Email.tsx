import React from 'react';

import { Box, Button } from '@material-ui/core';
import { LabelImportant, LabelImportantOutlined } from '@material-ui/icons';
import ReplyIcon from '@material-ui/icons/Reply';

import { selectViewEmail } from '../../app/slices/EmailListSlice';
import { useDispatch, useSelector } from 'react-redux';

import useEmailStyle from './EmailStyle';

import EmailBody from './EmailBody/EmailBody';
import useColorClasses from '../../hooks/style-hooks/useColorClasses';
import useUpdateEmail from '../../hooks/useUpdateEmail';
import IconButtonTooltip from '../IconButtonTooltip/IconButtonTooltip';

const Email: React.FC = () => {
  const classes = useEmailStyle();
  const email = useSelector(selectViewEmail);
  const dispatch = useDispatch();
  const updateEmailByClick = useUpdateEmail(dispatch);

  const warning = useColorClasses('warning');

  if (!email) return null;

  return (
    <Box display="flex" flexDirection="column" className={classes.mail} p={2}>
      <Box display="flex" alignItems="center" className={classes.mailHeader}>
        <h2 className={classes.mailHeadingHeader}>{email.subject}</h2>
        <IconButtonTooltip
          size="small"
          tooltip={
            email.important
              ? ''
              : 'Click to teach Gmail that this email is important'
          }
          action={($e) =>
            updateEmailByClick($e, { important: !email.important }, email.id)
          }
        >
          <LabelImportantOutlined
            className={email.important ? warning.colorMain : ''}
          />
        </IconButtonTooltip>
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
