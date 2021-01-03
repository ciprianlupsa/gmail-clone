import React from 'react';
import EmailListCategoryItem from './EmailListCategoryItem.model';

const EmailListCategory: React.FC<EmailListCategoryItem> = ({
  title,
  Icon,
  color,
  selected,
}) => {
  return <div>{title}</div>;
};

export default EmailListCategory;
