export type FRepeatCss = (
    repeatData: string,
    value: number,
    unitOfMeasurement: string
) => string

/**
 *
 * @param repeatData Данные для Repeat, например `20`
 * @param value Сколько раз повторять
 * @param unitOfMeasurement единица измерения в которой будет Repeat например `%`
 */
export const repeatCss: FRepeatCss = (repeatData, value, unitOfMeasurement) => {
    return `repeat(${value}, ${repeatData + unitOfMeasurement})`
}
