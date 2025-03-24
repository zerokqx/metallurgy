import { TSize } from '@/types/styledComponents/css/size.type'
import { FC } from 'react'
import { SeparatorProps } from '@radix-ui/react-separator'
import { CSSProperties } from 'styled-components'

export type TSeparatorWrapperStyled = Pick<
    Parameters<TSeparatorWrapper>[0],
    'width' | 'height' | 'backgroundColor'
>

export type TSeparatorWrapper = FC<
    Pick<TSize, 'width' | 'height'> &
        Pick<SeparatorProps, 'orientation'> &
        Pick<CSSProperties, 'backgroundColor'>
>
