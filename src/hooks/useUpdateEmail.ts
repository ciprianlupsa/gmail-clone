import { Email } from './../types/email';
import { SyntheticEvent } from 'react';
import { updateEmail } from '../app/slices/EmailListSlice';

export default function (dispatch: any) {
  return function (
    $event: SyntheticEvent | null,
    newValue: Partial<Email>,
    id: string | undefined
  ): void {
    if (!id) return;
    if ($event) $event.stopPropagation();

    console.log('Updated', newValue, id);
    dispatch(updateEmail(newValue, id as string));
  };
}
