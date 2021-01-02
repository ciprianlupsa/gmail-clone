import { ReactElement } from 'react';
import UniqueObject from '../../../../classes/UniqueObject';

class EmailListCategoryItem extends UniqueObject {
  constructor(
    public title: string,
    public Icon: ReactElement,
    public color: string,
    public selected: boolean = false
  ) {
    super();
  }
}

export default EmailListCategoryItem;
