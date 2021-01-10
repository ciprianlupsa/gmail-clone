import React, { useEffect } from 'react';

import { Box, Divider } from '@material-ui/core';

import { selectViewEmail, setViewEmail } from '../app/slices/EmailListSlice';
import { useDispatch, useSelector } from 'react-redux';

import useQueryParams from '../hooks/useQueryParams';
import { useLocation } from 'react-router';

import Email from '../components/Email/Email';
import EmailNavigation from '../components/EmailNavigation/EmailNavigation';
import EmailTools from '../components/EmailTools/EmailTools';

const ViewEmail: React.FC = () => {
  const location = useLocation();
  const queryParams = useQueryParams();
  const email = useSelector(selectViewEmail);
  const dispatch = useDispatch();

  useEffect(() => {
    if (queryParams.id) dispatch(setViewEmail(queryParams.id));
    return () => {
      // reset
    };
  }, [location]);

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
