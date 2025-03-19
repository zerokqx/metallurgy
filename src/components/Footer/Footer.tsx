import { FooterStyled } from '@/styledComponents/Footer.stl.ts'
import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'
import { CustomP } from '@/styledComponents/css/text.stl.ts'
import IconWithText from '@/styledComponents/IconWithText.tsx'
import ButtonShadcnWrapper from '@/styledComponents/ButtonShadcnWrapper.tsx'
import { useTheme } from 'styled-components'
import { Theme } from '@/styledComponents/css/theme.stl.ts'
import mapFooter from '@/dataFile/footer.data.ts'
import { TFooter } from '@/types/components/footer.types.ts'

const Footer = () => {
    const theme: Theme = useTheme() as Theme
    return (
        <FooterStyled className="footer">
            <ContainerFlex
                justifyContent="center"
                alignItems="center"
                gap="10px"
            >
                <ButtonShadcnWrapper>Контакты</ButtonShadcnWrapper>
                <ButtonShadcnWrapper>О нас</ButtonShadcnWrapper>
                <ContainerFlex
                    flexDirection="column"
                    alignItems="center"
                    gap="5px"
                >
                    <>
                        {mapFooter.map((item: TFooter, i: number) => {
                            const IconComponent = item.Icon
                            return (
                                <IconWithText key={i}>
                                    <IconComponent color={theme.icon.accent} />
                                    <CustomP
                                        fontSize="15px"
                                        color={theme.text.primary}
                                    >
                                        {item.text}
                                    </CustomP>
                                </IconWithText>
                            )
                        })}
                    </>
                </ContainerFlex>
            </ContainerFlex>
        </FooterStyled>
    )
}

export default Footer
