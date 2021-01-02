import { IconButton, Tooltip, TooltipProps } from '@material-ui/core';
import React, { ComponentType, LazyExoticComponent, Suspense } from 'react';

interface LazyTooltipButtonProps {
  tooltip: string;
  tooltipProps?: TooltipProps; // don't think i will use this at all but...eh
  icon?: string;
}

const LazyTooltipButton: React.FC<LazyTooltipButtonProps> = ({
  tooltip,
  tooltipProps,
  icon,
}) => {
  const MUIIcon: React.FC = icon
    ? React.lazy(
        () => import(/* webpackIgnore: true */ `@material-ui/icons/${icon}`)
      )
    : () => <></>;

  return (
    <Tooltip title={tooltip} {...tooltipProps}>
      <Suspense fallback={<div></div>}>
        <MUIIcon />
      </Suspense>
    </Tooltip>
  );
};

export default LazyTooltipButton;
