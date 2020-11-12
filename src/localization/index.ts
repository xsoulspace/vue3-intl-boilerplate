import { deepCopyObj } from '@/functions/deepCopyObj'
import { inject, provide, Ref, ref } from 'vue'
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
    const keysArr = key.includes('.') ? key.split('.') : [key]
    const langFile = LangMessages[this.locale]
    const strValue: string = (() => {
      try {
        let tempObj: LocaleMessageInterface | LangFile = deepCopyObj(langFile)
        for (let i = 0; i < keysArr.length; i++) {
          const levelKey = keysArr[i]
          if (!(levelKey in tempObj))
            throw Error(
              `no key ${levelKey} found in tempObj for ${this.locale} locale!`
            )
          const valueOrObject: Maybe<
            LocaleMessageInterface | string
          > = (tempObj as any)[levelKey]
          switch (typeof valueOrObject) {
            case 'string':
              return valueOrObject
            case 'object':
              if (valueOrObject != null) {
                tempObj = valueOrObject
                break
              }
            default:
              throw Error(
                `no value found for key ${levelKey} found in langFile for ${this.locale} locale!`
              )
          }
        }
        return ''
      } catch (error) {
        console.error(error)
        return ''
      }
    })()
    return strValue
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
