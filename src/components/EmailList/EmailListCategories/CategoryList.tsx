import React from 'react';

import { Inbox, LocalOffer, People } from '@material-ui/icons';
import ItterableList from '../../../classes/ItterableList';
import EmailListCategoryItem from './EmailListCategory/EmailListCategoryItem.model';

const CategoryList = new ItterableList<EmailListCategoryItem>([
  new EmailListCategoryItem('Primary', <Inbox />, 'primary'),
  new EmailListCategoryItem('Social', <People />, 'blue'),
  new EmailListCategoryItem('Promotions', <LocalOffer />, 'green'),
]);

export default CategoryList;
