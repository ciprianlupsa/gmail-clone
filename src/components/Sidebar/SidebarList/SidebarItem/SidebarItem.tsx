import { Box, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';
import useColorTransform from '../../../../hooks/style-hooks/useColorTransform';
import { SidebarListItem } from './SidebarItem.model';
import useSidebarItemStyle from './SidebarItemStyle';

// type ActiveProps = { color?: string };

const SidebarItem: React.FC<SidebarListItem> = ({
  text,
  Icon,
  action,
  count,
  selected,
}) => {
  const classes = useSidebarItemStyle();
  const transformColors = useColorTransform('primary')();
  const listItemClasses = selected
    ? `${classes.itemActive} ${transformColors.primaryActive}`
    : `${transformColors.primaryHover}`;

  return (
    <ListItem button className={`${classes.item} ${listItemClasses}`}>
      <ListItemIcon className={`${classes.itemIcon}`}>{Icon}</ListItemIcon>
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
