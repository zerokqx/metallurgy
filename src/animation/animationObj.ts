import { AnimationProperties } from '@/animation/animation'

class Animation {
    private readonly animation: AnimationProperties
    private readonly keyframes: AnimationProperties['animationStyles'][]

    constructor(animation: AnimationProperties) {
        this.animation = animation
        this.keyframes = []
        this.createRoadKeyframes()
    }

    get animationProps() {
        return this.animation
    }

    get roadKeyframesProps() {
        return this.keyframes
    }

    /**
     * @description Извлекает дополнительные ключевые кадры отличные от `animationStyles`
     */
    createRoadKeyframes() {
        const redFlag = ['initialStyles', 'animationStyles', 'controls']
        for (const element in this.animation) {
            !redFlag.includes(element) &&
                this.keyframes.push(this.animation[element])
        }
    }
}

export default Animation
