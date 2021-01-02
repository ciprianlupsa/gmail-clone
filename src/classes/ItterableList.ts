import ItterableComponent from './ItterableComponent';

class ItterableList<T> extends ItterableComponent {
  constructor(
    public listItems: Array<T>,
    public heading: string | null = null
  ) {
    super();

    console.log('THIS LIST', this);
  }
}

export default ItterableList;
