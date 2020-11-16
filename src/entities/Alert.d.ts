import { LangfullEntity } from './LangfullEntitiy'

declare class Alert {
  constructor(
    public id: number = 0,
    public title: LangfullEntity = { rus: '', eng: '' }
  ) {}
}
