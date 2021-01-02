import { v4 as uuid } from 'uuid';

export default class UniqueObject {
  public id: string;

  constructor() {
    this.id = uuid();
  }
}
