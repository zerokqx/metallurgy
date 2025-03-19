import { css } from 'styled-components'
import { TFlexBox } from '@/types/styledComponents/flex.types.ts'

/**
 * @description Стили флексбокса
 * @param {string} [direction] Какой flex контейнер будет row или column или другие
 * @param {string} [justifyContent] justify выравнивание для flex контейнера `(По оси X)`
 * @param {string} [alignItems] align выравнивание для flex контейнера `(По оси Y)`
 * @param {string} [gap] Растояние (Пробел) между flex элементами
 */
const flexBox = ({
    flexDirection,
    justifyContent,
    alignItems,
    gap,
}: Readonly<TFlexBox>) => css`
    display: flex;
    flex-direction: ${flexDirection || 'inherit'};
    justify-content: ${justifyContent || 'inherit'};
    align-items: ${alignItems || 'inherit'};
    gap: ${gap || 'inherit'};
`

export default flexBox
