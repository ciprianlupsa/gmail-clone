import { makeStyles, Theme } from '@material-ui/core';

const useSidebarStyle = makeStyles((theme: Theme) => ({
  compose: {
    margin: theme.spacing(2),
    color: theme.palette.grey[700],
    paddding: theme.spacing(4),
    boxShadow: theme.shadows[2],
    borderRadius: theme.spacing(4),
    fontWeight: 600,
  },
  composeAvatar: {
    marginRight: theme.spacing(1),
    height: theme.spacing(4),
    width: theme.spacing(4),
  },
}));

export default useSidebarStyle;
