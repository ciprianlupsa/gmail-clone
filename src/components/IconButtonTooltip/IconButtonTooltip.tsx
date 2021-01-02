import React, { ReactElement } from 'react';

import { IconButton, Tooltip } from '@material-ui/core';

type IconButtonSize = 'small' | 'medium' | undefined;

interface IconButtonTooltipProps {
  tooltip: string;
  size?: 'small' | 'large' | undefined;
  children: ReactElement;
}

// Children: only ONE react element
const IconButtonTooltip: React.FC<IconButtonTooltipProps> = ({
  tooltip,
  size,
  children,
}) => {
  const iconButtonSize: IconButtonSize = size === 'large' ? 'medium' : size;

  return (
    <Tooltip title={tooltip}>
      <IconButton size={iconButtonSize}>
        {React.cloneElement(children, { size })}
      </IconButton>
    </Tooltip>
  );
};

export default IconButtonTooltip;
