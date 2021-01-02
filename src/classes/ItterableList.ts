import UniqueObject from './UniqueObject';

class ItterableList<T> extends UniqueObject {
  constructor(
    public listItems: Array<T>,
    public heading: string | null = null
  ) {
    super();

    console.log('THIS LIST', this);
  }
}

export default ItterableList;
