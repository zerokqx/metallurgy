import { CSSProperties } from 'styled-components/dist/types'

/**
 * Интерфейс для определения свойств размеров в styled-components.
 *
 * @property [height] - Высота элемента, например: "100px", "10%", "auto".
 * @property [width] - Ширина элемента, например: "100px", "80%", "inherit".
 * @property [maxWidth] - Максимальная ширина элемента.
 * @property [minWidth] - Минимальная ширина элемента.
 * @property [maxHeight] - Максимальная высота элемента.
 * @property [minHeight] - Минимальная высота элемента.
 */
export type TSize = Partial<
    Pick<
        CSSProperties,
        'height' | 'width' | 'maxWidth' | 'minWidth' | 'maxHeight' | 'minHeight'
    >
>
