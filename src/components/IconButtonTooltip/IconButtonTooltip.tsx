import React, { ReactElement, SyntheticEvent, memo } from 'react';

import { Box, IconButton, Tooltip } from '@material-ui/core';

import useIconButtonTooltipStyle from './IconButtonTooltipStyle';

type IconButtonSize = 'small' | 'medium' | undefined;

interface IconButtonTooltipProps {
  tooltip: string;
  children: ReactElement;
  size?: 'small' | 'large' | undefined;
  action?: ($event: SyntheticEvent) => void;
}

// Children: only ONE react element
const IconButtonTooltip: React.FC<IconButtonTooltipProps> = ({
  tooltip,
  size,
  children,
  action,
}) => {
  const iconButtonSize: IconButtonSize = size === 'large' ? 'medium' : size;
  const classes = useIconButtonTooltipStyle();

  return (
    <Tooltip title={tooltip}>
      <IconButton
        className={classes.iconButton}
        onClick={action}
        size={iconButtonSize}
      >
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default React.memo(IconButtonTooltip);
