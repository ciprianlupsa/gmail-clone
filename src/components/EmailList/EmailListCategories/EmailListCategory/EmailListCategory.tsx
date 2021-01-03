import React from 'react';
import EmailListCategoryItem from './EmailListCategoryItem.model';

const EmailListCategory: React.FC<EmailListCategoryItem> = ({ title }) => {
  return <div>{title}</div>;
};

export default EmailListCategory;
