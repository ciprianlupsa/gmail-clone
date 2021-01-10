// export type FirestoreTimestamp = import("firebase").firestore.Timestamp;

export interface Email {
  id: string;

  from: string;
  to: string;
  ccTo?: string[] | null;
  bccTo?: string[] | null;

  subject: string;
  body: string;
  bodyText?: string;
  timestamp: any;
  thread: Email[];

  read?: boolean;
  scheduledToSendOn?: string | null;
  attachments?: string[] | null;

  starred?: boolean;
  snoozed?: boolean;
  draft?: boolean;
  important?: boolean;
  consideredSpam?: boolean;
  deleted?: boolean;
  category?: 'primary' | 'updates' | 'forums' | 'promotions';

  // Frontend only
  selected?: boolean;
}
