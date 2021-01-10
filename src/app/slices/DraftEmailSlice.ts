import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import thunkMetaInitialization from './../thunkMetaInitialization';

import { ThunkMeta } from './../../types/thunk-meta';
import { NewEmailFormValues } from './../../types/new-email';

import firebase from 'firebase';
import { emailsRef } from './../../firebase/firebaseRefs';

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
  async (emailFormValues: NewEmailFormValues, { getState, dispatch }) => {
    const newEmail = {
      ...emailFormValues,
      from: 'cipsdnbfake@gmail.com',
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

    const response: any = await emailsRef.add(newEmail);
    // Action - push to email list slice
    return response.data;
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
