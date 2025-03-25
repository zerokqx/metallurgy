import { FC } from 'react'
import { TStatusTheme } from '@/types/redux/themeSlice.types.ts'
import TSizeCss from '@/types/other/cssDimensions.types.ts'

type TThemeSwitchIcon = FC<{ status: TStatusTheme; sizePx?: TSizeCss<'px'> }>
export default TThemeSwitchIcon
