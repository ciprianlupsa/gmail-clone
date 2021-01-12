import { emailsRef } from '../../../firebase/firebaseRefs';
import { SIdebarItemType } from './../../../types/sidebar';

const getEmailsQueryBuilder = (
  listType: SIdebarItemType | string
): Promise<any> => {
  if (listType === 'Inbox')
    return emailsRef
      .where('deleted', '==', false)
      .orderBy('timestamp', 'desc')
      .limit(200)
      .get();

  if (listType === 'Starred')
    return emailsRef
      .where('starred', '==', true)
      .where('deleted', '==', false)
      .orderBy('timestamp', 'desc')
      .limit(200)
      .get();

  if (listType === 'Snoozed')
    return emailsRef
      .where('snoozed', '==', true)
      .where('deleted', '==', false)
      .orderBy('timestamp', 'desc')
      .limit(200)
      .get();

  if (listType === 'Sent')
    return emailsRef
      .where('deleted', '==', false)
      .orderBy('timestamp', 'desc')
      .limit(200)
      .get();

  if (listType === 'Draft')
    return emailsRef
      .where('deleted', '==', false)
      .where('draft', '==', true)
      .orderBy('timestamp', 'desc')
      .limit(200)
      .get();

  return emailsRef
    .where('deleted', '==', false)
    .orderBy('timestamp', 'desc')
    .limit(200)
    .get();
};

export default getEmailsQueryBuilder;
