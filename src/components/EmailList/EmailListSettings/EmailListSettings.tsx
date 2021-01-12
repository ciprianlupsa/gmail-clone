import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllEmailsBy,
  selectEmailsSelectedValue,
  selectAllEmailsWith,
} from '../../../app/slices/SelectedEmails';

import {
  Box,
  Button,
  Checkbox,
  Divider,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import IconButtonTooltip from '../../IconButtonTooltip/IconButtonTooltip';
import EmailNavigation from '../../EmailNavigation/EmailNavigation';

import { EmailSelectOptions } from './../../../types/email-select-options';

const EmailListSettings = () => {
  const dispatch = useDispatch();
  const emailsSelectedValue = useSelector(selectEmailsSelectedValue);

  const [selectAnchor, setSelectAnchor] = React.useState<null | HTMLElement>(
    null
  );

  const handleEmailsSelected = (
    $event: React.ChangeEvent<HTMLInputElement>
  ) => {
    $event.stopPropagation();
    const value = $event.target.checked;
    dispatch(selectAllEmailsWith(value));
  };

  const handleSelectOption = (option: EmailSelectOptions) => {
    handleMenuClose();
    dispatch(selectAllEmailsBy(option));
  };
  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSelectAnchor(event.currentTarget);
  };
  const handleMenuClose = () => {
    setSelectAnchor(null);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        component="div"
        className="settings"
      >
        <Box>
          <Checkbox
            value={emailsSelectedValue}
            onChange={($e) => handleEmailsSelected($e)}
          />

          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            size="small"
          >
            <ArrowDropDownIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={selectAnchor}
            keepMounted
            open={Boolean(selectAnchor)}
            onClose={handleMenuClose}
          >
            {/* Yeah....this 100% needs to be a component */}
            <MenuItem onClick={() => handleSelectOption('all')}>All</MenuItem>
            <MenuItem onClick={() => handleSelectOption('none')}>None</MenuItem>
            <MenuItem onClick={() => handleSelectOption('read')}>Read</MenuItem>
            <MenuItem onClick={() => handleSelectOption('unread')}>
              Unread
            </MenuItem>
            <MenuItem onClick={() => handleSelectOption('starred')}>
              Starred
            </MenuItem>
            <MenuItem onClick={() => handleSelectOption('unstarred')}>
              Unstarred
            </MenuItem>
          </Menu>

          {/* <IconButtonTooltip size="small" tooltip="Select">
            <ArrowDropDownIcon />
          </IconButtonTooltip> */}
          <IconButtonTooltip size="small" tooltip="Refresh">
            <RedoIcon />
          </IconButtonTooltip>

          <IconButtonTooltip size="small" tooltip="More">
            <MoreVertIcon />
          </IconButtonTooltip>
        </Box>

        <EmailNavigation />
      </Box>
      <Divider />
    </>
  );
};

export default EmailListSettings;
