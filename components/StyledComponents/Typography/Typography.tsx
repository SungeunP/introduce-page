import React from "react";

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
  value: string;
  bold?: boolean;
  style?;
}
const Typography = ({ type, value, bold = false, style }: ITypography) => {
  let inheritanceProperties = {
    className: `${styles.typography}`,
    style,
  };

  if (bold) {
    // Add bold styles
    inheritanceProperties = {
      ...inheritanceProperties,
      className: `${inheritanceProperties.className} ${styles.bold}`,
    };
  }

  if (type) {
    inheritanceProperties = {
      ...inheritanceProperties,
      className: `${inheritanceProperties.className} ${getClassnameByType(
        type,
      )}`,
    };
    switch (type) {
      case TypographyTypes.h1:
        return <h1 {...inheritanceProperties}>{value}</h1>;
      case TypographyTypes.h2:
        return <h2 {...inheritanceProperties}> {value} </h2>;
      case TypographyTypes.h3:
        return <h3 {...inheritanceProperties}> {value} </h3>;
      case TypographyTypes.h4:
        return <h4 {...inheritanceProperties}> {value} </h4>;
      case TypographyTypes.h5:
        return <h5 {...inheritanceProperties}> {value} </h5>;
      case TypographyTypes.h6:
        return <h6 {...inheritanceProperties}> {value} </h6>;
      default:
    }
  }

  return <p> {value} </p>;
};

export default Typography;
