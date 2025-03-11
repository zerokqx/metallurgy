import metall from "@@/metall.jpg"
import AspectRatioStyled from '@/styledComponents/AspectRatio.stl.ts'
import no_image from "@@/no_image.png"
import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'
import { EmojiInsert, SpanBlue } from '@/styledComponents/css/text.stl.ts'
import { lightTheme } from '@/styledComponents/css/theme.stl.ts'

const RainbowText = ()=>{
    const contrast = lightTheme.contrast.contrastRISD_Blue
    const night =lightTheme.text.textNight
    return (
       <>
           <ContainerFlex direction={'column'} gap={"0px"}  x={'center'} y={'start'} height={'fit-content'} padding={'20px'}>
               <SpanBlue color={contrast} fontSize={'70px'}> Добро пожаловать</SpanBlue>
               <p>
                   <SpanBlue color={contrast}>Мы создаём </SpanBlue>
                   <SpanBlue color={night}>будущее металлообработки — </SpanBlue>
                   <SpanBlue color={contrast}>инновации</SpanBlue>
                   <SpanBlue color={night}>, мастерство и качество в каждом изделии</SpanBlue>
               </p>
           </ContainerFlex>
       </>
    )
}

const Welcome = () => {

    return (
        <>
            <ContainerFlex background={'#ececec'}  direction={'row'} gap={"60px"} padding={'20px'} x={'start'} y={'center'} height={'max-content'} width="100%">
                <RainbowText/>
                <EmojiInsert fontSize={"100px"}>👋</EmojiInsert>
            </ContainerFlex>
        </>
    )
}

export default Welcome;