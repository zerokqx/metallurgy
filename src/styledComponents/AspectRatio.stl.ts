import styled from 'styled-components'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'

const AspectRatioStyled = styled(AspectRatio).attrs({
    className: 'welcome',
})`
    width: 50%;
    
    height: max-content;
    .welcome__img{
        border: 3px solid var(--bruze-color);
        border-radius: 20px;
    }
    
    
`
export default AspectRatioStyled