import DesignTokensBailuVar from '@fruits-chain/design-tokens-bailu/lib/e-stylesheet.js'

import EStyleSheet from '@/lib/react-native-extended-stylesheet'

import { customTheme } from './custom-theme-var'

const customThemeVar = Object.keys(customTheme).reduce<
  Record<string, string | number>
>((pre, cur) => {
  pre[`$${cur}`] = customTheme[cur]
  return pre
}, {})

EStyleSheet.build({
  ...DesignTokensBailuVar,
  ...customThemeVar,
})
