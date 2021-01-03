import { MuiColors } from './../../../../types/mui-colors';
import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import UniqueObject from '../../../../classes/UniqueObject';

class EmailListCategoryItem extends UniqueObject {
  constructor(
    public title: string,
    public Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>,
    public color: MuiColors,
    public selected: boolean = false
  ) {
    super();
  }
}

export default EmailListCategoryItem;
