import React from "react";
import GridCell from "components/common/GridCell";
import Typography, {
  TypographyTypes,
} from "components/StyledComponents/Typography/Typography";

const Time = () => {
  const dayString = "Sat";
  const timeString = "21 October 9";

  return (
    <GridCell>
      <div>
        <Typography type={TypographyTypes.h4} value={dayString} />
        <Typography type={TypographyTypes.h4} value={timeString} />
      </div>
    </GridCell>
  );
};

export default Time;
