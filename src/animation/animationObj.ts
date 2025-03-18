import { AnimationProperties } from '@/animation/animation'

/**
 * Класс Animation
 * @class
 * @description Управляет объектом анимации и обрабатывает ключевые кадры, исключая определённые свойства.
 * Предоставляет методы и свойства для доступа к анимации и её ключевым кадрам.
 */
class Animation {
    /**
     * @private
     * @readonly
     * @type {AnimationProperties}
     * @description Хранит объект анимации.
     */
    private readonly animation: AnimationProperties

    /**
     * @private
     * @readonly
     * @type {AnimationProperties['animationStyles'][]}
     * @description Хранит массив дополнительных ключевых кадров.
     */
    private readonly keyframes: AnimationProperties['animationStyles'][]

    /**
     * Создаёт экземпляр Animation.
     * @constructor
     * @param {AnimationProperties} animation - Объект с параметрами анимации.
     */
    constructor(animation: AnimationProperties) {
        this.animation = animation
        this.keyframes = []
        this.createRoadKeyframes()
    }

    /**
     * @public
     * @getter
     * @returns {AnimationProperties} Возвращает объект анимации.
     */
    get animationProps() {
        return this.animation
    }

    /**
     * @public
     * @getter
     * @returns {AnimationProperties['animationStyles'][]} Возвращает массив дополнительных ключевых кадров.
     */
    get roadKeyframesProps() {
        return this.keyframes
    }

    /**
     * @private
     * @description Извлекает дополнительные ключевые кадры, игнорируя свойства `initialStyles`, `animationStyles` и `controls`.
     * Ключевые кадры добавляются в массив `keyframes`.
     */
    private createRoadKeyframes() {
        const redFlag = ['initialStyles', 'animationStyles', 'controls']
        for (const element in this.animation) {
            if (!redFlag.includes(element)) {
                this.keyframes.push(this.animation[element])
            }
        }
    }
}

export default Animation
