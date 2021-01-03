import React, { ReactElement } from 'react';

import { IconButton, Tooltip } from '@material-ui/core';

type IconButtonSize = 'small' | 'medium' | undefined;

interface IconButtonTooltipProps {
  tooltip: string;
  children: ReactElement;
  size?: 'small' | 'large' | undefined;
  action?: () => void;
}

// Children: only ONE react element
const IconButtonTooltip: React.FC<IconButtonTooltipProps> = ({
  tooltip,
  size,
  children,
  action,
}) => {
  const iconButtonSize: IconButtonSize = size === 'large' ? 'medium' : size;

  return (
    <Tooltip title={tooltip}>
      <IconButton onClick={action} size={iconButtonSize}>
        {React.cloneElement(children, { size })}
      </IconButton>
    </Tooltip>
  );
};

export default IconButtonTooltip;
