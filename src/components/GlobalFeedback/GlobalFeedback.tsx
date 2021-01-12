import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectGetEmailsStatus,
  selectUpdateError,
  selectUpdateSuccess,
  setUpdateError,
  setUpdateSuccess,
} from '../../app/slices/EmailListSlice';
import AlertSnackbar from '../AlertSnackbar/AlertSnackbar';

const GlobalFeedback = () => {
  const dispatch = useDispatch();
  const emailUpdateError = useSelector(selectUpdateError);
  const emailUpdateSuccess = useSelector(selectUpdateSuccess);
  const { error: getAllEmailsError } = useSelector(selectGetEmailsStatus);

  return (
    <>
      <AlertSnackbar
        open={!!emailUpdateError}
        closeAction={() => dispatch(setUpdateError(null))}
        alertMessage={emailUpdateError}
        alertType="error"
      />
      <AlertSnackbar
        open={emailUpdateSuccess}
        closeAction={() => dispatch(setUpdateSuccess(false))}
        alertMessage="Email updated!"
        alertType="success"
      />
      <AlertSnackbar
        open={!!getAllEmailsError}
        closeAction={() => {}}
        alertMessage={getAllEmailsError}
        alertType="error"
      />
    </>
  );
};

export default GlobalFeedback;
