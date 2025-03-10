import {AspectRatio} from '@radix-ui/react-aspect-ratio'
import metall from "@@/metall.jpg"
import AspectRatioStyled from '@/styledComponents/AspectRatio.stl.ts'
const Welcome = () => (
    <AspectRatioStyled >
        <img className={"welcome__img"} src={metall} alt="Metall photo" />
    </AspectRatioStyled>
)

export default Welcome;