import { AnimationProperties } from '@/animation/animation'
import { lightTheme } from '@/styledComponents/css/theme.stl'


const gradient: AnimationProperties = {
    initialStyles: {
        background: 'rgba(255,255,255)',
    }
    ,
    animationStyles: {
        background: lightTheme.background.lowWhite,
    }, controls: { duration: 1 },

}
export default gradient