import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import draftEmailReducer from './slices/DraftEmailSlice';
import emailListSlice from './slices/EmailListSlice';

export const store = configureStore({
  reducer: {
    draftEmail: draftEmailReducer,
    emailList: emailListSlice,
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
