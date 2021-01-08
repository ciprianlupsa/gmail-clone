import { ThunkMeta } from './../types/thunk-meta';

const thunkMetaInitialization = (): ThunkMeta => ({
  loading: false,
  error: null,
  requestId: null,
});

export default thunkMetaInitialization;
