import { RootState, AppThunk } from './../store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import thunkMetaInitialization from './../thunkMetaInitialization';

import { emailsRef } from './../../firebase/firebaseRefs';

import { ThunkMeta } from './../../types/thunk-meta';
import { Email } from './../../types/email';

type ActiveListType = 'inbox';
interface EmailListState {
  activeListType: ActiveListType; // add all the others
  emails: Email[];
  getEmailsStatus: ThunkMeta;
  viewEmailIndex: number | null;
  viewEmail: Email | null;
  updateError?: string | null;
}

const initialState: EmailListState = {
  activeListType: 'inbox',
  emails: [],
  getEmailsStatus: { ...thunkMetaInitialization() },
  viewEmailIndex: null,
  viewEmail: null,
  updateError: null,
};

export const getEmails = createAsyncThunk(
  'emailList/allEmails',
  async (listType: ActiveListType, { getState, dispatch }) => {
    const snapshot: any = await emailsRef
      .orderBy('timestamp', 'desc')
      .limit(200)
      .get();

    const mappedEmails: Email[] = snapshot.docs.map(
      (doc: any, index: number): Email => {
        const data = doc.data();
        console.log('DATA', data);
        const readableTimestamp = data.timestamp
          .toDate()
          .toLocaleString('en-GB', {
            timeZone: 'UTC',
          });

        return {
          ...data,
          id: doc.id,
          timestamp: readableTimestamp,
          selected: false,
        };
      }
    );

    return mappedEmails;
  },
  {
    condition: (listType: ActiveListType, { getState, extra }) => {
      const { emailList } = getState() as RootState;

      // No need to load all the emails if they already are here
      if (emailList.emails.length > 0) return false;

      return true;
    },
  }
);

export const emailList = createSlice({
  name: 'emailList',
  initialState,
  reducers: {
    setEmail(
      state,
      { payload }: PayloadAction<{ toUpdate: Partial<Email>; docId: string }>
    ) {
      const emailIndex = state.emails.findIndex(
        (email) => email.id === payload.docId
      );

      const keys = Object.keys(payload.toUpdate) as Array<keyof Email>;
      if (keys.length > 0 && emailIndex >= 0)
        keys.forEach((key) => {
          state.emails[emailIndex][key] = payload.toUpdate[key];
        });
    },
    setViewEmail(state, { payload }: PayloadAction<string>) {
      const emailIndex = state.emails.findIndex(
        (email) => email.id === payload
      );

      if (emailIndex < 0) {
        state.viewEmail = null;
        state.viewEmailIndex = null;
        return;
      }

      state.viewEmailIndex = emailIndex;
      state.viewEmail = state.emails[emailIndex];
    },
    setUpdateError(state, { payload }: PayloadAction<string | null>) {
      state.updateError = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEmails.pending, (state, action) => {
      state.getEmailsStatus.loading = true;
    });
    builder.addCase(getEmails.fulfilled, (state, action) => {
      state.getEmailsStatus.loading = false;

      state.emails = action.payload;
    });
    builder.addCase(getEmails.rejected, (state, action) => {
      state.getEmailsStatus.loading = false;
    });
  },
});

export const updateEmail = (
  toUpdate: Partial<Email>,
  docId: string | undefined
): AppThunk => async (dispatch) => {
  if (!docId) return;

  try {
    const res = await emailsRef.doc(docId + 'dfasdsa').update(toUpdate);
    dispatch(emailList.actions.setEmail({ toUpdate, docId }));
  } catch (err) {
    dispatch(emailList.actions.setUpdateError(err.message));
  }
};

export const { setUpdateError, setViewEmail } = emailList.actions;

export const selectEmails = (state: RootState) => state.emailList.emails;
export const selectUpdateError = (state: RootState) =>
  state.emailList.updateError;
export const selectGetEmailsStatus = (state: RootState) =>
  state.emailList.getEmailsStatus;
export const selectViewEmail = (state: RootState) => state.emailList.viewEmail;

// export const selectModalOpen = (state: RootState) => state.draftEmail.modalOpen;
// export const selectCachedDraft = (state: RootState) =>
//   state.draftEmail.cachedDraft;

export default emailList.reducer;
