import React from "react";
import Typography, {
  TypographyTypes,
} from "components/StyledComponents/Typography/Typography";

import GridCell from "components/common/GridCell";

const Icon = () => (
  <GridCell>
    <Typography type={TypographyTypes.h4} value="Icon Displayed" />
  </GridCell>
);

export default Icon;
