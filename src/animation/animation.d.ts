import { AnimationPlaybackControls, TargetAndTransition } from 'motion/react'

export type AnimationProperties = {
    initialStyles: TargetAndTransition;
    animationStyles: TargetAndTransition;
    controls?: AnimationPlaybackControls; // Сделаем контроллер необязательным
};
declare module '@/animation/*.anim' {
    const value: AnimationProperties
    export default value
}


