import ItterableComponent from '../../../utils/ItterableComponent';

export class SidebarListItem extends ItterableComponent {
  constructor(
    public text: string,
    public icon: JSX.Element, // not great, can be any element
    public action: Function | undefined = undefined,
    public count: number | undefined = undefined,
    public selected: boolean = false
  ) {
    super();
  }
}
