import Icon from "components/Contents/Icon";
import Time from "components/Contents/Time";
import Title from "components/Contents/Title/Title";
import React from "react";
import styles from "styles/Head.module.scss";

const Head = () => {
  return (
    <div className={styles.head}>
      <div>
        <Icon />
      </div>
      <div>
        <Title />
      </div>
      <div>
        <Time />
      </div>
    </div>
  );
};

export default Head;
