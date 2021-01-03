import React from 'react';

import { Box } from '@material-ui/core';
import { LabelImportant } from '@material-ui/icons';
import useEmailStyle from './EmailStyle';

const EmailBody: React.FC = () => {
  const classes = useEmailStyle();

  return (
    <Box display="flex" flexDirection="column" className={classes.mail} p={2}>
      <Box display="flex" alignItems="center" className={classes.mailHeader}>
        <h2 className={classes.mailHeadingHeader}>Subject</h2>
        <LabelImportant className={classes.mailImportant} />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          repellendus dolorem hic praesentium ex eos id consequatur amet iure
          rerum, dolores unde fuga? Animi quisquam, perspiciatis expedita porro
          doloribus earum!
        </p>
        <p>Time</p>
      </Box>

      <Box className={classes.mailBody}>This is a message</Box>
    </Box>
  );
};

export default EmailBody;
