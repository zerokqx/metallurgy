import TAnimationProperties from '@/types/other/animation.types.ts'

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
     * @type {TAnimationProperties}
     * @description Хранит объект анимации.
     */
    private readonly animation: TAnimationProperties

    /**
     * @private
     * @readonly
     * @type {TAnimationProperties['animationStyles'][]}
     * @description Хранит массив дополнительных ключевых кадров.
     */
    private readonly keyframes: TAnimationProperties['animationStyles'][]

    /**
     * Создаёт экземпляр Animation.
     * @constructor
     * @param {TAnimationProperties} animation - Объект с параметрами анимации.
     */
    constructor(animation: TAnimationProperties) {
        this.animation = animation
        this.keyframes = []
        this.createRoadKeyframes()
    }

    /**
     * @public
     * @getter
     * @returns {TAnimationProperties} Возвращает объект анимации.
     */
    get animationProps(): TAnimationProperties {
        return this.animation
    }

    /**
     * @public
     * @getter
     * @returns {TAnimationProperties['animationStyles'][]} Возвращает массив дополнительных ключевых кадров.
     */
    get roadKeyframesProps(): TAnimationProperties['animationStyles'][] {
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
