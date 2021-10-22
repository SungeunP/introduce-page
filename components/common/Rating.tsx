import React from "react";

import styles from "components/common/Rating.module.scss";

export enum Ratings {
  learning = 1,
  learned = 2,
  sideProject = 3,
  exportToService = 4,
  expert = 5,
}
interface IRating {
  rate: Ratings;
}

const MAX_RATE = Ratings.expert;
const Rating = ({ rate }: IRating) => {
  const dotArray = [...Array(MAX_RATE).keys()];
  return (
    <div className={styles.rating}>
      {dotArray.map((dotIdx) => (
        <div
          key={dotIdx}
          className={`${styles.dot} ${rate > dotIdx ? styles.activated : ""}`}
        />
      ))}
    </div>
  );
};

export default Rating;
