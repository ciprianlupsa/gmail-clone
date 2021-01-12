import { RootState, AppThunk } from './../store';
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from '@reduxjs/toolkit';
import thunkMetaInitialization from './../thunkMetaInitialization';

import { emailsRef } from './../../firebase/firebaseRefs';

import { ThunkMeta } from './../../types/thunk-meta';
import { Email } from './../../types/email';
import { SIdebarItemType } from './../../types/sidebar';
import getEmailsQueryBuilder from './EmailListSlice/getEmailsQueryBuilder';
import parseTimestamp from '../../utils/parseTimestamp';
import { initializeSelectedEmailsMap } from './SelectedEmails';
interface EmailListState {
  activeListType: SIdebarItemType | string;
  emails: Email[];
  getEmailsStatus: ThunkMeta;
  viewEmailIndex: number | null;
  viewEmail: Email | null;
  updateError?: string | null;
  updateSuccess: boolean;
}

const initialState: EmailListState = {
  activeListType: 'Inbox',
  emails: [],
  getEmailsStatus: { ...thunkMetaInitialization() },
  viewEmailIndex: null,
  viewEmail: null,
  updateError: null,
  updateSuccess: false,
};

export const getEmails = createAsyncThunk(
  'emailList/allEmails',
  async (listType: SIdebarItemType | string, { dispatch, rejectWithValue }) => {
    try {
      const snapshot: any = await getEmailsQueryBuilder(listType);

      const mappedEmails: Email[] = snapshot.docs.map(
        (doc: any, index: number): Email => {
          const data = doc.data();
          const readableTimestamp = parseTimestamp(data.timestamp);

          return {
            ...data,
            id: doc.id,
            timestamp: readableTimestamp,
            selected: false,
          };
        }
      );

      dispatch(
        initializeSelectedEmailsMap(mappedEmails.map((email) => email.id))
      );
      return mappedEmails;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  },
  {
    condition: (listType: SIdebarItemType | string, { getState, extra }) => {
      const { emailList } = getState() as RootState;

      // if (listType === emailList.activeListType) return false;

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

          // Also replace the viewEmail value if its not null
          if (
            state.viewEmailIndex !== null &&
            state.viewEmailIndex === emailIndex
          ) {
            state.viewEmail![key] = payload.toUpdate[key];
          }
        });
    },
    addEmail(state, { payload }: PayloadAction<Email>) {
      if (state.activeListType === 'Inbox' || state.activeListType === 'Sent') {
        state.emails.unshift(payload);
      }
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
    setActiveListType(
      state,
      { payload }: PayloadAction<SIdebarItemType | string>
    ) {
      state.activeListType = payload;
    },
    setUpdateError(state, { payload }: PayloadAction<string | null>) {
      state.updateError = payload;
    },
    setUpdateSuccess(state, { payload }: PayloadAction<boolean>) {
      state.updateSuccess = payload;
    },
    resetActiveMail(state) {
      state.viewEmail = null;
      state.viewEmailIndex = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEmails.pending, (state, action) => {
      state.emails = [];
      state.viewEmail = null;
      state.viewEmailIndex = null;

      state.getEmailsStatus.loading = true;
    });
    builder.addCase(getEmails.fulfilled, (state, action) => {
      state.getEmailsStatus.loading = false;

      state.emails = action.payload;
    });
    builder.addCase(getEmails.rejected, (state, action) => {
      state.getEmailsStatus.loading = false;
      state.getEmailsStatus.error = 'Cannot get emails at this moment.';
    });
  },
});

export const updateEmail = (
  toUpdate: Partial<Email>,
  docId: string | undefined
): AppThunk => async (dispatch, getState) => {
  if (!docId) return;

  const { setEmail, setUpdateError, setUpdateSuccess } = emailList.actions;

  try {
    await emailsRef.doc(docId).update(toUpdate);
    dispatch(setEmail({ toUpdate, docId }));
    dispatch(setUpdateSuccess(true));
  } catch (err) {
    dispatch(setUpdateError(err.message));
  }
};

export const {
  setUpdateError,
  setUpdateSuccess,
  setViewEmail,
  setActiveListType,
  resetActiveMail,
  addEmail,
} = emailList.actions;

export const selectActiveListType = (state: RootState) =>
  state.emailList.activeListType;

export const selectEmails = (state: RootState) => state.emailList.emails;
export const selectEmailByIndex = (index: number) => (state: RootState) =>
  state.emailList.emails[index];
export const selectViewEmail = (state: RootState) => state.emailList.viewEmail;

export const selectGetEmailsStatus = (state: RootState) =>
  state.emailList.getEmailsStatus;

export const selectUpdateError = (state: RootState) =>
  state.emailList.updateError;
export const selectUpdateSuccess = (state: RootState) =>
  state.emailList.updateSuccess;

export default emailList.reducer;
