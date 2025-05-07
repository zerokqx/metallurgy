import TTheme from '@/types/styledComponents/css/theme/theme.types'

export type TStatusTheme = 'light' | 'dark'

type TThemeDarkLight = {
    status: TStatusTheme
    statusBoolean: boolean
    theme:TTheme,
}
export default TThemeDarkLight
