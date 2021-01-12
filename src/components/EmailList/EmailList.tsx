import React, { useEffect } from 'react';

import { Box, LinearProgress } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import {
  getEmails,
  selectGetEmailsStatus,
  selectEmails,
  selectActiveListType,
} from '../../app/slices/EmailListSlice';

import { Email } from '../../types/email';
import EmailRow from './EmailRow/EmailRow';

import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import EmailListCategories from './EmailListCategories/EmailListCategories';
import EmailListSettings from './EmailListSettings/EmailListSettings';
import useQueryParams from '../../hooks/useQueryParams';
import memoize from 'memoize-one';

const EmailList: React.FC = () => {
  const emails = useSelector(selectEmails);
  const activeListType = useSelector(selectActiveListType);
  const { loading } = useSelector(selectGetEmailsStatus);
  const queryParams = useQueryParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (queryParams.list) dispatch(getEmails(queryParams.list));
    else dispatch(getEmails(activeListType));
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
