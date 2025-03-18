// const glass: AnimationProperties = as AnimationProperties
// export default glass
import Animation from '@/animation/animationObj'
import { AnimationProperties } from '@/animation/animation'

const glass = new Animation({
    initialStyles: {
        background: 'rgba(255,255,255)',
    },
    animationStyles: {
        opacity: '100%',

        backdropFilter: 'blur(10px)',
    },
    controls: { duration: 0.2 },
    twoState: {
        opacity: '0%',
        backdropFilter: 'blur(0px)',
    },
} as AnimationProperties)
export default glass
