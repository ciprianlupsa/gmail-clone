import { makeStyles, Theme } from '@material-ui/core';

const useEmailStyle = makeStyles((theme: Theme) => ({
  mail: {
    minHeight: '100vh',
    position: 'relative',
    // boxShadow: theme.shadows[1],
  },
  mailHeader: {},
  mailHeadingHeader: {
    fontSize: '1.375rem',
    fontWeight: 'normal',
    marginRight: theme.spacing(1),
  },
  replyButton: {
    marginRight: theme.spacing(2),
  },
}));

export default useEmailStyle;
