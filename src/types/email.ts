export interface Email {
  from: string;
  to: string;
  ccTo?: string;
  bccTo?: string;

  subject: string;
  body: string;
  timestamp: string;
  thread: Email[];

  read?: string;
  scheduledToSendOn?: string;
  attachments?: string[] | null;

  starred?: boolean;
  snoozed?: boolean;
  draft?: boolean;
  important?: boolean;
  consideredSpam?: boolean;
  deleted?: boolean;
  category?: 'primary' | 'updates' | 'forums' | 'promotions';
}
