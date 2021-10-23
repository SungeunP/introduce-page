import Typography, {
  TypographyTypes,
} from "components/StyledComponents/Typography/Typography";
import React from "react";
import styles from "components/Contents/Projects/Projects.module.scss";
import { techReact, Tech, techES6, techSpring, techRedux } from "types/Tech";
import { Project } from "types/Project";
import ReadMore from "components/common/ReadMore";
import ProjectArticle from "./ProjectArticle";

const TitleProject: Project = new Project(
  "Chatbot platform",
  [techReact, techRedux, techSpring],
  "https://mirchat.kr",
);

const Projects = () => {
  return (
    <article className={styles.projects}>
      <Typography
        value="Projects"
        type={TypographyTypes.h3}
        bold
        className={styles.title}
      />
      <ProjectArticle
        title={TitleProject.name}
        techs={TitleProject.usedTechs}
        link={TitleProject.externalLink}
      >
        <Typography>
          웹 사이트에 방문하는 고객을 응대하기 위한 챗봇을 내 의도대로 제작하여
          배포할 수 있는 플랫폼 프로젝트를 진행하였습니다.
        </Typography>
        <Typography>
          프로젝트 초기부터 담당하여 Spring MVC 기반의 백엔드를 구성하였고 추후
          프론트엔드 개발을 진행하게 되었습니다.
        </Typography>
        <Typography>
          주요 기술 과제는 챗봇의 대화 흐름을 어떻게 정의할 것인가, 대화 흐름
          데이터를 어떻게 visualization할 것인가, 대화 주제에 따른 다양한 채팅
          메시지 레이아웃을 어떻게 customization할 것인가 등이 있었습니다.
        </Typography>
        <Typography>
          React, Redux, d3 기반 데이터 visualization 라이브러리를 사용하여 해당
          과제를 해결할 수 있었습니다.
          <ReadMore link={TitleProject.externalLink} />
        </Typography>
      </ProjectArticle>
    </article>
  );
};

export default Projects;
