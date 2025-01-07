import Typography, {
  TypographyTypes,
} from "components/StyledComponents/Typography/Typography";
import React from "react";
import { ClassInfomation } from "types/Infomation";

import styles from "components/common/Infomation.module.scss";

const Infomation = ({
  id,
  name,
  startDate,
  endDate,
  description,
}: ClassInfomation) => {
  const getDateString = (date: Date) => {
    if (typeof date === "string") {
      return date;
    }
    if (!date) {
      return "";
    }
    if (!date) {
      return "current";
    }
    const year = date.getFullYear();
    const month =
      date.getMonth() + 1 <= 9 ? `0${date.getMonth()}` : date.getMonth() + 1;
    const day = date.getDate() <= 9 ? `0${date.getDate()}` : date.getDate();

    return `${year}.${month}.${day}`;
  };

  const startDateString = getDateString(startDate);
  const endDateString = getDateString(endDate);

  return (
    <>
      <Typography type={TypographyTypes.h4} style={{ display: "inline-block" }}>
        {name}
      </Typography>
      <p className={styles.date_range}>
        {startDateString}
        {endDateString ? ` - ${endDateString}` : ""}
      </p>
      {/* <Typography type={TypographyTypes.h5} className={styles.date_range}>
        {startDateString}
        {endDateString ? ` - ${endDateString}` : ""}
      </Typography> */}
      {typeof description === "string" ? description : description()}
    </>
  );
};

export default Infomation;
