import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'
import { Switch } from '@/components/ui/switch.tsx'
import { FVoid } from '@/types/hooks/useMotionAnimation.types.ts'
import ThemSwitchIcon from '@/components/Header/ThemeSwitch/ThemSwitchIcon'
import { useTheme } from '@/hooks/useTheme'
import { useAppSelector } from '@/hooks/useRedux'
import { selectThemeState } from '@/redux/slices/theme.slice'

const ThemeSwitch = () => {
    const stateTheme = useAppSelector(selectThemeState)

    const [swapTheme] = useTheme()
    const switchAbstract: FVoid = () => {
        switch (stateTheme) {
            case 'dark':
                return swapTheme('light')
            default:
                return swapTheme('dark')
        }
    }
    return (
        <ContainerFlex paddingRight={'10px'} alignItems={'center'} gap={'5px'}>
            <ThemSwitchIcon />
            <Switch
                onCheckedChange={switchAbstract}
                // checked={state === 'dark'}
            />
        </ContainerFlex>
    )
}
export default ThemeSwitch
