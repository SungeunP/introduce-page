import React from "react";

// styled components
import Typography, {
  TypographyTypes,
} from "components/StyledComponents/Typography/Typography";

import styles from "components/Contents/Title.module.scss";

const Title = () => (
  <>
    <Typography
      type={TypographyTypes.h3}
      value="Front-end Developer"
      className={styles.sub_title}
    />
    <Typography
      type={TypographyTypes.h1}
      value="PARK SEONGEUN"
      bold
      className={styles.title}
    />
  </>
);

export default Title;
