import { createMuiTheme, ThemeOptions } from '@material-ui/core';
import { deepOrange, teal, red } from '@material-ui/core/colors';

import globalStyles from './globals';

const themeOptions: ThemeOptions = {
  palette: {
    // type: 'dark',
    primary: {
      main: red[600],
      light: red[50],
      dark: red[700],
    },
    secondary: {
      main: teal[200],
    },
    error: {
      main: red[400],
    },
  },
  overrides: {
    MuiCssBaseline: {
      ...globalStyles,
    },
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
    MuiCircularProgress: {
      root: {
        marginTop: '16px',
        marginBottom: '16px',
      },
    },
  },
};

export default createMuiTheme(themeOptions);
