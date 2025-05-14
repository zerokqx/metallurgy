// const glass: AnimationProperties = as AnimationProperties
// export default glass
import Animation from '@/animation/animationObj'
import TAnimationProperties from '@/types/other/animation.types.ts'

const glass = new Animation({
    initialStyles: {
        background: 'rgba(255,255,255)',
    },
    animationStyles: {
        opacity: '100%',

        backdropFilter: 'blur(10px)',
    },
    controls: { duration: 0.9 },
    twoState: {
        opacity: '0%',
        backdropFilter: 'blur(0px)',
    },
} as TAnimationProperties)
export default glass
