import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
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
    </>
  );
};

export default GlobalFeedback;
