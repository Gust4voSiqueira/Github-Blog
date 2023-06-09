import 'styled-components'
import { defaultTheme } from '../global/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface, import/export
  export interface DefaultTheme extends ThemeType {}
}
