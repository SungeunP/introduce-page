import StyledA from "components/StyledComponents/StyledA/StyledA";
import React from "react";

interface IReadMore {
  link: string;
}
const style = {
  marginLeft: 4,
};
const ReadMore = ({ link }: IReadMore) => {
  return (
    <StyledA href={link} style={style}>
      more
    </StyledA>
  );
};

export default ReadMore;
