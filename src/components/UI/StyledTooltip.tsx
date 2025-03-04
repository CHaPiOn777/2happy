"use client";

import { Tooltip, ITooltipController } from "react-tooltip";

const StyledTooltip = ({ ...props }: ITooltipController) => {
  return (
    <Tooltip
      className="!rounded-none !text-button-xs whitespace-pre-line"
      place="bottom-end"
      {...props}
    />
  );
};

export default StyledTooltip;
