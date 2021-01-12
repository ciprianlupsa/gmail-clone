import { RootState, AppThunk } from './../store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmailSelectOptions } from '../../types/email-select-options';

type MapOfSelectedEmails = {
  [emailId: string]: boolean;
};

interface SelectedEmailsState {
  selectedEmailsMap: MapOfSelectedEmails;
  selectedBy: string | null;
  atLeastOneSelected: boolean;
}

const initialState: SelectedEmailsState = {
  selectedEmailsMap: {},
  selectedBy: null,
  atLeastOneSelected: false,
};

// THUNK - GET EMAIL LIST STATE WHEN SELECTING BY STARRED/READ etc.
export const selectAllEmailsBy = (by: EmailSelectOptions): AppThunk => (
  dispatch,
  getState
) => {
  switch (by) {
    case 'all':
      dispatch(selectedEmails.actions.selectAllEmailsWith(true));
      break;
    case 'none':
      dispatch(selectedEmails.actions.selectAllEmailsWith(false));
      break;

    default:
      dispatch(selectedEmails.actions.selectAllEmailsWith(false));
  }
};

export const selectedEmails = createSlice({
  name: 'selectedEmails',
  initialState,
  reducers: {
    initializeSelectedEmailsMap(state, action: PayloadAction<string[]>) {
      action.payload.forEach((emailId) => {
        state.selectedEmailsMap[emailId] = false;
      });

      state.atLeastOneSelected = false;
    },
    toggleSelectedValue(
      state,
      action: PayloadAction<{ id: string; value: boolean }>
    ) {
      // payload.action = email id
      state.selectedEmailsMap[action.payload.id] = action.payload.value;

      // If its selected and at least one is not selected (according to state)
      if (action.payload.value && !state.atLeastOneSelected) {
        state.atLeastOneSelected = true;
      }
    },
    selectAllEmailsWith(state, action: PayloadAction<boolean>) {
      for (let selected in state.selectedEmailsMap) {
        state.selectedEmailsMap[selected] = action.payload;
      }

      state.atLeastOneSelected = action.payload;
    },
  },
});

export const {
  initializeSelectedEmailsMap,
  toggleSelectedValue,
  selectAllEmailsWith,
} = selectedEmails.actions;

export const selectEmailSelected = (id: string) => (state: RootState) =>
  state.selectedEmails.selectedEmailsMap[id];
export const selectEmailsSelectedValue = (state: RootState) =>
  state.selectedEmails.atLeastOneSelected;

export default selectedEmails.reducer;
