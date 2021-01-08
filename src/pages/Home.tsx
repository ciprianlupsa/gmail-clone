import { Box } from '@material-ui/core';
import React from 'react';
import EmailList from '../components/EmailList/EmailList';

const Dashboard: React.FC = () => {
  return (
    <Box>
      <EmailList />
    </Box>
  );
};

export default Dashboard;
