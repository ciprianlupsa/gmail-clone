class EmailRowModel {
  constructor(
    public id: string,
    public from: string,
    public title: string,
    public subject: string,
    public description: string,
    public time: string
  ) {}
}

export default EmailRowModel;
