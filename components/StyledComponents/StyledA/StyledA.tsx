import React from "react";

const StyledA = (props) => (
  <a {...props} target="_blank" rel="noreferrer noopener">
    {/* eslint-disable-next-line react/destructuring-assignment */}
    {props.children}
  </a>
);

export default StyledA;
