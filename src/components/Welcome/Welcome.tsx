import metall from '@@/metall.jpg'
import AspectRatioStyled from '@/styledComponents/AspectRatio.stl.ts'
import no_image from '@@/no_image.png'
import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'
import { EmojiInsert, SpanBlue } from '@/styledComponents/css/text.stl.ts'
import { lightTheme } from '@/styledComponents/css/theme.stl.ts'
import styled from 'styled-components'

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
                <SpanBlue color={contrast} fontSize={'70px'}>
                    {' '}
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
const Slice = styled.div`
    width: 0%;
    height: 10px;
    border-radius: 20px;
    width: 100%;
    animation: sword-swipe 9s cubic-bezier(0.62, 0.92, 0, 0.98) infinite; /* Анимация на повтор */
    background-color: ${({ theme }) => theme.contrast.contrastRISD_Blue};
    @keyframes sword-swipe {
        0% {
            box-shadow: 0 0 10px
                ${({ theme }) => theme.contrast.contrastRISD_Blue};
        }
        25% {
            box-shadow: 10px 0 20px
                ${({ theme }) => theme.contrast.contrastRISD_Blue};
        }
        50% {
            box-shadow: 20px 0 30px
                ${({ theme }) => theme.contrast.contrastRISD_Blue};
        }
        75% {
            box-shadow: 30px 0 40px
                ${({ theme }) => theme.contrast.contrastRISD_Blue};
        }
        100% {
            box-shadow: 40px 0 50px
                ${({ theme }) => theme.contrast.contrastRISD_Blue};
        }
    }
`
const Welcome = () => {
    return (
        <>
            <ContainerFlex
                background={'#ececec'}
                direction={'column'}
                gap={'10px'}
                padding={'20px'}
                x={'start'}
                y={'start'}
                height={'max-content'}
                width="100%"
            >
                <Slice />
                <ContainerFlex
                    direction="row"
                    width={'fit-content'}
                    x="center"
                    y="center"
                >
                    <RainbowText />
                    <EmojiInsert fontSize={'100px'}>👋</EmojiInsert>
                </ContainerFlex>
            </ContainerFlex>
        </>
    )
}

export default Welcome
