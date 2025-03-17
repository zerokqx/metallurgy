import { AnimationProperties } from '@/animation/animation'


const glass: AnimationProperties & { twoState: AnimationProperties['animationStyles'] } = {
    initialStyles: {
        background: 'rgba(255,255,255)',
    }
    ,
    animationStyles: {
        backdropFilter: 'blur(10px)',
    }, controls: { duration: 1 },
    twoState: {
        backdropFilter: 'blur(0)',
    },

}
export default glass