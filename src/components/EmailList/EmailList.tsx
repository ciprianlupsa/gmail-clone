import { Box } from '@material-ui/core';
import React from 'react';
import EmailListCategories from './EmailListCategories/EmailListCategories';
import EmailRow from './EmailRow/EmailRow';

const EmailList: React.FC = () => {
  return (
    <Box>
      <EmailListCategories />

      <EmailRow
        id="firebase6"
        from="Cips"
        title="Twitch"
        subject="Hey fellow streamer!!"
        description="Lo?rem ipsum dolor sit amet, consectetur adipisicing elit. Cum quam laborum rem nam magnam excepturi, saepe temporibus dolor? Soluta porro dolorem earum. At, aspernatur beatae excepturi cum voluptate repudiandae molestiae"
        time="10pm"
      />
      <EmailRow
        id="firebase7"
        from="Cips"
        title="Google"
        subject="Hey there!"
        description="Forgot a 🎁? Give a year of unforgettable ideas"
        time="10pm"
      />
    </Box>
  );
};

export default EmailList;
