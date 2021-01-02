import { makeStyles, Theme } from '@material-ui/core';

const activeOrHover = (theme: Theme) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.primary.light,
  borderTopRightRadius: theme.spacing(5),
  borderBottomRightRadius: theme.spacing(5),
});

const useSidebarItemStyle = makeStyles((theme: Theme) => ({
  item: {
    '&:hover': {
      ...activeOrHover(theme),
    },
  },
  itemActive: { ...activeOrHover(theme) },
  itemIcon: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

export default useSidebarItemStyle;
