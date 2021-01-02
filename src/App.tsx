import { Box, CssBaseline } from '@material-ui/core';
import React from 'react';
import { Header } from './components/Header/Header';
import MainLayout from './layouts/MainLayout';

const App: React.FC = () => {
  return (
    <Box>
      <CssBaseline />
      <Header />
      <MainLayout />
    </Box>
  );
};

export default App;
