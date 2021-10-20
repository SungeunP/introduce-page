import React from "react";

import classnames from "classnames";

import styles from "components/common/Divider.module.scss";

export enum axisTypes {
  vertical = "vertical",
  horizontal = "horizontal",
}

interface IDivider {
  axis: axisTypes;
}
const Divider = ({ axis = axisTypes.vertical }: IDivider) => {
  const isVertical = axis === axisTypes.vertical;
  const className = classnames(styles.divider, {
    [styles.ver]: isVertical,
    [styles.hor]: !isVertical,
  });

  return <div className={className} />;
};

export default Divider;
