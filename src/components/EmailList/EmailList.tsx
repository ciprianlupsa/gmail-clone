import React from 'react';
import EmailListCategories from './EmailListCategories/EmailListCategories';
import EmailListSettings from './EmailListSettings/EmailListSettings';

const EmailList: React.FC = () => {
  return (
    <section>
      <EmailListSettings />
      <EmailListCategories />
    </section>
  );
};

export default EmailList;
