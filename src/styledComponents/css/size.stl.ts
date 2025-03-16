import { css } from 'styled-components'
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
export type SizeProps = Pick<CSSProperties, 'height' | 'width' | 'maxWidth' | 'minWidth' | 'maxHeight' | 'minHeight'>
/**
 * Утилита для применения размеров в styled-components.
 *
 * Данная функция позволяет динамически применять CSS свойства, связанные с размерами (высота, ширина, максимальная/минимальная ширина и высота)
 * в зависимости от переданных в компонент пропсов.
 *
 * Пример использования:
 * ```tsx
 * const Box = styled.div<SizeProps>`
 *   ${size};
 *   background-color: lightblue;
 * `;
 *
 * <Box height="100px" width="50%" maxWidth="200px" minHeight="50px" />;
 * ```
 *
 * @param {SizeProps} props - Свойства, связанные с размерами, которые применяются к элементу.
 * @returns {string} - Сгенерированный CSS для указанных свойств размеров.
 */
export const size = css<SizeProps>`
    ${(props) => props.height && `height: ${props.height};`}
    ${(props) => props.width && `width: ${props.width};`}
    ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`}
    ${(props) => props.minWidth && `min-width: ${props.minWidth};`}
    ${(props) => props.maxHeight && `max-height: ${props.maxHeight};`}
    ${(props) => props.minHeight && `min-height: ${props.minHeight};`}
`
