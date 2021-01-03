import { Box, Divider } from '@material-ui/core';
import React from 'react';

import CategoryList from './CategoryList';
import EmailListCategory from './EmailListCategory/EmailListCategory';
import EmailListCategoryItem from './EmailListCategory/EmailListCategoryItem.model';

const EmailListCategories = () => {
  return (
    <section>
      <Box display="flex">
        {CategoryList.listItems.map((item: EmailListCategoryItem) => (
          <EmailListCategory key={item.id} {...item} />
        ))}
      </Box>
      <Divider />
    </section>
  );
};

export default EmailListCategories;
