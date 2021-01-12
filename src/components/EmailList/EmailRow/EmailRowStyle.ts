import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { makeStyles, Theme } from '@material-ui/core';

const columnCommon = (theme: Theme): CSSProperties => ({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
});

const useEmailRowStyle = makeStyles((theme: Theme) => ({
  container: {
    cursor: 'pointer',
    '&:hover': {
      boxShadow: theme.shadows[1],
    },
  },
  subject: {
    width: '60vw',
    fontSize: '14px',
    ...columnCommon(theme),
  },
  description: {
    fontSize: '12px',
    fontWeight: 'normal',
    color: theme.palette.grey[600],
  },
  title: {
    fontSize: '12px',
  },
  time: {
    paddingRight: theme.spacing(1),
    fontSize: '12px',
  },
}));

export default useEmailRowStyle;
