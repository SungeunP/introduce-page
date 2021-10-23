import React from "react";

import classnames from "classnames";
import styles from "./Typography.module.scss";

export enum TypographyTypes {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
}

const getClassnameByType = (type: TypographyTypes) => {
  switch (type) {
    case TypographyTypes.h1:
      return styles.h1;
    case TypographyTypes.h2:
      return styles.h2;
    case TypographyTypes.h3:
      return styles.h3;
    case TypographyTypes.h4:
      return styles.h4;
    case TypographyTypes.h5:
      return styles.h5;
    case TypographyTypes.h6:
      return styles.h6;
    default:
      return "";
  }
};

interface ITypography {
  type?: TypographyTypes;
  value?: string;
  children?: unknown;
  bold?: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  style?: {};
  className?: string;
}
const Typography = ({
  type,
  value,
  children,
  bold = false,
  style,
  className,
}: ITypography) => {
  const classNames = classnames(styles.typography, className || "");
  let inheritanceProperties = {
    className: classNames,
    style,
  };

  if (bold) {
    // Add bold styles
    inheritanceProperties = {
      ...inheritanceProperties,
      className: `${inheritanceProperties.className} ${styles.bold}`,
    };
  }

  const targetValue = value || children;
  if (type) {
    inheritanceProperties = {
      ...inheritanceProperties,
      className: `${inheritanceProperties.className} ${getClassnameByType(
        type,
      )}`,
    };
    switch (type) {
      case TypographyTypes.h1:
        return <h1 {...inheritanceProperties}>{targetValue}</h1>;
      case TypographyTypes.h2:
        return <h2 {...inheritanceProperties}> {targetValue} </h2>;
      case TypographyTypes.h3:
        return <h3 {...inheritanceProperties}> {targetValue} </h3>;
      case TypographyTypes.h4:
        return <h4 {...inheritanceProperties}> {targetValue} </h4>;
      case TypographyTypes.h5:
        return <h5 {...inheritanceProperties}> {targetValue} </h5>;
      case TypographyTypes.h6:
        return <h6 {...inheritanceProperties}> {targetValue} </h6>;
      default:
    }
  }

  return <p {...inheritanceProperties}> {targetValue} </p>;
};

export default Typography;
