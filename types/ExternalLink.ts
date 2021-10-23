import { Tech } from "./Tech";

let externalLinkIndex = 0;
const addExternalLinkIndex = () => {
  externalLinkIndex += 1;
  return externalLinkIndex;
};

export type TExternalLink = {
  link: string;
  name: string;
  description: string;
};

export class ClassExternalLink {
  id: number;

  link: string;

  name: string;

  description: string;

  constructor(name, link, description) {
    this.id = addExternalLinkIndex();
    this.link = link;
    this.name = name;
    this.description = description;
  }
}
