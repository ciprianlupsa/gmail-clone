import { ReactElement } from 'react';
import UniqueObject from '../../../../classes/UniqueObject';

export class SidebarListItem extends UniqueObject {
  constructor(
    public text: string,
    public Icon: ReactElement, // not great, can be any element
    public action: Function | undefined = undefined,
    public count: number | undefined = undefined,
    public selected: boolean = false
  ) {
    super();
  }
}
