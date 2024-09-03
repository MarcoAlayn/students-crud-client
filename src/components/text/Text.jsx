import React from "react";
import { Tooltip, Typography } from "@mui/material";
import colors from "../../utils/colors";

const Text = ({ textTemplate, children, tooltipText }) => {
  const textTemplates = {
    subtitle: (
      <Tooltip title={tooltipText}>
        <Typography color={colors.gray} variant='h6'>
          {children}
        </Typography>
      </Tooltip>
    ),
    moduleTitle: (
      <Tooltip title={tooltipText}>
        <Typography color={colors.gray} variant='subtitle1'>
          {children}
        </Typography>
      </Tooltip>
    ),
  };

  return textTemplates[textTemplate] || null;
};

export default Text;
