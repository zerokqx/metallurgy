import styled from "styled-components";
import { ContainerFlexProps } from "@/Types/styledComponents/containers.types";
import flexBox from "./css/flex.stl.ts";


/**
 * @description Div контейнер с некими настройками стилей
 * @param {string} [props.direction] Какой flex контейнер будет row или column или другие
 * @param {string} [props.x] justify выравнивание для flex контейнера `(По оси X)`
 * @param {string} [props.y] align выравнивание для flex контейнера `(По оси Y)`
 * @param {string} [props.gap] Растояние (Пробел) между flex элементами
 * @param {string} [props.background] Цвет фона контейнера свойство background-color
 * @param {string} [props.padding] Внутрение пробелы
 * @param {string} [props.margin] Внейшние пробелы
 * @component
 */
export const ContainerFlex = styled.div<ContainerFlexProps>`
    ${props => flexBox(props)}
    background-color: ${props => props.background || "transparent"};
    padding: ${props => props.padding || "0px"};
    margin: ${props => props.margin || "0px"};

`