import { Inbox, LocalOffer, People } from '@material-ui/icons';
import ItterableList from '../../../classes/ItterableList';
import { SELECTED_COLOR } from '../../../constants/app';
import EmailListCategoryItem from './EmailListCategory/EmailListCategoryItem.model';

const CategoryList = new ItterableList<EmailListCategoryItem>([
  new EmailListCategoryItem('Primary', Inbox, SELECTED_COLOR, true),
  new EmailListCategoryItem('Social', People, 'info', true),
  new EmailListCategoryItem('Promotions', LocalOffer, 'success', true),
]);

export default CategoryList;
