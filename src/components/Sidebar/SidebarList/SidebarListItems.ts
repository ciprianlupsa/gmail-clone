import React from 'react';
import { SidebarListItem } from './SidebarItem/SidebarItem.model';

import { StarBorder } from '@material-ui/icons';
import InboxIcon from '@material-ui/icons/Inbox';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import ItterableList from '../../../classes/ItterableList';

const SidebarListItems: Array<ItterableList<SidebarListItem>> = [
  new ItterableList<SidebarListItem>(
    [
      new SidebarListItem('Inbox', InboxIcon, undefined, 15, true),
      new SidebarListItem('Starred', StarBorder),
      new SidebarListItem('Snoozed', QueryBuilderIcon),
      new SidebarListItem('Sent', SendIcon),
      new SidebarListItem('Drafts', InsertDriveFileIcon, undefined, 1),
    ],
    null
  ),
  new ItterableList<SidebarListItem>(
    [
      new SidebarListItem('New meeting', VideocamIcon),
      new SidebarListItem('Join meeting', KeyboardIcon),
    ],
    'Meet'
  ),
  new ItterableList<SidebarListItem>([], 'Hangouts'),
];

export default SidebarListItems;
