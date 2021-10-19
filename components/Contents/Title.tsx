import React from "react";

// styled components
import Typography, {
  TypographyTypes,
} from "components/StyledComponents/Typography/Typography";

const Title = () => (
  <>
    <Typography
      type={TypographyTypes.h2}
      value="Front-end Developer"
      bold={false}
    />
    <Typography type={TypographyTypes.h1} value="PARK SEONGEUN" bold />
  </>
);

export default Title;
