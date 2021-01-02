import {
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { SidebarListItem } from '../SidebarItem.model';
import useSidebarItemStyle from './SidebarItemStyle';

type ActiveProps = { color?: string };

const SidebarItem: React.FC<SidebarListItem> = ({
  text,
  icon,
  action,
  count,
  selected,
}) => {
  const classes = useSidebarItemStyle();

  const activeColor: ActiveProps = selected ? { color: 'primary.main' } : {};

  return (
    <ListItem button className={classes.item}>
      <ListItemIcon className={classes.itemIcon} {...activeColor}>
        {icon}
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
              {...activeColor}
            >
              {text}
            </Box>
            {count && (
              <Box
                component="span"
                fontWeight="fontWeightBold"
                {...activeColor}
              >
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
