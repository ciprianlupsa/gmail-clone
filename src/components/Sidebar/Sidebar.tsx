import React, { useState } from 'react';

import { Avatar, Box, Button, IconButton } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';

import { SidebarMainSchema } from './SidebarList/ListItems';
import SidebarList from './SidebarList/SidebarList';

import useSidebarStyle from './SidebarStyle';
import ItterableList from '../../classes/ItterableList';
import { SidebarListItem } from './SidebarList/SidebarItem.model';

const Sidebar: React.FC = () => {
  const [lists] = useState(SidebarMainSchema);

  const classes = useSidebarStyle();

  return (
    <section>
      <Button className={classes.compose} size="large">
        <Avatar
          className={classes.composeAvatar}
          src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
          alt="Compose Email"
        />
        Compose
      </Button>

      {lists.map((list: ItterableList<SidebarListItem>) => {
        return <SidebarList key={list.id} {...list} />;
      })}

      <Box display="flex" justifyContent="center" alignItems="center">
        <IconButton>
          <PersonIcon></PersonIcon>
        </IconButton>
        <IconButton>
          <DuoIcon></DuoIcon>
        </IconButton>
        <IconButton>
          <PhoneIcon></PhoneIcon>
        </IconButton>
      </Box>
    </section>
  );
};

export default Sidebar;
