import { Inbox, LocalOffer, People } from '@material-ui/icons';
import ItterableList from '../../../classes/ItterableList';
import { SELECTED_COLOR } from '../../../app/constants';
import EmailListCategoryItem from './EmailListCategory/EmailListCategoryItem.model';

const CategoryList = new ItterableList<EmailListCategoryItem>([
  new EmailListCategoryItem('Primary', Inbox, SELECTED_COLOR, true),
  new EmailListCategoryItem('Social', People, 'info', false),
  new EmailListCategoryItem('Promotions', LocalOffer, 'success', false),
]);

export default CategoryList;
