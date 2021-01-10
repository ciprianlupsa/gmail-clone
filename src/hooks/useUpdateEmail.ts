import { Email } from './../types/email';
import { SyntheticEvent } from 'react';
import { updateEmail } from '../app/slices/EmailListSlice';

export default function (dispatch: any) {
  return function (
    $event: SyntheticEvent,
    newValue: Partial<Email>,
    id: string | undefined
  ): void {
    if (!id) return;

    $event.stopPropagation();
    console.log(newValue, id);
    dispatch(updateEmail(newValue, id as string));
  };
}
