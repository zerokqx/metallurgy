import { lightTheme } from '@/styledComponents/css/theme.stl.ts'
import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'
import { SpanBlue } from '@/styledComponents/css/text.stl.ts'

interface RainbowMap {
    text: string
    bold?: boolean
}

const rainbowMap: RainbowMap[] = [
    { text: 'Мы создаём ', bold: true },
    { text: 'будущее металлообработки — ' },
    { text: 'инновации', bold: true },
    { text: ', мастерство и качество в каждом изделии' },
]

const RainbowText = () => {
    const contrast = lightTheme.text.accent
    const night = lightTheme.text.primary

    // Отдельные компоненты с цветом
    const SpanBlueBoldContrast = ({ children }: { children: string }) => (
        <SpanBlue color={contrast}>{children}</SpanBlue>
    )

    const SpanBlueUnContrast = ({ children }: { children: string }) => (
        <SpanBlue color={night}>{children}</SpanBlue>
    )

    return (
        <>
            <ContainerFlex
                direction="column"
                gap="0px"
                justifyContent="center"
                alignItems="start"
                height="fit-content"
                padding="20px"
            >
                <SpanBlue fontWeight={500} color={contrast} fontSize="70px">
                    Добро пожаловать
                </SpanBlue>
                <p>
                    {rainbowMap.map((element, index) =>
                        element.bold ? (
                            <SpanBlueBoldContrast key={index}>
                                {element.text}
                            </SpanBlueBoldContrast>
                        ) : (
                            <SpanBlueUnContrast key={index}>
                                {element.text}
                            </SpanBlueUnContrast>
                        )
                    )}
                </p>
            </ContainerFlex>
        </>
    )
}
export default RainbowText
