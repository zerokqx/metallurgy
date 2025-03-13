import { lightTheme } from '@/styledComponents/css/theme.stl.ts'
import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'
import { SpanBlue } from '@/styledComponents/css/text.stl.ts'
const RainbowText = () => {
    const contrast = lightTheme.contrast.contrastRISD_Blue
    const night = lightTheme.text.textNight
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
                <SpanBlue color={contrast} fs={'70px'}>
                    Добро пожаловать
                </SpanBlue>
                <p>
                    <SpanBlue color={contrast}>Мы создаём </SpanBlue>
                    <SpanBlue color={night}>
                        будущее металлообработки —{' '}
                    </SpanBlue>
                    <SpanBlue color={contrast}>инновации</SpanBlue>
                    <SpanBlue color={night}>
                        , мастерство и качество в каждом изделии
                    </SpanBlue>
                </p>
            </ContainerFlex>
        </>
    )
}
export default RainbowText