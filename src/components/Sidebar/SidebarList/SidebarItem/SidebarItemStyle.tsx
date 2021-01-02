import { makeStyles, Theme } from '@material-ui/core';

const useSidebarItemStyle = makeStyles((theme: Theme) => ({
  item: {
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
      borderTopRightRadius: theme.spacing(5),
      borderBottomRightRadius: theme.spacing(5),
    },
  },
  itemIcon: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

export default useSidebarItemStyle;
