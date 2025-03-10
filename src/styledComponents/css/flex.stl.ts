import { css } from "styled-components";
import { FlexBoxProps } from "@/Types/styledComponents/flex.types.ts";


/**
 * @description Стили флексбокса
 * @param {string} [direction] Какой flex контейнер будет row или column или другие
 * @param {string} [x] justify выравнивание для flex контейнера `(По оси X)`
 * @param {string} [y] align выравнивание для flex контейнера `(По оси Y)`
 * @param {string} [gap] Растояние (Пробел) между flex элементами
 */
const flexBox = ({ direction, x, y, gap }: FlexBoxProps) => css`
    display: flex;
    flex-direction: ${direction || "inherit"};
    justify-content: ${x || "inherit"} ;
    align-items: ${y || "inherit"};
    gap:${gap || "inherit"};


`

export default flexBox