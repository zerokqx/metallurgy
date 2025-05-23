import { CSSProperties } from 'styled-components'

type TAlignContentItems = Partial<
    Pick<TAlignProperties, 'justifyContent' | 'alignItems'>
>
type TAlignProperties = Partial<
    Pick<
        CSSProperties,
        | 'justifyContent'
        | 'alignItems'
        | 'justifyItems'
        | 'alignContent'
        | 'justifySelf'
        | 'alignSelf'
    >
>
export type { TAlignContentItems }
export default TAlignProperties
