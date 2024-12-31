import React from "react";

import styles from "components/Contents/EducationCertificate/EducationCertificate.module.scss";
import Typography, {
  TypographyTypes,
} from "components/StyledComponents/Typography/Typography";
import Divider, { axisTypes } from "components/common/Divider";

import { ClassInfomation } from "types/Infomation";
import Infomation from "components/common/Infomation";

const educationsData: Array<ClassInfomation> = [
  new ClassInfomation(
    "Semyeong computer high school",
    "Department of security solution",
    new Date("2015-03-04"),
    new Date("2018-03-04"),
  ),
  new ClassInfomation(
    "Korea cyber univ",
    "Department of software engineering",
    new Date("2018-03-04"),
    new Date("2024-02-03"),
  ),
  new ClassInfomation(
    "Hongik univ",
    "Department of engineering",
    new Date("2024-03-04"),
    "current",
  ),
];

const certificatesData: Array<ClassInfomation> = [
  new ClassInfomation(
    "Engineer Information Processing",
    "HRDK(Human Resources Development Service of Korea)",
    new Date("2016-12"),
  ),
  new ClassInfomation(
    "Craftsman Information Equipment Operation",
    "HRDK(Human Resources Development Service of Korea)",
    new Date("2017-12"),
  ),
];

const EducationCertificate = () => {
  return (
    <article className={styles.education_certificate}>
      <Typography type={TypographyTypes.h3} className={styles.title} bold>
        Education <Typography style={{ display: "inline-block" }}>&</Typography>{" "}
        Certificate
      </Typography>

      <ul>
        {educationsData.map((educationData) => (
          <ListItem key={educationData.id}>
            <Infomation {...educationData} />
          </ListItem>
        ))}
      </ul>
      <Divider axis={axisTypes.vertical} />
      <ul>
        {certificatesData.map((certificateData) => (
          <ListItem key={certificateData.id}>
            <Infomation {...certificateData} />
          </ListItem>
        ))}
      </ul>
    </article>
  );
};

const ListItem = ({ children }) => (
  <li className={styles.content_item}>{children}</li>
);

export default EducationCertificate;
