import { FooterStyled } from '@/styledComponents/footer.stl'
import {ContainerFlex} from "@/styledComponents/Containers.stl.ts";
import { Button } from '@/components/ui/button.tsx'
import styled from 'styled-components'

const Footer = () => {
    const ButtonWrapper = styled(Button)`background: ${({theme})=> theme.background.white};
    color: ${({theme})=> theme.contrast.contrastRISD_Blue};
        border: 2px solid ${({theme})=> theme.contrast.contrastRISD_Blue};
    `

    return (
        <FooterStyled className="footer">
            <ContainerFlex gap={"10px"}>
                <ButtonWrapper >Контакты</ButtonWrapper>
                <ButtonWrapper >О нас</ButtonWrapper>

            </ContainerFlex>
        </FooterStyled>
    )
}

export default Footer
