import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { Box, Checkbox } from '@material-ui/core';
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons';

import useColorClasses from '../../../hooks/style-hooks/useColorClasses';
import useEmailRowStyle from './EmailRowStyle';

import IconButtonTooltip from '../../IconButtonTooltip/IconButtonTooltip';
import {
  selectEmailByIndex,
  updateEmail,
} from '../../../app/slices/EmailListSlice';
import useUpdateEmail from '../../../hooks/useUpdateEmail';
import { areEqual, ListChildComponentProps } from 'react-window';
import memoizeOne from 'memoize-one';
import {
  selectEmailSelected,
  toggleSelectedValue,
} from '../../../app/slices/SelectedEmails';

const EmailRow: React.FC<ListChildComponentProps> = ({ index, style }) => {
  const {
    id,
    from,
    subject,
    body,
    timestamp,
    starred,
    important,
    read,
  } = useSelector(selectEmailByIndex(index));
  const selected = useSelector(selectEmailSelected(id));

  const history = useHistory();
  const dispatch = useDispatch();

  const classes = useEmailRowStyle();
  const warning = useColorClasses('warning');

  const updateEmailByClick = useUpdateEmail(dispatch);

  const handleSelected = ($event: React.ChangeEvent<HTMLInputElement>) => {
    $event.stopPropagation();
    const value = $event.target.checked;
    dispatch(toggleSelectedValue({ id, value }));
  };

  const isReadWeight = read ? 'fontWeightLight' : 'fontWeightBold';

  return (
    <Box
      style={style}
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
          checked={selected}
          onChange={handleSelected}
          // inputProps={{ 'aria-label': 'Select email' }}
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
            important ? '' : 'Click to teach Gmail that this email is important'
          }
          action={($e) => updateEmailByClick($e, { important: !important }, id)}
        >
          <LabelImportantOutlined
            className={important ? warning.colorMain : ''}
          />
        </IconButtonTooltip>
      </Box>

      <Box pr={1} display="flex" alignItems="center" justifyContent="center">
        <Box fontWeight={isReadWeight} component="h4" className={classes.title}>
          {from}
        </Box>
      </Box>

      <Box display="flex" alignItems="center" flex={0.6}>
        <Box
          fontWeight={isReadWeight}
          component="h4"
          className={classes.subject}
        >
          {subject}
          <span className={classes.description}> - {body}</span>
        </Box>
      </Box>

      <Box flex={0.4} className={classes.time}>
        <p>{timestamp}</p>
      </Box>
    </Box>
  );
};

export default EmailRow;
