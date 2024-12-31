import Typography, {
  TypographyTypes,
} from "components/StyledComponents/Typography/Typography";
import React from "react";

import styles from "components/Contents/ExternalLinks/ExternalLinks.module.scss";
import { ClassExternalLink } from "types/ExternalLink";
import StyledA from "components/StyledComponents/StyledA/StyledA";

const ExternalLinksData: Array<ClassExternalLink> = [
  new ClassExternalLink(
    "Dev blog",
    "https://dev-son.tistory.com",
    "프론트엔드에 대한 글을 작성, 기록",
  ),
  new ClassExternalLink(
    "GitHub",
    "https://github.com/SungeunP",
    "모든 프로젝트 활동.",
  ),
  new ClassExternalLink(
    "Notion resume",
    "https://www.notion.so/Seongeun-Park-2726443951614161a35954e98fb31fbb",
    "Notion에서 작성된 이력서.",
  ),
];

const titleStyle = {
  lineHeight: "64px",
};
const ExternalLinks = () => {
  return (
    <>
      <Typography
        type={TypographyTypes.h1}
        value="External Links"
        bold
        className={styles.title}
        style={titleStyle}
      />
      <ul className={styles.content}>
        {ExternalLinksData.map((ExternalLinkData) => (
          <ExternalLink key={ExternalLinkData.id} {...ExternalLinkData} />
        ))}
      </ul>
    </>
  );
};

const ExternalLink = ({ name, link, description }: ClassExternalLink) => (
  <li>
    <Typography type={TypographyTypes.h4}>
      <StyledA href={link}>{name}</StyledA>
    </Typography>
    <Typography style={{ marginTop: 4 }}>{description}</Typography>
  </li>
);

export default ExternalLinks;
