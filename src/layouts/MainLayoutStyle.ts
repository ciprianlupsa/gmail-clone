import { makeStyles, Theme } from '@material-ui/core';

const useMainLayoutStyle = makeStyles((theme: Theme) => ({
  layoutBody: {
    minHeight: 'calc(100vh - 65px)', //64px = header height + 1px divider, make this dynamic
  },
  layoutPage: {
    height: `calc(100vh - 65px - ${theme.spacing(2)}px)`,
    overflow: 'hidden',
  },
}));

export default useMainLayoutStyle;
