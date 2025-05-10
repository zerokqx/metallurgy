import { css } from 'styled-components'
import { TSpacing } from '@/types/styledComponents/css/spacing.types.ts'

/**
 * Applies spacing-related CSS properties (margin and padding).
 * @param {TSpacing} props - The spacing properties.
 * @returns {string} - The generated CSS rules.
 */
export const spacing = css<Readonly<TSpacing>>`
    ${(props) => props.margin && `margin: ${props.margin};`}
    ${(props) => props.marginTop && `margin-top: ${props.marginTop};`}
    ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom};`}
    ${(props) => props.marginLeft && `margin-left: ${props.marginLeft};`}
    ${(props) => props.marginRight && `margin-right: ${props.marginRight};`}
    ${(props) => props.padding && `padding: ${props.padding};`}
    ${(props) => props.paddingTop && `padding-top: ${props.paddingTop};`}
    ${(props) =>
        props.paddingBottom && `padding-bottom: ${props.paddingBottom};`}
    ${(props) => props.paddingLeft && `padding-left: ${props.paddingLeft};`}
    ${(props) => props.paddingRight && `padding-right: ${props.paddingRight};`};
`
