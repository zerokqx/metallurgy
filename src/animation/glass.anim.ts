import { AnimationProperties } from '@/animation/animation'


const glass: AnimationProperties & { twoState: AnimationProperties['animationStyles'] } = {
    initialStyles: {
        background: 'rgba(255,255,255)',
    }
    ,
    animationStyles: {
        opacity:"100%",

        backdropFilter: 'blur(10px)',
    }, controls: { duration: 0.2 },
    twoState: {
        opacity:"0%",
        backdropFilter: 'blur(0px)',
    },

}
export default glass