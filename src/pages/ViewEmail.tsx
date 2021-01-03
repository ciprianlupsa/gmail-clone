import { Box, Divider } from '@material-ui/core';
import React from 'react';
import Email from '../components/Email/Email';
import EmailNavigation from '../components/EmailNavigation/EmailNavigation';
import EmailTools from '../components/EmailTools/EmailTools';

const ViewEmail: React.FC = () => {
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
