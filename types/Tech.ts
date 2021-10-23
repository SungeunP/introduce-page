import { Ratings } from "components/common/Rating";

let techIndex = 0;
const addTechIndex = () => {
  techIndex += 1;
  return techIndex;
};

export type TTech = {
  id: number;
  imgUrl: string;
  name: string;
  expert: Ratings;
  description: string;
};

export class Tech {
  id: number;

  name: string;

  imgUrl: string;

  expert: Ratings;

  description: string;

  constructor(name, imgUrl, expert, description) {
    this.id = addTechIndex();
    this.name = name;
    this.imgUrl = imgUrl;
    this.expert = expert;
    this.description = description;
  }
}

/**
 * Techs
 */
export const techReact = new Tech(
  "React",
  "/images/React.png",
  Ratings.expert,
  "현업 적용경험 다수",
);
export const techES6 = new Tech(
  "ES6",
  "/images/ES6.png",
  Ratings.expert,
  "현업 적용경험 다수",
);
export const techSass = new Tech(
  "Sass",
  "/images/Sass.svg",
  Ratings.sideProject,
  "사이드 프로젝트 적용 경험",
);
export const techTS = new Tech(
  "TypeScript",
  "/images/TS.png",
  Ratings.sideProject,
  "사이드 프로젝트 적용 경험",
);
export const techNextjs = new Tech(
  "Nextjs",
  "/images/Nextjs.png",
  Ratings.sideProject,
  "사이드 프로젝트 적용 경험",
);
export const techFlutter = new Tech(
  "Flutter",
  "/images/Flutter.png",
  Ratings.learning,
  "학습 진행중",
);
export const techSpring = new Tech(
  "Spring",
  "/images/Spring_oldpaper.png",
  Ratings.exportToService,
  "기본 MVC 구조 현업 적용 경험",
);
export const techPublish = new Tech(
  "Spring",
  "/images/Spring_oldpaper.png",
  Ratings.expert,
  "HTML5, CSS3, figma 등의 퍼블리싱 스킬",
);
export const techRedux = new Tech(
  "Redux",
  "/images/Redux.png",
  Ratings.expert,
  "현업 적용경험 다수",
);
export const techMui = new Tech(
  "Mui",
  "/images/Mui.png",
  Ratings.sideProject,
  "사이드 프로젝트 적용 경험",
);
export const techWPF = new Tech(
  "WPF",
  "/images/Window.png",
  Ratings.exportToService,
  "간단한 툴 B2B 배포 경험",
);

export const allTechStack: Array<Tech> = [
  techES6,
  techReact,
  // techRedux,
  techSass,
  techTS,
  techNextjs,
  techFlutter,
  techSpring,
  techPublish,
];
