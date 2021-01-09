import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import thunkMetaInitialization from "./../thunkMetaInitialization";

import { ThunkMeta } from "./../../types/thunk-meta";
import { NewEmailFormValues } from "./../../types/new-email";
import { Email } from "./../../types/email";

import firebase from "firebase";
import { db } from "../../config/firebase";

type ActiveListType = "inbox";
interface EmailListState {
  activeListType: ActiveListType; // add all the others
  inListEmails: Email[];
  allEmails: Email[];
  getAllEmailsStatus: ThunkMeta;
}

const initialState: EmailListState = {
  activeListType: "inbox",
  inListEmails: [],
  allEmails: [],
  getAllEmailsStatus: { ...thunkMetaInitialization() },
};

export const getAllEmails = createAsyncThunk(
  "emailDraft/allEmails",
  async (listType: ActiveListType, { getState, dispatch }) => {
    const snapshot: any = await db.collection("emails").get();

    const emails: Email[] = snapshot.docs.map((doc: any) => doc.data());
    console.log("RESPONSE FOR GET EMAILS", emails);

    return emails;
    // const newEmail = {
    //   ...emailFormValues,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    // };
    // const response: any = await db.collection('emails').add(newEmail);
    // // Action - push to email list slice
    // return response.data;
  }
);

export const draftEmail = createSlice({
  name: "draftEmail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(sendDraftEmail.pending, (state, action) => {
    //   state.sendMailStatus.loading = true;
    // });
    // builder.addCase(sendDraftEmail.fulfilled, (state, action) => {
    //   state.sendMailStatus.loading = false;
    //   state.cachedDraft = { ...draftInitialState };
    //   state.modalOpen = false;
    // });
    // builder.addCase(sendDraftEmail.rejected, (state, action) => {
    //   state.sendMailStatus.loading = false;
    // });
  },
});

// export const { manageDraftModalOpen, cacheDraft } = draftEmail.actions;

// export const selectModalOpen = (state: RootState) => state.draftEmail.modalOpen;
// export const selectCachedDraft = (state: RootState) =>
//   state.draftEmail.cachedDraft;
// export const selectSendMailStatus = (state: RootState) =>
//   state.draftEmail.sendMailStatus;

export default draftEmail.reducer;
