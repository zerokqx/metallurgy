import { AnimationProperties } from '@/animation/animation'

const testAnima: AnimationProperties = {
    initialStyles: {},
    animationStyles: {},
    x: { background: 'red' },
    y: { background: 'blue' },
}

class Animation {
    private readonly animation: AnimationProperties
    private readonly keyframes: any[]

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

const w = new Animation(testAnima)
console.log(w.roadKeyframesProps)

class AnimationLazy {}
