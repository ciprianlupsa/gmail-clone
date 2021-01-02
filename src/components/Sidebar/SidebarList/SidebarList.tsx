import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Box, Divider } from '@material-ui/core';
import List from '@material-ui/core/List';

import useSidebarListStyle from './SidebarListStyle';
import SidebarItem from './SidebarItem/SidebarItem';
import { SidebarListItem } from './SidebarItem/SidebarItem.model';
import ItterableList from '../../../classes/ItterableList';

const SidebarList: React.FC<ItterableList<SidebarListItem>> = ({
  id,
  listItems,
  heading,
}) => {
  const classes = useSidebarListStyle();
  const listAriaId = 'sidelist_' + id;

  return (
    <>
      <Box key={id}>
        <List
          component="nav"
          aria-labelledby={listAriaId}
          subheader={
            <ListSubheader
              className={classes.listHeading}
              component="div"
              id={listAriaId}
            >
              {heading}
            </ListSubheader>
          }
          dense
          className={classes.list}
        >
          {listItems.map((itemProps: SidebarListItem) => (
            <SidebarItem key={itemProps.id} {...itemProps} />
          ))}
        </List>
        <Divider />
      </Box>
    </>
  );
};

export default SidebarList;
