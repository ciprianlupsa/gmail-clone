import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import UniqueObject from '../../../../classes/UniqueObject';

export class SidebarListItem extends UniqueObject {
  constructor(
    public text: string,
    public Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>, // not great, can be any element
    public action: Function | undefined = undefined,
    public count: number | undefined = undefined,
    public selected: boolean = false
  ) {
    super();
  }
}
