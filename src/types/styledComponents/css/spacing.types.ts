import { CSSProperties } from 'styled-components'

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
