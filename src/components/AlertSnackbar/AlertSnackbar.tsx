import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

interface SnackbarProps {
  open: boolean;
  closeAction: () => void;
  alertMessage: string | null | undefined;
  alertType: 'error' | 'success' | 'warning';
  autoHide?: number;
}

const AlertSnackbar: React.FC<SnackbarProps> = ({
  open,
  closeAction,
  alertMessage,
  alertType,
  autoHide,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHide ? autoHide : 6000}
      onClose={() => closeAction()}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={() => closeAction()}
        severity={alertType}
      >
        {alertMessage ? alertMessage : ''}
      </MuiAlert>
    </Snackbar>
  );
};

export default AlertSnackbar;
