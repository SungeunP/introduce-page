import Typography, {
  TypographyTypes,
} from "components/StyledComponents/Typography/Typography";
import React, { useState } from "react";
import { ClassCareer } from "types/Career";

import styles from "components/Contents/Careers/Careers.module.scss";

const CareerDatas: Array<ClassCareer> = [
  new ClassCareer(
    "Forcewin",
    () => (
      <>
        <Typography>
          고등학교 3학년 후반기에 취업하여 산업기능요원으로 근무하였습니다.
        </Typography>
        <Typography>
          챗봇 프로젝트를 본 사에서 진행하였으며 Spring framework, Front-end
          기초 스택부터 Nodejs, React의 기술 스택을 활용했습니다.
        </Typography>
        <Typography>
          Back-end부터 Front-end까지 담당 개발자로써 근무하며 웹 기술 스택을
          쌓았습니다.
        </Typography>
      </>
    ),
    new Date("2017-09-04"),
    new Date("2021-10-17"),
  ),
];

const Careers = () => {
  const [nowJobHunting, setJobHunting] = useState(true);

  return (
    <>
      <Typography type={TypographyTypes.h3} bold className={styles.title}>
        Careers
      </Typography>
      <ul className={styles.career_list}>
        <ListItem>
          <CareerArticle {...CareerDatas[0]} />
        </ListItem>
        {nowJobHunting && (
          <ListItem>
            <NowJobHunting />
          </ListItem>
        )}
      </ul>
    </>
  );
};

const ListItem = ({ children }) => (
  <li className={styles.career_item}>{children}</li>
);

const workingDayStyle = {
  display: "inline-block",
  marginLeft: 8,
};
const CareerArticle = ({
  name,
  description,
  startDate,
  endDate,
}: ClassCareer) => {
  const getDateString = (date: Date) => {
    const year = date.getFullYear();
    const month =
      date.getMonth() + 1 <= 9 ? `0${date.getMonth()}` : date.getMonth() + 1;
    const day = date.getDate() <= 9 ? `0${date.getDate()}` : date.getDate();

    return `${year}.${month}.${day}`;
  };

  const startDateString = getDateString(startDate);
  const endDateString = getDateString(endDate);

  return (
    <>
      <Typography type={TypographyTypes.h4}>
        {name}
        <Typography type={TypographyTypes.h5} style={workingDayStyle}>
          {startDateString} - {endDateString}
        </Typography>
      </Typography>
      {description()}
    </>
  );
};

const NowJobHunting = () => (
  <Typography type={TypographyTypes.h3} style={{ textAlign: "center" }}>
    Now job hunting!
  </Typography>
);

export default Careers;
