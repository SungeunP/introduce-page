let careerIndex = 0;
const addCareerIndex = () => {
  careerIndex += 1;
  return careerIndex;
};

export type Career = {
  id: number;
  name: string;
  startDate: Date;
  endDate?: Date;
  description: () => unknown;
};

export class ClassCareer {
  id: number;

  name: string;

  startDate: Date;

  endDate?: Date;

  description: () => unknown;

  constructor(name, description, startDate, endDate) {
    this.id = addCareerIndex();
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
