import { Tech } from "./Tech";

let projectIndex = 0;
const addProjectIndex = () => {
  projectIndex += 1;
  return projectIndex;
};

export type TProject = {
  id: number;
  name: string;
};

export class Project {
  id: number;

  name: string;

  usedTechs: Array<Tech>;

  externalLink: string;

  description?: () => unknown;

  constructor(
    name: string,
    usedTechs: Array<Tech>,
    externalLink: string,
    description?: () => unknown,
  ) {
    this.id = addProjectIndex();
    this.name = name;
    this.usedTechs = usedTechs;
    this.externalLink = externalLink;
    this.description = description;
  }
}
