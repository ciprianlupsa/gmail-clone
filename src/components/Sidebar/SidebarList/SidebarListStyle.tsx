import { makeStyles, Theme } from '@material-ui/core';

const useSidebarListStyle = makeStyles((theme: Theme) => ({
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1, 0),
  },
  listHeading: {
    paddingLeft: theme.spacing(3),
    fontWeight: 700,
  },
}));

export default useSidebarListStyle;
