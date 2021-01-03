import UniqueObject from './UniqueObject';

class ItterableList<T> extends UniqueObject {
  constructor(
    public listItems: Array<T>,
    public heading: string | null = null
  ) {
    super();
  }
}

export default ItterableList;
