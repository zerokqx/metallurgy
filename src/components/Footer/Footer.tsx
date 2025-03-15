import { FooterStyled } from '@/styledComponents/footer.stl'
import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'
import { CustomP } from '@/styledComponents/css/text.stl.ts'
import { FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IconType } from 'react-icons'
import IconWithText from '@/lib/components/IconWithText.tsx'
import ButtonShadcnWrapper from '@/lib/components/ButtonShadcnWrapper.tsx'
import { useTheme } from 'styled-components'
import { Theme } from '@/styledComponents/css/theme.stl.ts'

interface FooterProps {
    text: string;
    Icon: IconType;
}

const mapFooter: FooterProps[] = [
    { text: 'Мурад Шахсинов', Icon: FaUser },
    { text: 'swiftkey382@gmail.com', Icon: MdEmail },
]


const Footer = () => {
    const theme = useTheme() as Theme
    console.log(theme)
    return (
        <FooterStyled className="footer">
            <ContainerFlex x="center" y="center" gap="10px">
                <ButtonShadcnWrapper>Контакты</ButtonShadcnWrapper>
                <ButtonShadcnWrapper>О нас</ButtonShadcnWrapper>
                <ContainerFlex direction="column" y="center" gap="5px">
                    <>
                        {mapFooter.map((item, i) => {
                            const IconComponent = item.Icon
                            return (
                                <IconWithText key={i}>
                                    <IconComponent color={theme.icon.accent} />
                                    <CustomP fs="15px" color={theme.text.primary}>
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
