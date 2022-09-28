/* eslint-disable import/no-named-as-default-member */
import type { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type StyleSet<T = any> = { [K in keyof T]: AnyStyle }
type Value<T> = T | (string & {})
type AnyStyle = ImageStyle & TextStyle & ViewStyle
type Extended<T> = { [K in keyof T]: Value<T[K]> }
type NamedStyles<T> = { [P in keyof T]: Extended<AnyStyle> }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CustomCreate = <T extends NamedStyles<T> | NamedStyles<any>>(
  styles: T | NamedStyles<T>,
) => StyleSet<T>

type CustomEStyleSheetType = {
  create: CustomCreate
  build: typeof EStyleSheet.build
  value: typeof EStyleSheet.value
  child: typeof EStyleSheet.child
  subscribe: typeof EStyleSheet.subscribe
  clearCache: typeof EStyleSheet.clearCache
  flatten: typeof EStyleSheet.flatten
  setStyleAttributePreprocessor: typeof EStyleSheet.setStyleAttributePreprocessor
  hairlineWidth: typeof EStyleSheet.hairlineWidth
  absoluteFillObject: typeof EStyleSheet.absoluteFillObject
  absoluteFill: typeof EStyleSheet.absoluteFill
}

const CustomEStyleSheet: CustomEStyleSheetType = {
  create: p => (EStyleSheet.create as CustomCreate)(p),
  build: (...rest) => EStyleSheet.build(...rest),
  value: (...rest) => EStyleSheet.value(...rest),
  child: (...rest) => EStyleSheet.child(...rest),
  subscribe: (...rest) => EStyleSheet.subscribe(...rest),
  clearCache: (...rest) => EStyleSheet.clearCache(...rest),
  flatten: (...rest) => EStyleSheet.flatten(...rest),
  setStyleAttributePreprocessor: (...rest) =>
    EStyleSheet.setStyleAttributePreprocessor(...rest),
  hairlineWidth: EStyleSheet.hairlineWidth,
  absoluteFillObject: EStyleSheet.absoluteFillObject,
  absoluteFill: EStyleSheet.absoluteFill,
}

export default CustomEStyleSheet
