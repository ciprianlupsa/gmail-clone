import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

// import { counterSlice } from "../features/counter/counterSlice";
import draftEmailReducer from "./slices/DraftEmailSlice";
import emailListSliceReducer from "./slices/EmailListSlice";

export const store = configureStore({
  reducer: {
    draftEmail: draftEmailReducer,
    emailList: emailListSliceReducer,
    // counter: counterSlice,
  },
  middleware: [...getDefaultMiddleware()],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
