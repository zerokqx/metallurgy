import { useTheme } from 'styled-components'
import TTheme from '@/types/styledComponents/css/theme/theme.types'
import { Separator } from '@/components/ui/separator'
import {
    TSeparatorWrapper,
    TSeparatorWrapperStyled,
} from '@/types/components/sepparatorWrapper.types'

const SeparatorWrapper: TSeparatorWrapper = ({
    width,
    height,
    orientation,
    backgroundColor,
    ...props
}) => {
    const theme = useTheme() as TTheme

    const styledSeparator: TSeparatorWrapperStyled = {
        backgroundColor: backgroundColor || theme.icon.primary,
        width: width || '1px',
        height: height || '20px',
    }

    return (
        <Separator
            style={styledSeparator}
            orientation={orientation || 'vertical'}
            {...props}
        />
    )
}

export default SeparatorWrapper
