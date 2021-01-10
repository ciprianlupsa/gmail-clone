import React from 'react';

import { Avatar, Box, Divider, Typography } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ReplyIcon from '@material-ui/icons/Reply';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { StarBorderOutlined } from '@material-ui/icons';

import { useDispatch, useSelector } from 'react-redux';
import { selectViewEmail } from '../../../app/slices/EmailListSlice';

import IconButtonTooltip from '../../IconButtonTooltip/IconButtonTooltip';
import useUpdateEmail from '../../../hooks/useUpdateEmail';
import useColorClasses from '../../../hooks/style-hooks/useColorClasses';
import { Email } from '../../../types/email';

const EmailBody: React.FC = () => {
  const email = useSelector(selectViewEmail) as Email;
  const dispatch = useDispatch();
  const updateEmailByClick = useUpdateEmail(dispatch);
  const warning = useColorClasses('warning');

  return (
    <Box component="section">
      <Box mb={2} display="flex" justifyContent="space-between">
        <Box display="flex">
          <Box mr={1}>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </Box>

          <Box>
            <Box display="inline">
              <Box component="span" mr={1} fontWeight="fontWeightBold">
                {email.from}
              </Box>
              <Box
                component="span"
                mr={1}
                fontWeight="fontWeightLight"
                color="text.secondary"
              >
                {email.from}
              </Box>
              <Box
                component="span"
                fontWeight="fontWeightLight"
                color="text.secondary"
              >
                Unsubscribe
              </Box>
            </Box>

            <Box fontWeight="fontWeightLight" color="text.secondary">
              To me
            </Box>
          </Box>
        </Box>

        <Box display="flex" alignItems="center">
          <Box
            component="span"
            mr={1}
            fontWeight="fontWeightLight"
            color="text.secondary"
          >
            {email.timestamp}
          </Box>

          <IconButtonTooltip
            size="small"
            tooltip={email.starred ? 'Starred' : 'Not starred'}
            action={($e) =>
              updateEmailByClick($e, { starred: !email.starred }, email.id)
            }
          >
            <StarBorderOutlined
              className={email.starred ? warning.colorMain : ''}
            />
          </IconButtonTooltip>
          <IconButtonTooltip size="small" tooltip="Reply">
            <ReplyIcon />
          </IconButtonTooltip>

          <IconButtonTooltip size="small" tooltip="More">
            <MoreVertIcon />
          </IconButtonTooltip>
        </Box>
      </Box>

      <Box mb={4}>{email.body}</Box>
    </Box>
  );
};

export default EmailBody;
