import { css } from 'styled-components'
import { CSSProperties } from 'styled-components/dist/types'

/**
 * @property {CSSProperties['margin']} [m] - General margin.
 * @property {CSSProperties['marginTop']} [mt] - Top margin.
 * @property {CSSProperties['marginBottom']} [mb] - Bottom margin.
 * @property {CSSProperties['marginLeft']} [ml] - Left margin.
 * @property {CSSProperties['marginRight']} [mr] - Right margin.
 * @property {CSSProperties['padding']} [p] - General padding.
 * @property {CSSProperties['paddingTop']} [pt] - Top padding.
 * @property {CSSProperties['paddingBottom']} [pb] - Bottom padding.
 * @property {CSSProperties['paddingLeft']} [pl] - Left padding.
 * @property {CSSProperties['paddingRight']} [pr] - Right padding.
 */
export interface SpacingProps {
    m?: CSSProperties['margin'];
    mt?: CSSProperties['marginTop'];
    mb?: CSSProperties['marginBottom'];
    ml?: CSSProperties['marginLeft'];
    mr?: CSSProperties['marginRight'];
    p?: CSSProperties['padding'];
    pt?: CSSProperties['paddingTop'];
    pb?: CSSProperties['paddingBottom'];
    pl?: CSSProperties['paddingLeft'];
    pr?: CSSProperties['paddingRight'];
}

/**
 * Applies spacing-related CSS properties (margin and padding).
 * @param {SpacingProps} props - The spacing properties.
 * @returns {string} - The generated CSS rules.
 */
export const spacing = css<SpacingProps>`
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
