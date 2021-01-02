import { v4 as uuid } from 'uuid';

export default class ItterableComponent {
  public id: string;

  constructor() {
    this.id = uuid();
  }
}
