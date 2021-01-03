import { Box } from '@material-ui/core';
import React from 'react';

import CategoryList from './CategoryList';
import EmailListCategory from './EmailListCategory/EmailListCategory';
import EmailListCategoryItem from './EmailListCategory/EmailListCategoryItem.model';

const EmailListCategories = () => {
  return (
    <Box>
      {CategoryList.listItems.map((item: EmailListCategoryItem) => (
        <EmailListCategory key={item.id} {...item} />
      ))}
    </Box>
  );
};

export default EmailListCategories;
