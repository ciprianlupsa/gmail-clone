import { Email } from './../types/email';
import { SyntheticEvent } from 'react';
import { updateEmail } from '../app/slices/EmailListSlice';

export default function (dispatch: any) {
  return function (
    $event: SyntheticEvent,
    newValue: Partial<Email>,
    id: string | undefined
  ): void {
    $event.stopPropagation();
    dispatch(updateEmail(newValue, id as string));
  };
}
