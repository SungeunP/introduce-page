import React from "react";

import styles from "components/Contents/TechStack.module.scss";
import Typography from "components/StyledComponents/Typography/Typography";

type techStack = {
  imgPath: string;
  name: string;
  expert: number;
  description: string;
};
const TechStackData = [
  {
    imgPath: "/public/images/",
    name: "ES6",
    expert: 5,
    description: "현업 적용경험 다수",
  },
];

const TechStack = () => {
  return (
    <article className={styles.tech_stack}>
      <div className={styles.stack}>
        <Typography value="Stack 1" />
      </div>
    </article>
  );
};

export default TechStack;
