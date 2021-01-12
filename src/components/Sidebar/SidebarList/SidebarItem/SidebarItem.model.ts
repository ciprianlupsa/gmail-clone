import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

import { SIdebarItemType } from './../../../../types/sidebar';
import UniqueObject from '../../../../classes/UniqueObject';

export class SidebarListItem extends UniqueObject {
  constructor(
    public text: SIdebarItemType | string,
    public Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>, // not great, can be any element
    public count: number | undefined = undefined
  ) {
    super();
  }
}
