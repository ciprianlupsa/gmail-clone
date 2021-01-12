import React, { SyntheticEvent } from 'react';

import { Box, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectActiveListType,
  setActiveListType,
} from '../../../../app/slices/EmailListSlice';

import { SELECTED_COLOR } from '../../../../app/constants';

import useColorClasses from '../../../../hooks/style-hooks/useColorClasses';
import { SidebarListItem } from './SidebarItem.model';
import useSidebarItemStyle from './SidebarItemStyle';
import { useHistory } from 'react-router';

// type ActiveProps = { color?: string };

const SidebarItem: React.FC<SidebarListItem> = ({ text, Icon, count }) => {
  const classes = useSidebarItemStyle();
  const { active, hover } = useColorClasses(SELECTED_COLOR);

  const dispatch = useDispatch();
  const history = useHistory();
  const activeListType = useSelector(selectActiveListType);
  const selected = activeListType === text;

  const SidebarItemClasses = [
    selected ? `${classes.itemActive} ${active}` : `${hover}`,
    classes.item,
  ].join(' ');

  const clickedItem = ($event: SyntheticEvent) => {
    $event.stopPropagation();
    history.push({
      pathname: '/',
      search: `?list=${text}`,
    });
    dispatch(setActiveListType(text));
  };

  return (
    <ListItem onClick={clickedItem} button className={`${SidebarItemClasses}`}>
      <ListItemIcon className={`${classes.itemIcon}`}>
        <Icon color={selected ? SELECTED_COLOR : 'inherit'} />
      </ListItemIcon>
      <ListItemText
        primary={
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              component="span"
              fontWeight={count ? 'fontWeightBold' : 'fontWeightRegular'}
            >
              {text}
            </Box>
            {count && (
              <Box component="span" fontWeight="fontWeightBold">
                {count}
              </Box>
            )}
          </Box>
        }
      />
    </ListItem>
  );
};

export default SidebarItem;
