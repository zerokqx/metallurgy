import { CSSProperties } from 'styled-components'

/**
 * @property {CSSProperties['margin']} [margin] - General margin.
 * @property {CSSProperties['marginTop']} [marginTop] - Top margin.
 * @property {CSSProperties['marginBottom']} [marginBottom] - Bottom margin.
 * @property {CSSProperties['marginLeft']} [marginLeft] - Left margin.
 * @property {CSSProperties['marginRight']} [marginRight] - Right margin.
 * @property {CSSProperties['padding']} [padding] - General padding.
 * @property {CSSProperties['paddingTop']} [paddingTop] - Top padding.
 * @property {CSSProperties['paddingBottom']} [paddingBottom] - Bottom padding.
 * @property {CSSProperties['paddingLeft']} [paddingLeft] - Left padding.
 * @property {CSSProperties['paddingRight']} [paddingRight] - Right padding.
 */
export type TSpacing = Partial<
    Pick<
        CSSProperties,
        | 'margin'
        | 'marginTop'
        | 'marginBottom'
        | 'marginLeft'
        | 'marginRight'
        | 'padding'
        | 'paddingTop'
        | 'paddingBottom'
        | 'paddingLeft'
        | 'paddingRight'
    >
>
