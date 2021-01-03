import { Box, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';
import { SELECTED_COLOR } from '../../../../app/constants';
import useColorClasses from '../../../../hooks/style-hooks/useColorClasses';
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
  const selectedColor = SELECTED_COLOR;
  const { active, hover } = useColorClasses(selectedColor);

  const SidebarItemClasses = [
    selected ? `${classes.itemActive} ${active}` : `${hover}`,
    classes.item,
  ].join(' ');

  return (
    <ListItem button className={`${SidebarItemClasses}`}>
      <ListItemIcon className={`${classes.itemIcon}`}>
        <Icon color={selected ? selectedColor : 'inherit'} />
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
