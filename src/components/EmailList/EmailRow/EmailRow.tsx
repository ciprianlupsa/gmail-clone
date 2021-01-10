import React, { SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { Box, Checkbox } from '@material-ui/core';
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons';

import useColorClasses from '../../../hooks/style-hooks/useColorClasses';
import useEmailRowStyle from './EmailRowStyle';

import { Email } from '../../../types/email';
import IconButtonTooltip from '../../IconButtonTooltip/IconButtonTooltip';
import { updateEmail } from '../../../app/slices/EmailListSlice';
import useUpdateEmail from '../../../hooks/useUpdateEmail';

const EmailRow: React.FC<Partial<Email>> = ({
  id,
  from,
  subject,
  body,
  timestamp,
  starred,
  important,
  selected,
}) => {
  const [checked, setChecked] = React.useState(selected);

  const history = useHistory();
  const dispatch = useDispatch();

  const classes = useEmailRowStyle();
  const warning = useColorClasses('warning');

  const updateEmailByClick = useUpdateEmail(dispatch);

  // const updateEmailByClick = (
  //   $event: SyntheticEvent,
  //   newValue: Partial<Email>
  // ): void => {
  //   $event.stopPropagation();

  //   dispatch(updateEmail(newValue, id));
  // };

  const handleSelected = ($event: React.ChangeEvent<HTMLInputElement>) => {
    $event.stopPropagation();
    const value = $event.target.checked;
    dispatch(updateEmail({ selected: value }, id));
  };

  return (
    <Box
      onClick={() =>
        history.push({
          pathname: '/mail',
          search: `?id=${id}`,
          state: { meta: 'works' },
        })
      }
      className={classes.container}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      height={50}
    >
      <Box display="flex">
        <Checkbox
          checked={checked}
          onChange={handleSelected}
          inputProps={{ 'aria-label': 'Select email' }}
        />

        <IconButtonTooltip
          size="small"
          tooltip={starred ? 'Starred' : 'Not starred'}
          action={($e) => updateEmailByClick($e, { starred: !starred }, id)}
        >
          <StarBorderOutlined className={starred ? warning.colorMain : ''} />
        </IconButtonTooltip>
        <IconButtonTooltip
          size="small"
          tooltip={
            important ? 'Click to teach Gmail that this email is important' : ''
          }
          action={($e) => updateEmailByClick($e, { important: !important }, id)}
        >
          <LabelImportantOutlined
            className={important ? warning.colorMain : ''}
          />
        </IconButtonTooltip>
      </Box>

      <Box pr={1} display="flex" alignItems="center" justifyContent="center">
        <h4 className={classes.title}>{from}</h4>
      </Box>

      <Box display="flex" alignItems="center" flex={0.6}>
        <h4 className={classes.subject}>
          {subject}
          <span className={classes.description}> - {body}</span>
        </h4>
      </Box>

      <Box flex={0.4} className={classes.time}>
        <p>{timestamp}</p>
      </Box>
    </Box>
  );
};

export default EmailRow;
