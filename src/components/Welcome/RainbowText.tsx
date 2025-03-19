import { lightTheme } from '@/styledComponents/css/theme.stl.ts'
import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'
import { SpanBlue } from '@/styledComponents/css/text.stl.ts'
import rainbowMap from '@/dataFile/rainbowText.data.ts'
import TRainbowMap from '@/types/rainboxText.types.ts'

const RainbowText = () => {
    const contrast: string = lightTheme.text.accent
    const night: string = lightTheme.text.primary

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
                flexDirection="column"
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
                    {rainbowMap.map(
                        (element: Readonly<TRainbowMap>, index: number) =>
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
