import { CSSProperties } from 'styled-components'

type TAlignProperties = Pick<
    CSSProperties,
    | 'justifyContent'
    | 'alignItems'
    | 'alignContent'
    | 'justifySelf'
    | 'alignSelf'
>
export default TAlignProperties
