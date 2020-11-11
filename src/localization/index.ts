import { Maybe } from '@/entities/Maybe'
import { inject, provide, Ref, ref } from 'vue'
import { Languages } from './Languages'
import { eng } from './_eng'
import { rus } from './_rus'

const LangMessages = {
  eng,
  rus,
}

export class MainLocalization {
  private static _providerKey: Symbol = Symbol()
  private static _locale: Ref<Languages> = ref(Languages.eng)
  public static get locale(): Languages {
    return MainLocalization._locale.value
  }
  public static set locale(value: Languages) {
    MainLocalization._locale.value = value
  }
  // TODO: add enum and solve problem with value by key extraction
  static $t(key: string) {
    return LangMessages[this.locale][key]
  }
  static createProvider({ locale }: { locale: Maybe<Languages> }): void {
    if (locale) this.locale = locale
    provide(this._providerKey, this)
  }
  static getMainLocalization() {
    const mainLocalization: Maybe<MainLocalization> = inject(this._providerKey)
    if (!mainLocalization) throw new Error('No MainLocalization provided!!!')
    return mainLocalization
  }
}
