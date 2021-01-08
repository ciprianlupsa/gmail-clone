import React, { SyntheticEvent } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { CloseIcon } from '@material-ui/data-grid';

import { Formik, Form, Field, FormikProps, FormikValues } from 'formik';
import * as yup from 'yup';
import { TextField } from 'formik-material-ui';

import { useDispatch, useSelector } from 'react-redux';
import {
  manageDraftModalOpen,
  cacheDraft,
  selectCachedDraft,
  selectModalOpen,
  selectSendMailStatus,
  sendDraftEmail,
} from '../../app/slices/DraftEmailSlice';

import { Box, LinearProgress, Typography } from '@material-ui/core';
import IconButtonTooltip from '../IconButtonTooltip/IconButtonTooltip';

import { NewEmailFormValues } from '../../types/new-email';

const NewEmail = () => {
  const newEmailModalOpen = useSelector(selectModalOpen);

  const formValues = useSelector(selectCachedDraft);
  const { loading, error } = useSelector(selectSendMailStatus); //TODO Handle error

  const dispatch = useDispatch();

  const handleClose = (values: FormikValues) => {
    dispatch(manageDraftModalOpen(false));
    dispatch(cacheDraft(values as NewEmailFormValues));
  };
  const validationSchema = yup.object().shape({
    to: yup
      .string()
      .email('The mail address you entered is invalid.')
      .required('This field is required.'),
    subject: yup.string().required('This field is required.'),
    body: yup.string().required('This field is required.'),
  });

  const onPaste = (e: SyntheticEvent) => {
    // Provide logic for pasting files into the email body input
  };

  // Dont render anything if the modal is not open
  if (!newEmailModalOpen) return null;

  return (
    <Box>
      <Formik
        initialValues={formValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(sendDraftEmail(values));
          setSubmitting(false);
        }}
      >
        {({
          values,
          submitForm,
          isValid,
          isSubmitting,
          dirty,
        }: FormikProps<FormikValues>) => (
          <Dialog
            open={newEmailModalOpen}
            onClose={() => handleClose(values)}
            scroll="body"
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <Form>
              <DialogTitle id="scroll-dialog-title">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={1}
                >
                  <Typography variant="h5">New message</Typography>
                  <IconButtonTooltip
                    tooltip="Close"
                    size="small"
                    action={() => handleClose(values)}
                  >
                    <CloseIcon></CloseIcon>
                  </IconButtonTooltip>
                </Box>

                {loading && <LinearProgress />}
              </DialogTitle>
              <DialogContent>
                <Field
                  component={TextField}
                  type="text"
                  label="To"
                  name="to"
                  autoFocus
                  fullWidth
                />

                <Field
                  component={TextField}
                  type="text"
                  label="Subject"
                  name="subject"
                  fullWidth
                />

                <Field
                  component={TextField}
                  type="text"
                  label="Body"
                  name="body"
                  onPaste={onPaste}
                  fullWidth
                  multiline
                  rows={6}
                />
              </DialogContent>

              <DialogActions>
                <Box>
                  <LinearProgress />
                </Box>

                <Button
                  disabled={!(isValid && dirty) || loading}
                  variant="contained"
                  onClick={submitForm}
                  color="secondary"
                >
                  Send
                </Button>
              </DialogActions>
            </Form>
          </Dialog>
        )}
      </Formik>
    </Box>
  );
};

export default NewEmail;
