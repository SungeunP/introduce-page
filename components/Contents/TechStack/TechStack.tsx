import React from "react";
import Image from "next/image";

import styles from "components/Contents/TechStack/TechStack.module.scss";
import Typography, {
  TypographyTypes,
} from "components/StyledComponents/Typography/Typography";
import Rating, { Ratings } from "components/common/Rating";
import { allTechStack, Tech } from "types/Tech";

const TechStackData: Array<Tech> = allTechStack;

const TechStack = () => {
  return (
    <article className={styles.tech_stack}>
      <Typography type={TypographyTypes.h3} value="Tech stack" bold />
      {TechStackData.map((stack) => (
        <div key={stack.id} className={styles.stack}>
          <Image
            src={`/introduce-page${stack.imgUrl}`}
            alt={stack.name}
            width={100}
            height={100}
            className={styles.image}
          />
          <div style={{ marginTop: 8 }} />
          <Rating rate={stack.expert} />
          <div style={{ marginTop: 8 }} />
          <Typography
            value={stack.description}
            className={styles.description}
          />
        </div>
      ))}
    </article>
  );
};

export default TechStack;
