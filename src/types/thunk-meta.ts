export interface ThunkMeta {
  loading: boolean;
  error?: string | null;
  requestId: string | null;
}
