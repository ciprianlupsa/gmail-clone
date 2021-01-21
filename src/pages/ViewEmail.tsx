import React, { useEffect } from 'react';

import { Box, Divider } from '@material-ui/core';

import {
  resetActiveMail,
  selectViewEmail,
  setViewEmail,
} from '../app/slices/EmailListSlice';
import { useDispatch, useSelector } from 'react-redux';

import useQueryParams from '../hooks/useQueryParams';
import { useLocation } from 'react-router';

import Email from '../components/Email/Email';
import EmailNavigation from '../components/EmailNavigation/EmailNavigation';
import EmailTools from '../components/EmailTools/EmailTools';
import useUpdateEmail from '../hooks/useUpdateEmail';

const ViewEmail: React.FC = () => {
  const location = useLocation();
  const queryParams = useQueryParams();
  const dispatch = useDispatch();

  const email = useSelector(selectViewEmail);
  const updateEmail = useUpdateEmail(dispatch);

  useEffect(() => {
    if (queryParams.id) {
      dispatch(setViewEmail(queryParams.id));
    }
    return () => {
      dispatch(resetActiveMail());
    };
  }, [location]);

  useEffect(() => {
    if (email && !email.read) {
      updateEmail(
        null,
        {
          read: true,
        },
        queryParams.id
      );
    }
  }, [email]);

  if (!email) return <Box>CANT FIND THIS MAIL</Box>;

  return (
    <Box component="section">
      <Box mb={2} display="flex" justifyContent="space-between">
        <EmailTools />
        <EmailNavigation />
      </Box>
      <Divider />

      <Email />
    </Box>
  );
};

export default ViewEmail;
