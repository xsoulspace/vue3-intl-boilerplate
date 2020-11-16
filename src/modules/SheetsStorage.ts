import { Ref, ref } from "vue";

export class SheetsStorage{
  private _sheets: Ref<Sheet[]> = ref<Sheet[]>([]) 
  public get sheets() : Sheet[]{
    return this._sheets.value
  }
  
}


