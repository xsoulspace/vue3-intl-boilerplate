import { Component } from 'vue'
import { RouteRegistrator } from './RouteRegistrator'

enum FeatureWidgetsEnum {
  SheetWidget = 'SheetWidget',
}

const FeatureWidgetsFilesObj = {
  SheetWidget: {
    index: 'index',
  },
}

type FeatureWidgets = {
  [widget in FeatureWidgetsEnum]: Component
}

const FEATURE_WIDGETS_FOLDER = 'featureWidgets/'
const routeRegistrator = new RouteRegistrator<
  FeatureWidgets,
  typeof FeatureWidgetsEnum
>(FEATURE_WIDGETS_FOLDER, FeatureWidgetsEnum)

export const FeatureWidgets = routeRegistrator.getWidgetsWithinDirectory({
  requestingFiles: FeatureWidgetsFilesObj,
})
