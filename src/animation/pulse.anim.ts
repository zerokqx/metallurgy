import { AnimationProperties } from '@/animation/animation'
import { AnimationPlaybackControls } from 'motion'


const animation: AnimationProperties = {
    initialStyles: {
        background: 'red',

    },
    animationStyles: {
        background: 'green',
    },
    controls: { duration: 54234 } as unknown as AnimationPlaybackControls,
}
export default animation