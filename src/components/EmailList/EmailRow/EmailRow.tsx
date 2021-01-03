import { Box, Checkbox } from '@material-ui/core';
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router';
import IconButtonTooltip from '../../IconButtonTooltip/IconButtonTooltip';
import EmailRowModel from './EmailRow.model';
import useEmailRowStyle from './EmailRowStyle';

const EmailRow: React.FC<EmailRowModel> = ({
  id,
  from,
  title,
  subject,
  description,
  time,
}) => {
  const history = useHistory();

  const classes = useEmailRowStyle();

  return (
    <Box
      onClick={() => history.push('/mail')}
      className={classes.container}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      height={50}
    >
      <Box display="flex">
        <Checkbox />

        <IconButtonTooltip size="small" tooltip="Hello world">
          <StarBorderOutlined />
        </IconButtonTooltip>
        <IconButtonTooltip size="small" tooltip="Hello world">
          <LabelImportantOutlined />
        </IconButtonTooltip>
      </Box>

      <Box pr={1} display="flex" alignItems="center" justifyContent="center">
        <h4 className={classes.title}>{title}</h4>
      </Box>

      <Box display="flex" alignItems="center" flex={1}>
        <h4 className={classes.subject}>
          {subject}
          <span className={classes.description}> - {description}</span>
        </h4>
      </Box>

      <Box className={classes.time}>
        <p>{time}</p>
      </Box>
    </Box>
  );
};

export default EmailRow;
