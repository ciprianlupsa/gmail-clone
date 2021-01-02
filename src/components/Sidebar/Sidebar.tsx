import React, { useState } from 'react';

import { Avatar, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { SidebarMainSchema } from './SidebarList/ListItems';
import SidebarList from './SidebarList/SidebarList';
import { SidebarListGroup } from './SidebarList/SidebarListGroup.model';

import useSidebarStyle from './SidebarStyle';

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

      {lists.map((list: SidebarListGroup) => {
        return <SidebarList key={list.id} {...list} />;
      })}
    </section>
  );
};

export default Sidebar;
