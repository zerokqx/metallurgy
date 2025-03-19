import { css } from 'styled-components'
import { TSpacing } from '@/types/styledComponents/css/spacing.types.ts'

/**
 * Applies spacing-related CSS properties (margin and padding).
 * @param {TSpacing} props - The spacing properties.
 * @returns {string} - The generated CSS rules.
 */
export const spacing = css<TSpacing>`
    ${(props) => props.m && `margin: ${props.m};`}
    ${(props) => props.mt && `margin-top: ${props.mt};`}
    ${(props) => props.mb && `margin-bottom: ${props.mb};`}
    ${(props) => props.ml && `margin-left: ${props.ml};`}
    ${(props) => props.mr && `margin-right: ${props.mr};`}
    ${(props) => props.p && `padding: ${props.p};`}
    ${(props) => props.pt && `padding-top: ${props.pt};`}
    ${(props) => props.pb && `padding-bottom: ${props.pb};`}
    ${(props) => props.pl && `padding-left: ${props.pl};`}
    ${(props) => props.pr && `padding-right: ${props.pr};`};
`
