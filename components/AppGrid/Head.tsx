import Icon from "components/Contents/Icon";
import Title from "components/Contents/Title";
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
      <div>Cell 3</div>
    </div>
  );
};

export default Head;
