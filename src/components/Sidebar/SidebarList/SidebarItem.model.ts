import { ReactElement } from 'react';
import ItterableComponent from '../../../classes/ItterableComponent';

export class SidebarListItem extends ItterableComponent {
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
