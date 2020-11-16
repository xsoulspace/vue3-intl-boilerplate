declare class Sheet {
  constructor(
    public id: number = 0,
    public name: string = '',
    public visibility: Maybe<Excel.SheetVisibility> = 'Visible',
    public position: number
  ) {}
}
