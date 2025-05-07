import { JSX } from 'react'
import { THeaderStyle } from '@/types/styledComponents/header.types'
import TSizeCss from '@/types/other/cssDimensions.types'

export interface TDataNav {
    text: string
    link: string
    icon: JSX.Element
}

export type TCommonProps = {
    gridTemplate: TSizeCss<'fr'>
    center: THeaderStyle['justifyItems'] & THeaderStyle['alignItems']
}
