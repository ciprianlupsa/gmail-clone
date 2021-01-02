import { makeStyles, Theme } from '@material-ui/core';

const useRightMenuStyle = makeStyles((theme: Theme) => ({
  profile: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

export default useRightMenuStyle;
