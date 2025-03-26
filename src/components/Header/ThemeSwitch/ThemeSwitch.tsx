import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'
import { Switch } from '@/components/ui/switch.tsx'
import useLocalVariable from '@/hooks/useLocalVariable.ts'
import useSwapTheme from '@/hooks/useSwapTheme.ts'
import { FVoid } from '@/types/hooks/useMotionAnimation.types.ts'
import ThemSwitchIcon from '@/components/Header/ThemeSwitch/ThemSwitchIcon'
import { TStatusTheme } from '@/types/redux/themeSlice.types'

const ThemeSwitch = () => {
    const [swapTheme] = useSwapTheme()
    const [status, setter] = useLocalVariable<TStatusTheme>('theme')

    const switchAbstract: FVoid = () => {
        switch (status) {
            case 'dark':
                swapTheme('light')
                setter('light')
                break
            default:
                swapTheme('dark')
                setter('dark')
                break
        }
    }
    return (
        <ContainerFlex paddingRight={'10px'} alignItems={'center'} gap={'5px'}>
            <ThemSwitchIcon status={status} />
            <Switch
                onCheckedChange={switchAbstract}
                checked={status === 'dark'}
            />
        </ContainerFlex>
    )
}
export default ThemeSwitch
