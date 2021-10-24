import Divider, { axisTypes } from "components/common/Divider";
import ReadMore from "components/common/ReadMore";
import VerticalPadding from "components/common/VerticalPadding";
import Careers from "components/Contents/Careers/Careers";
import EducationCertificate from "components/Contents/EducationCertificate/EducationCertificate";
import ExternalLinks from "components/Contents/ExternalLinks/ExternalLinks";
import Greetings from "components/Contents/Greetings/Greetings";
import ProjectArticle from "components/Contents/Projects/ProjectArticle";
import Projects from "components/Contents/Projects/Projects";
import TechStack from "components/Contents/TechStack/TechStack";
import Typography, {
  TypographyTypes,
} from "components/StyledComponents/Typography/Typography";
import React from "react";

import styles from "styles/Body.module.scss";
import { Project } from "types/Project";
import {
  techMui,
  techNextjs,
  techReact,
  techSass,
  techTS,
  techWPF,
} from "types/Tech";

const Body = () => {
  return (
    <div className={styles.body}>
      <section className={styles.section_1}>
        <div>
          <Greetings />
        </div>
        <div>
          <TechStack />
          <Divider axis={axisTypes.vertical} />
          <Projects />
        </div>
      </section>

      <VerticalPadding />

      <section className={styles.section_2}>
        <div>
          <ProjectAtricles />
        </div>
        <Divider axis={axisTypes.horizontal} />
        <div>
          <ExternalLinks />
        </div>
      </section>

      <Divider axis={axisTypes.vertical} />

      <section className={styles.section_3}>
        <div>
          <Careers />
        </div>
        <Divider axis={axisTypes.horizontal} />
        <div>
          <EducationCertificate />
        </div>
      </section>
    </div>
  );
};

const ProjectArticlesData: Array<Project> = [
  new Project(
    "Todo app",
    [techReact, techTS, techSass, techMui],
    "https://sungeunp.github.io/ts-todo-app/",
    () => (
      <>
        <Typography>
          TS 프렉티스를 위해 진행한 React + TS + Sass + Mui 조합의 Todo 앱
          입니다.
        </Typography>
        <Typography>
          주요 기술 과제는 Ts, Sass, Mui를 완전히 적용하는 것입니다.
        </Typography>
        <Typography>
          Typescript의 type과 interface를 객체지향적으로 정의하고 배치하려고
          했습니다.
        </Typography>
        <Typography>
          Mui 를 완전하게 적용하려고 했으며 Mui 컴포넌트를 통한 커스텀
          컴포넌트를 제작하여 사용하였습니다. 그리고 Sass와 Css Module을
          적용하였습니다.
          <ReadMore link="https://sungeunp.github.io/ts-todo-app/" />
        </Typography>
      </>
    ),
  ),
  new Project(
    "Youtube clone",
    [techNextjs],
    "https://github.com/SungeunP/Youtube-clone",
    () => (
      <>
        <Typography>
          평소 자주 사용하는 서비스를 클론해보고자 Nextjs를 도입하여 Youtube
          동영상 서비스를 가볍게 클론 하였습니다.
        </Typography>
        <Typography>
          주요 기술 과제는 Nextjs 프렉티스와 소형 플레이어 구현입니다.
          <ReadMore link="https://github.com/SungeunP/Youtube-clone" />
        </Typography>
      </>
    ),
  ),
  new Project(
    "WPF",
    [techWPF],
    "https://www.notion.so/49b090c9d6814bbf9ad7eff90d8cba7d",
    () => (
      <>
        <Typography>
          B2B 사이드에서 특정 목적을 위해 사용되는 프로그램을 개발하였습니다.
        </Typography>
        <Typography>
          주요 기술 과제는 본문에서 특정 부분을 발췌하여 입력하는 과정을
          심플하고 직관적이게 구현함에 있습니다.
        </Typography>
        <Typography>
          .net의 GUI 플랫폼인 WPF를 이용하여 개발하였습니다.
          <ReadMore link="https://www.notion.so/49b090c9d6814bbf9ad7eff90d8cba7d" />
        </Typography>
      </>
    ),
  ),
];

/**
 * Displayed in middle section
 */
const ProjectAtricles = () => (
  <>
    {ProjectArticlesData.map(
      ({ id, name, usedTechs, externalLink, description }) => (
        <ProjectArticle
          key={id}
          title={name}
          techs={usedTechs}
          link={externalLink}
        >
          {description()}
        </ProjectArticle>
      ),
    )}
  </>
);

export default Body;
