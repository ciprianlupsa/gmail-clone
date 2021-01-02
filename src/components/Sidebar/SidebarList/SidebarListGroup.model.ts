import ItterableComponent from '../../../utils/ItterableComponent';
import { SidebarListItem } from './SidebarItem.model';

export class SidebarListGroup extends ItterableComponent {
  constructor(
    public heading: string | null,
    public listItems: SidebarListItem[]
  ) {
    super();
  }
}
