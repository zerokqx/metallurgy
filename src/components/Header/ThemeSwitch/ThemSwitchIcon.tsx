import { useTheme } from 'styled-components'
import TTheme from '@/types/styledComponents/css/theme/theme.types.ts'
import { FaMoon } from 'react-icons/fa'
import { HiSun } from 'react-icons/hi2'
import TSizeCss from '@/types/other/cssDimensions.types'
import TThemeSwitchIcon from '@/types/components/switch.types'

const ThemSwitchIcon: TThemeSwitchIcon = ({ status, sizePx }) => {
    const theme = (useTheme() as TTheme).icon.primary
    const size: TSizeCss<'px'> = sizePx || '20px'
    return status === 'dark' ? (
        <FaMoon fill={theme} size={size} />
    ) : (
        <HiSun fill={theme} size={size} />
    )
}
export default ThemSwitchIcon
