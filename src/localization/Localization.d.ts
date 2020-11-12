declare interface LocaleMessageInterface {
  [prop: string]: LocaleMessageInterface | string
}

declare interface TourLangInterface extends LocaleMessageInterface {
  [prop: string]: {
    title: string
    content: string
    placement?: Maybe<string>
  }
}

declare interface SettingsLangInterface extends LocaleMessageInterface {
  header: string
  chooseLanguage: string
  darkTheme: string
  sheetsNumerationEnabled: string
  showNumeration: string
  settingsOnStart: string
  openIntroTutorial: string
  tryToRecoverNumeration: string
  chooseColor: string
}

declare interface LangFile extends LocaleMessageInterface {
  introTour: TourLangInterface
  settings: SettingsLangInterface
  item: {
    nameCannotBeEmpty: string
  }
  brokenNumeration: {
    header: string
    whatWeFound: string
    tryToRecover: string
  }
  buttons: {
    yes: string
    no: string
    skipTutorial: string
    previousStep: string
    nextStep: string
    finishTour: string
  }
  alerts: {
    successfulSync: string
    successfulSheetsLoad: string
    successfulSheetsRecover: string
    introTutorialCompleted: string
    activated: string
    deactivated: string
    numerationRecover: string
    onOpenTutorial: string
    numeration: string
    numerationVisibility: string
  }
}
