let listItemIndex = 0;
const addListItemIndex = () => {
  listItemIndex += 1;
  return listItemIndex;
};

export type Infomation = {
  id: number;
  name: string;
  startDate: Date;
  endDate?: Date | string;
  description: () => unknown | string;
  children?: React.ReactNode;
};

export class ClassInfomation {
  id: number;

  name: string;

  startDate: Date;

  endDate?: Date;

  description: () => unknown | string;

  constructor(name, description, startDate, endDate?) {
    this.id = addListItemIndex();
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
