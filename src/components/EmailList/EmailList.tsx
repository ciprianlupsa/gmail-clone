import React, { useEffect } from 'react';

import { Box, LinearProgress } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { useDispatch, useSelector } from 'react-redux';
import {
  getEmails,
  selectGetEmailsStatus,
  selectEmails,
  selectUpdateError,
  setUpdateError,
} from '../../app/slices/EmailListSlice';

import { Email } from '../../types/email';
import EmailRow from './EmailRow/EmailRow';

import EmailListCategories from './EmailListCategories/EmailListCategories';
import EmailListSettings from './EmailListSettings/EmailListSettings';

const EmailList: React.FC = () => {
  const emails = useSelector(selectEmails);
  const updateError = useSelector(selectUpdateError);
  const { loading, error } = useSelector(selectGetEmailsStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmails('inbox'));
  }, [dispatch]);

  return (
    <Box>
      <EmailListSettings />
      <EmailListCategories />

      {loading && (
        <Box mt={3}>
          <LinearProgress />
        </Box>
      )}

      <Snackbar
        open={!!updateError}
        autoHideDuration={6000}
        onClose={() => dispatch(setUpdateError(null))}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={() => dispatch(setUpdateError(null))}
          severity="error"
        >
          {updateError}
        </MuiAlert>
      </Snackbar>

      {emails.length > 0 &&
        emails.map(
          ({
            id,
            from,
            subject,
            body,
            timestamp,
            starred,
            important,
            selected,
          }: Email) => (
            <EmailRow
              key={id}
              id={id}
              from={from}
              subject={subject}
              body={body}
              timestamp={timestamp}
              starred={starred}
              important={important}
              selected={selected}
            />
          )
        )}
    </Box>
  );
};

export default EmailList;
