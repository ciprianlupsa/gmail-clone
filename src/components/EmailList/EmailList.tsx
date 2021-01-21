import React, { useEffect } from 'react';

import { Box, LinearProgress } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectGetEmailsStatus,
  selectEmails,
  selectActiveListType,
} from '../../app/slices/EmailListSlice';
import { getEmails } from '../../app/slices/EmailListSlice/GetEmailsThunk';

import { FixedSizeList as List } from 'react-window';
import EmailListCategories from './EmailListCategories/EmailListCategories';
import EmailListSettings from './EmailListSettings/EmailListSettings';
import EmailRow from './EmailRow/EmailRow';

import useQueryParams from '../../hooks/useQueryParams';
import { SIdebarItemType } from '../../types/sidebar';

const EmailList: React.FC = () => {
  const emails = useSelector(selectEmails);
  const activeListType = useSelector(selectActiveListType);
  const { loading } = useSelector(selectGetEmailsStatus);
  const queryParams = useQueryParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (queryParams.list)
      dispatch(getEmails(queryParams.list as SIdebarItemType));
    else dispatch(getEmails(activeListType as SIdebarItemType));
  }, [queryParams]);

  return (
    <>
      <Box
        position="sticky"
        width="100%"
        top={0}
        zIndex="100"
        style={{ backgroundColor: '#fafafa' }}
      >
        <EmailListSettings />
      </Box>
      {loading && (
        <Box>
          <LinearProgress />
        </Box>
      )}
      {activeListType === 'Inbox' && <EmailListCategories />}
      {/* <AutoSizer>
        {(sizerProps: { height: number; width: number }) => ( */}
      <List height={800} width={'100%'} itemCount={emails.length} itemSize={50}>
        {EmailRow}
      </List>
      {/* )}
      </AutoSizer> */}
    </>
  );
};

export default EmailList;
