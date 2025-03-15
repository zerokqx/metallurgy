import { AnimationPlaybackControls, TargetAndTransition } from 'motion/react'

export type AnimationProperties = {
    initialStyles: TargetAndTransition;
    animationStyles: TargetAndTransition;
    controls?: AnimationPlaybackControls; // Сделаем контроллер необязательным
};
declare module '@/animation/*.anim.ts' {
    const animation: AnimationProperties
    export default animation
}


