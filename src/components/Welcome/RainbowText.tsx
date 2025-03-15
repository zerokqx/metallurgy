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

    const SpanBlueBoldContrast = ({ children, keys }: { children: string, keys: number }) => (
        <SpanBlue key={keys} color={contrast}>{children} </SpanBlue>
    )

    const SpanBlueUnContrast = ({ children, keys }: { children: string, keys: number }) => (
        <SpanBlue key={keys} color={night}>
            {children}
        </SpanBlue>
    )


    return (
        <>
            <ContainerFlex
                direction={'column'}
                gap={'0px'}
                x={'center'}
                y={'start'}
                height={'fit-content'}
                padding={'20px'}
            >
                <SpanBlue wg={500} color={contrast} fs={'70px'}>
                    Добро пожаловать
                </SpanBlue>
                <p>

                    {rainbowMap.map((element, index) => element.bold
                        ? (
                            <SpanBlueBoldContrast keys={index}>{element.text}</SpanBlueBoldContrast>
                        )
                        : (
                            <SpanBlueUnContrast keys={index}>{element.text}</SpanBlueUnContrast>
                        ),
                    )}

                </p>
            </ContainerFlex>
        </>
    )
}
export default RainbowText