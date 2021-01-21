import { RootState } from './../store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import thunkMetaInitialization from './../thunkMetaInitialization';

import { ThunkMeta } from './../../types/thunk-meta';
import { NewEmailFormValues } from './../../types/new-email';
import { Email } from './../../types/email';

import firebase from 'firebase';
import { emailsRef } from './../../firebase/firebaseRefs';
import { addEmail } from './EmailListSlice';
import parseTimestamp from '../../utils/parseTimestamp';

interface DraftEmailState {
  modalOpen: boolean;
  cachedDraft: NewEmailFormValues;
  sendMailStatus: ThunkMeta;
}

const draftInitialState = {
  to: '',
  subject: '',
  body: '',
};

const initialState: DraftEmailState = {
  modalOpen: false,
  cachedDraft: {
    ...draftInitialState,
  },
  sendMailStatus: {
    ...thunkMetaInitialization(),
  },
};

export const sendDraftEmail = createAsyncThunk(
  'emailDraft/saveEmailStatus',
  async (
    emailFormValues: NewEmailFormValues,
    { rejectWithValue, getState, dispatch }
  ) => {
    const { auth } = getState() as RootState;
    const loggedInUser = auth.user;
    if (!loggedInUser || !loggedInUser.email)
      throw new Error(
        'Cannot send email. An exception occured with your logged in state.'
      );

    try {
      const newEmail: Email = {
        ...emailFormValues,
        id: '',
        from: loggedInUser.email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        ccTo: null,
        bccTo: null,
        thread: [],

        read: false,
        scheduledToSendOn: null,
        attachments: null,

        starred: false,
        snoozed: false,
        draft: false, // !!
        important: false,
        consideredSpam: false,
        deleted: false,
        category: 'primary', // !!
      };

      const newDocRef: any = await emailsRef.add(newEmail);
      const newDocument: any = await emailsRef.doc(newDocRef.id).get();

      const data = newDocument.data();

      const parsedEmail: Email = {
        ...data,
        id: newDocument.id,
        timestamp: parseTimestamp(data.timestamp),
      };

      // Push the new email to the email list slice
      dispatch(addEmail(parsedEmail));
      return parsedEmail;
    } catch (err) {
      console.log('Error on saving email: ', err.message);
      rejectWithValue(err.message);
    }
  }
);

export const draftEmail = createSlice({
  name: 'draftEmail',
  initialState,
  reducers: {
    manageDraftModalOpen: (state, action: PayloadAction<boolean>) => {
      state.modalOpen = action.payload;
    },
    cacheDraft: (state, action: PayloadAction<NewEmailFormValues>) => {
      state.cachedDraft = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendDraftEmail.pending, (state, action) => {
      state.sendMailStatus.loading = true;
    });
    builder.addCase(sendDraftEmail.fulfilled, (state, action) => {
      state.sendMailStatus.loading = false;
      state.cachedDraft = { ...draftInitialState };
      state.modalOpen = false;
    });
    builder.addCase(sendDraftEmail.rejected, (state, action) => {
      state.sendMailStatus.loading = false;
      state.sendMailStatus.error = 'There was a problem sending this message.';
    });
  },
});

export const { manageDraftModalOpen, cacheDraft } = draftEmail.actions;

export const selectModalOpen = (state: RootState) => state.draftEmail.modalOpen;
export const selectCachedDraft = (state: RootState) =>
  state.draftEmail.cachedDraft;
export const selectSendMailStatus = (state: RootState) =>
  state.draftEmail.sendMailStatus;

export default draftEmail.reducer;
