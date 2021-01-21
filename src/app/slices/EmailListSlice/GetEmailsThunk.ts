import { createAsyncThunk } from '@reduxjs/toolkit';

import { Email } from './../../../types/email';
import { SIdebarItemType } from './../../../types/sidebar';
import getEmailsQueryBuilder from './getEmailsQueryBuilder';
import parseTimestamp from '../../../utils/parseTimestamp';
import { initializeSelectedEmailsMap } from '../SelectedEmails';

export const getEmails = createAsyncThunk(
  'emailList/allEmails',
  async (listType: SIdebarItemType, { dispatch, rejectWithValue }) => {
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
    condition: (listType: SIdebarItemType, { getState, extra }) => {
      // CHECK IF ITS THE SAME REQUEST ID

      return true;
    },
  }
);
