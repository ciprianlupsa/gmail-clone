import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { makeStyles, Theme, IconButton } from '@material-ui/core';

const useIconButtonTooltipStyle = makeStyles((theme: Theme) => ({
  iconButton: {
    marginRight: theme.spacing(1),
  },
}));

export default useIconButtonTooltipStyle;
