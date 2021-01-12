import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';

// import { counterSlice } from "../features/counter/counterSlice";
import draftEmailReducer from './slices/DraftEmailSlice';
import emailListSliceReducer from './slices/EmailListSlice';
import selectedEmailsReducer from './slices/SelectedEmails';

const rootReducer = combineReducers({
  draftEmail: draftEmailReducer,
  emailList: emailListSliceReducer,
  selectedEmails: selectedEmailsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
