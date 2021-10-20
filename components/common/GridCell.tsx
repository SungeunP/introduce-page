import React from "react";

import styles from "components/common/GridCell.module.scss";

const GridCell = ({ children }) => {
  return <div className={styles.grid_cell}>{children}</div>;
};

export default GridCell;
