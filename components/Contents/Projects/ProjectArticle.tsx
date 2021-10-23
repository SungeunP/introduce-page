import Typography, {
  TypographyTypes,
} from "components/StyledComponents/Typography/Typography";
import React from "react";

import styles from "components/Contents/Projects/ProjectArticle.module.scss";
import { Tech } from "types/Tech";
import UsedTechs from "./UsedTechs";

interface IProject {
  title: string;
  techs: Array<Tech>;
  link: string;
  children: any;
}
const ProjectArticle = ({ title, techs, link, children }: IProject) => {
  return (
    <section className={styles.project}>
      <Typography value={title} type={TypographyTypes.h4} />
      <div className={styles.content}>
        <div>{children}</div>
        <UsedTechs techs={techs} />
      </div>
    </section>
  );
};

export default ProjectArticle;
