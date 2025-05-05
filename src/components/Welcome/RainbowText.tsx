import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'
import { SpanBlue } from '@/styledComponents/css/text.stl.ts'
import TRainbowMap from '@/types/rainboxText.types.ts'
import { useTheme } from 'styled-components'
import TTheme from '@/types/styledComponents/css/theme/theme.types'
import { useLoaderData } from 'react-router'
import { usePreferredLanguage } from "@uidotdev/usehooks";

const RainbowText = () => {
    const theme: TTheme = useTheme() as TTheme
    const contrast: string = theme.text.accent
    const night: string = theme.text.primary
    const lang = usePreferredLanguage()
    console.log(lang)
    const rainbowMap = useLoaderData()[lang]
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
                    {lang === "en-US"? "Welcome": "Добро пожаловать"}
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
