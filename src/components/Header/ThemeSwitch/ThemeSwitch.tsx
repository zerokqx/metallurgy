import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'
import { Switch } from '@/components/ui/switch.tsx'
import { FVoid } from '@/types/hooks/useMotionAnimation.types.ts'
import ThemSwitchIcon from '@/components/Header/ThemeSwitch/ThemSwitchIcon'
import { useTheme } from '@/hooks/useTheme'

const ThemeSwitch = () => {
    const [state,swapTheme]= useTheme()

    const switchAbstract: FVoid = () => {
        switch (state) {
            case 'dark':
                return swapTheme('light')
            default:
                return swapTheme('dark')
        }
    }
    return (
        <ContainerFlex paddingRight={'10px'} alignItems={'center'} gap={'5px'}>
            <ThemSwitchIcon status={state} />
            <Switch
                onCheckedChange={switchAbstract}
                checked={state === 'dark'}
            />
        </ContainerFlex>
    )
}
export default ThemeSwitch
