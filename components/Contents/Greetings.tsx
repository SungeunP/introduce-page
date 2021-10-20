import React from "react";
import Typography, {
  TypographyTypes,
} from "components/StyledComponents/Typography/Typography";

import styles from "components/Contents/Greetings.module.scss";

const Greetings = () => {
  return (
    <article className={styles.greetings}>
      <div className={styles.image} />
      <Typography
        type={TypographyTypes.h2}
        value="Park's says"
        bold
        className={styles.title}
      />
      <Typography
        value="안녕하세요 사용자에게 긍정적인 넛지를 하는 프론트엔드 개발자 박성은입니다.
채팅 봇 플랫폼 프로젝트를 초기 백엔드부터 프론트엔드까지 모두 구성하여 제품에 전반적으로 기여한 경험이 있습니다. 이러한 경험으로 인해 단순 프론트엔드 개발이 아닌 사용자의 경험에 긍정적인 영향을 미칠 수 있도록 항상 생각하며 개발하게 되었습니다.
ES6 기반의 코드를 작성하며 React, Typescript, Nextjs, Sass 등의 기술 스택을 다룰 수 있습니다."
      />
    </article>
  );
};

export default Greetings;
