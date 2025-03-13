import { FooterStyled } from '@/styledComponents/footer.stl'
import {ContainerFlex} from "@/styledComponents/Containers.stl.ts";
import { Button } from '@/components/ui/button.tsx'
import styled from 'styled-components'
import { CustomP } from '@/styledComponents/css/text.stl.ts'

const Footer = () => {
    const ButtonWrapper = styled(Button)`background: ${({theme})=> theme.background.white};
    color: ${({theme})=> theme.contrast.contrastRISD_Blue};
        border: 2px solid ${({theme})=> theme.contrast.contrastRISD_Blue};
    `

    return (
        <FooterStyled className="footer">
            <ContainerFlex y={"center"} gap={"10px"}>
                <ButtonWrapper >Контакты</ButtonWrapper>
                <ButtonWrapper >О нас</ButtonWrapper>
                <ContainerFlex y={"center"} gap={"10px"}>
                    <CustomP wg={500} color={"textBlue"}>Author: </CustomP>
                    <CustomP fs={"15px"} color={"textNight"}>Murad Sahsinov</CustomP>
                </ContainerFlex>
            </ContainerFlex>
        </FooterStyled>
    )
}

export default Footer
