import { useTheme } from 'styled-components'
import { TTheme } from '@/styledComponents/css/theme.stl.ts'
import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'
import { FaMoon } from 'react-icons/fa'
import { Switch } from '@/components/ui/switch.tsx'
import useLocalVariable from '@/hooks/useLocalVariable.ts'
import { HiSun } from 'react-icons/hi2'
import { useAppSelector } from '@/hooks/useRedux.ts'
import { selectThemeState } from '@/redux/slices/theme.slice.ts'
import useSwapTheme from '@/hooks/useSwapTheme.ts'
import { FVoid } from '@/types/hooks/useMotionAnimation.types.ts'

const ThemeSwitch = () => {
    const theme = useTheme() as TTheme
    const selectorTheme = useAppSelector(selectThemeState)
    const [swapTheme] = useSwapTheme()

    console.log(selectorTheme)
    const [status, setter] = useLocalVariable('theme')

    const switchAbstract: FVoid = () => {
        if (status === 'dark') {
            swapTheme('light')
            setter('light')
        } else {
            swapTheme('dark')
            setter('dark')
        }
    }
    return (
        <ContainerFlex paddingRight={'10px'} alignItems={'center'} gap={'5px'}>
            {status === 'dark' ? (
                <FaMoon fill={theme.icon.primary} size={'20px'} />
            ) : (
                <HiSun fill={theme.icon.primary} size={'20px'} />
            )}

            <Switch
                onCheckedChange={() => {
                    switchAbstract()
                }}
                checked={status === 'dark'}
            />
        </ContainerFlex>
    )
}
export default ThemeSwitch
